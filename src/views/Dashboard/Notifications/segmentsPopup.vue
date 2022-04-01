<template>

  <div class="popup">

    <div class="popup__background"></div>


    <notification-editor
        :currentItem="itemList[editorIndex]"
        @toggleModal="takeModalState($event)"
        :notifEditorState="notifEditorState"
    />


    <modal-new-notification
        @addNotification="takeModalState($event)"
        @closePopup="takeModalState({modal: 'newNotification', state: false})"
        :newModalState="newModalState"
    />

    <modal-submit-settings
        @toggleModal="takeModalState($event)"
        :submitModalState="submitModalState"
    />

    <div class="main-wrapper">

      <div class="main__a-side">
        <ul class="a-side__list">
          <li
              :class="['a-side__item', 'a-side__item' + index, {'a-side--active': aSideNumber === index}]"
              @click="updateASide(index)"
              v-for="index in 10"
              :key="index"
          >
            <button class="a-side__button">
              <redo-icon v-if="index === 1" />

              <span class="item-number a-side__number" v-else>0{{ index - 1 }}</span>

            </button>
          </li>
        </ul>
      </div>

      <section class="popup-segment">

        <segment-header :aSideNumber="aSideNumber" />

        <div class="stat">

          <h3 class="segment__title title">Статистика по сегменту</h3>

          <ul class="stat__list">
            <li class="stat__item">
              <p class="stat__text">Клиентов</p>
              <p class="stat__text text--bold">4 180</p>
            </li>
            <li class="stat__item">
              <p class="stat__text">От общего числа</p>
              <p class="stat__text text--bold">38%</p>
            </li>
          </ul>

          <div class="graph">
            <div class="popup-graph__item popup-graph__item1">
              <div class="graph__header">
                <h4 class="graph__title">Переходов за период</h4>
                <trend-up-icon />
              </div>

              <ul class="graph__list">
                <li class="graph__section">
                  <p class="graph__text">Средние, на грани</p>
                  <p class="graph__text graph__text--bold">+ 6</p>
                </li>
                <li class="graph__section">
                  <p class="graph__text">Новички</p>
                  <p class="graph__text graph__text--bold">+ 2</p>
                </li>
              </ul>

            </div>

            <div class="popup-graph__item popup-graph__item2">
              <div class="graph__header">
                <h4 class="graph__title">Ближайшие потери</h4>
                <trend-down-icon />
              </div>

              <ul class="graph__list">
                <li class="graph__section">
                  <p class="graph__text">В зоне риска</p>
                  <div class="graph-item__bold">
                    <p class="graph__time">5 дн</p>
                    <p class="graph__text text--bold">&nbsp;‒ 5</p>
                  </div>
                </li>

                <li class="graph__section">
                  <p class="graph__text">Новички</p>
                  <div class="graph-item__bold">
                    <p class="graph__time">16 ч</p>
                    <p class="graph__text text--bold">&nbsp;‒ 4</p>
                  </div>
                </li>
              </ul>

            </div>
          </div>

        </div>

        <div class="params">
          <h3 class="params__title title">Параметры сегмента</h3>

          <ul class="params__list">
            <li class="params__item">
              <p class="params__text">Давность, дней</p>
              <p class="params__text params__text--bold">0 ‒ 149</p>
            </li>
            <li class="params__item">
              <p class="params__text">Количество покупок</p>
              <p class="params__text params__text--bold">2 ‒ 4</p>
            </li>
            <li class="params__item">
              <p class="params__text">Общая сумма покупок</p>
              <p class="params__text params__text--bold">600 ₽ ‒ 8 000 ₽</p>
            </li>
          </ul>
        </div>

        <div class="guidance">
          <h3 class="guidance__title title">Рекомендации по сегменту</h3>

          <p class="guidance__text guidance__text1">
            Являясь всего лишь частью общей картины, предприниматели в сети интернет
            лишь добавляют фракционных разногласий и указаны как претенденты на роль ключевых факторов.
            В своём стремлении повысить качество жизни, они забывают, что постоянный количественный
            рост и сфера нашей активности требует анализа дальнейших направлений развития.
            Как уже неоднократно упомянуто, действия представителей оппозиции,
            превозмогая сложившуюся непростую экономическую ситуацию, обнародованы.
          </p>

          <p class="guidance__text">
            В своём стремлении повысить качество жизни, они забывают, что постоянный количественный
            рост и сфера нашей активности требует анализа дальнейших направлений развития.
            Как уже неоднократно упомянуто, действия представителей оппозиции,
            превозмогая сложившуюся непростую экономическую ситуацию, обнародованы.
          </p>
        </div>

      </section>

      <section class="notif">

        <div class="notif__header">
          <h3 class="notif__title title">Типы уведомлений сегмента</h3>

          <button class="notif__add" @click="takeModalState({modal: 'newNotification', state: true})">
            Добавить тип уведомлений
            <add-icon class="add-icon" />
          </button>
        </div>

        <div class="notif__params">
          <div class="params__left">
            <p class="params__text params__text1">#</p>
            <p class="params__text params__text2">Название типа уведомлений</p>
          </div>
          <div class="params__right">
            <p class="params__text params__text3">Статус</p>
            <p class="params__text params__text4">Действие</p>
          </div>
        </div>

        <ul class="notif__list">
          <transition-group name="swipeAm">
            <li class="notif-item" v-for="item in activeList" :key="item">
              <notification-item
                  :itemIndex="item.index"
                  :itemText="item.text"
                  @takeNewModal="takeModalState($event)"
                  @deleteItem="deleteItem($event)"
              />
            </li>
          </transition-group>
        </ul>

        <div class="submit-block">
          <div class="submit__top">
            <div class="submit__left">
              <h3 class="submit__title title">Рассылка уведомлений</h3>
              <p class="submit__number">
                Всего клиентов:
                <sms-small-icon class="sms--small"/>
                <span class="text--bold">4&nbsp;180</span>
              </p>
            </div>

            <button
                class="submit__export submit-button"
                @click="takeModalState({modal: 'submitSettings', state: true})"
                :disabled="!isLicense"
            >
              Создать рассылку
            </button>
          </div>

          <button class="buy-license" v-if="!isLicense">Приобретите лицензию</button>

        </div>

      </section>
    </div>
  </div>

</template>

<script>
import { ref, reactive, watchEffect } from "vue";
import segmentHeader from "../../../components/Dashboard/Segments/popup-components/segment-header";
import notificationItem from "../../../components/Dashboard/Segments/popup-components/notification-item";
import trendUpIcon from "../../../components/Dashboard/Segments/popup-components/icon/trend-up-icon";
import trendDownIcon from "../../../components/Dashboard/Segments/popup-components/icon/trend-down-icon";
import smsSmallIcon from "../../../components/Dashboard/Segments/popup-components/icon/sms-small-icon";
import addIcon from "../../../components/Dashboard/Segments/popup-components/icon/add-icon";
import notificationEditor from "../../../components/Dashboard/Segments/popup-components/notification-editor";
import modalNewNotification from "../../../components/Dashboard/Segments/popup-components/modal-new-notification";
import modalSubmitSettings from "../../../components/Dashboard/Segments/popup-components/modal-submit-settings";
import redoIcon from "../../../components/Dashboard/Segments/popup-components/icon/redo-icon";

export default {
  name: 'App',
  components: {
    segmentHeader: segmentHeader,
    notificationItem: notificationItem,
    trendUpIcon: trendUpIcon,
    trendDownIcon: trendDownIcon,
    addIcon: addIcon,
    smsSmallIcon: smsSmallIcon,
    notificationEditor: notificationEditor,
    modalNewNotification: modalNewNotification,
    modalSubmitSettings: modalSubmitSettings,
    redoIcon: redoIcon
  },
  props: {
    segmentPopup: {
      type: Number,
      default: 2
    }
  },
  setup(props, { emit }) {

    const isLicense = ref(false);
    setTimeout(() => {
      isLicense.value = true;
    }, 10000)

    const itemList = reactive([]);

    const newModalState = ref(false);

    const notifEditorState = ref(false);

    const submitModalState = ref(false);

    const editorIndex = ref(0);

    function takeModalState(data) {
      if(data.modal === 'newNotification') {
        newModalState.value = data.state;
        if(data.list) {
          data.list.forEach((item, index, arr) => {
            if(itemList.length >= arr.length) {

              if(item.state != itemList[index].state) {
                itemList[index].state = item.state;
              }

            } else {
              itemList.push(data.list[index]);
            }
          })
          updateActiveList();
        }

      } else if(data.modal === 'submitSettings') {
        submitModalState.value = data.state;
      }else {

        if(data.index) {
          editorIndex.value = data.index;
        }

        if(data.type === 'submit') {
          itemList[editorIndex.value].text = data.updateName;
        }

        notifEditorState.value = data.state;
      }
    }

    const activeList = reactive([]);

    function updateActiveList() {
      for(let i = 0; i <= itemList.length; i++) {
        activeList.pop();
      }
      itemList.forEach((item) => {
        if(item.state) {
          activeList.push(item);
        }
      })
    }

    function deleteItem(index) {
      itemList[index].state = false;
      updateActiveList();
    }

    const aSideNumber = ref(2);

    function updateASide(index) {
      if(index === 1) {
        emit('toggleMainModal', false);
      } else {
        aSideNumber.value = index;
      }
    }

    watchEffect(() => {
      aSideNumber.value = props.segmentPopup;
    })

    return {
      itemList,
      notifEditorState,
      newModalState,
      takeModalState,
      deleteItem,
      submitModalState,
      editorIndex,
      activeList,
      aSideNumber,
      updateASide,
      isLicense
    }
  }
}
</script>

<style src="../../../assets/fonts/stylesheet.css"></style>

<style scoped>

button {
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: #000;
}

button:focus {
  color: #000;
}

button:hover {
  color: #000;
}

button:active {
  color: #000;
}

ul {
  padding: 0!important;
}

.popup {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100%;
}

.popup__background {
  position: absolute;
  top: 0;
  left: -30%;

  width: 100%;
  height: 100%;

  background-color: rgba(196, 196, 196, 0.6);
}

.main-wrapper {
  position: relative;

  display: flex;

  width: 83%;
  max-width: 1600px;
  margin-left: auto;
}

.popup-segment {
  position: relative;
  z-index: 3;

  max-width: 743px;
  min-width: 620px;
  min-height: 100vh;
  max-height: 100vh;
  padding: 80px 60px;

  box-sizing: border-box;
  overflow-y: scroll;
  -ms-overflow-style: none;

  background-color: #fff;
}

.popup-segment::-webkit-scrollbar { width: 0 }
.popup-segment::-webkit-scrollbar { width: 0 }

.item-number {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;

  border: 2px solid #1E2022;
  border-radius: 14px;

  font-size: 16px;
  font-weight: 500;
  color: #1E2022;
}

.stat {
  padding-top: 30px;
}

.title {
  font-size: 20px;
  font-weight: 600;
  color: #1E2022;
}

.stat__list {
  margin-top: 20px;
}

.stat__item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 15px;

  font-size: 16px;
}

.text--bold {
  font-weight: 500;
}

.graph {
  display: flex;
  margin-top: 30px;
  margin-bottom: 50px;
}

.popup-graph__item {
  width: 50%;
  padding: 30px 25px 25px 25px;
}

.popup-graph__item1 {
  border-radius: 12px 0px 0px 12px;
  background-color: #CDF7FF;
}

.popup-graph__item2 {
  border-radius: 0px 12px 12px 0px;
  background-color: #FFEAD7;
}

.graph__header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 30px;
}

.graph__title {
  font-size: 16px;
  font-weight: 500;
}

.graph__section {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
}

.graph__text {
  font-size: 14px;
}

.graph__text--bold {
  font-size: 15px;
}

.graph-item__bold {
  display: flex;
}

.graph__time {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 41px;
  height: 16px;
  border-radius: 23px;

  font-size: 10px;
  color: #1E2022;

  background-color: rgba(255, 255, 255, 0.6);
}

.params {
  margin-bottom: 50px;
}

.params__list {
  margin-top: 20px;
}

.params__item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.params__text {
  font-size: 16px;
}

.params__text--bold {
  font-size: 15px;
  font-weight: 500;
}

.guidance__title {
  margin-bottom: 20px;
}

.guidance__text {
  font-size: 16px;
  line-height: 30px;
}

.guidance__text1 {
  margin-bottom: 30px;
}

.notif {
  position: relative;

  display: grid;
  grid-template-rows: auto 25px 1fr auto;
  min-height: 100vh;

  width: 100%;
  max-width: 857px;
  min-width: 670px;
  max-height: 100vh;
  padding: 0 60px;
  padding-top: 90px;

  box-sizing: border-box;
  overflow-y: scroll;
  -ms-overflow-style: none;

  background-color: #F7F9FC;
}

.notif::-webkit-scrollbar { width: 0 }
.notif::-webkit-scrollbar { width: 0 }

.notif__header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 40px;
}

.notif__add {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 251px;
  height: 40px;
  border-radius: 12px;
  transition: .1s all ease;

  font-size: 14px;
  color: #1E2022;

  background-color: #fff;
}

.notif__add:hover {
  color: #6D6D6D;
  background-color: #ddd;
}

.notif__add:active {
  color: #A1A2A2;
  background-color: #F0F3F8;
}

.add-icon {
  margin-left: 10px;
}

.notif__params {
  display: flex;
  justify-content: space-between;

  font-size: 14px;
  color: #A1A2A2;
}

.params__left {
  display: flex;
}

.params__right {
  display: flex;
}

.params__text1 {
  margin-left: 40px;
}

.params__text2 {
  margin-left: 28px;
}

.params__text3 {
  margin-right: 56px;
}

.params__text4 {
  margin-right: 15px;
}

.notif__list {
  padding-bottom: 60px;
  margin-top: 15px;
}

.notif-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  border-bottom: 1px solid #EFF0F0;
}

.submit-block {
  width: 100%;
  padding: 40px;
  padding-bottom: 50px;
  margin: 0 auto;

  box-sizing: border-box;
  border-radius: 30px 30px 0 0;

  background-color: #FFFFFF;
}

.submit__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.buy-license {
  width: 100%;
  height: 40px;
  margin-top: 50px;

  border: 1.7px solid #FFC549;
  box-sizing: border-box;
  border-radius: 12px;

  font-size: 14px;
}

.buy-license:hover {
  border: none;
  background-color: #FED47A;
}

.buy-license:active {
  border: none;
  color: #A1A2A2;
  background-color: #F0F3F8;
}

.submit__number {
  display: flex;
  align-items: center;
  margin-top: 10px;

  font-size: 16px;
  color: #1E2022;
}

.sms--small {
  margin-left: 40px;
  margin-right: 5px;
}

.submit-button {
  width: 189px;
  height: 48px;
  border-radius: 12px;
  transition: .3s all ease;

  font-size: 16px;
}

.submit__export {
  background-color: #FFC549;
}

.submit__export:disabled {
  background-color: #F7F9FC!important;
}

.submit__export:hover {
  color: #1E2022;
  background-color: #FED47A;
}

.submit__export:active {
  border: none;
  color: #6D6D6D;
  background-color: #F7F9FC;
}

.main__a-side {
  position: absolute;
  top: 80px;
  left: -60px;
}

.a-side__item {
  position: relative;
  left: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 48px;
  margin-bottom: 4px;

  border-radius: 12px 0 0 12px;
  transition: .2s all ease;
}

.a-side__item:hover {
  left: 0;
  height: 60px;
}

.a-side__item1 {
  background-color: #F6F9FC;
}

.a-side__item2 {
  background-color: #FFFFFF;
}

.a-side__item3 {
  background-color: #9CF6E2;
}

.a-side__item4 {
  background-color: #A2F7EC;
}

.a-side__item5 {
  background-color: #AAF7F5;
}

.a-side__item6 {
  background-color: #B4F7FC;
}

.a-side__item7 {
  background-color: #C0F7FF;
}

.a-side__item8 {
  background-color: #CDF7FF;
}

.a-side__item9 {
  background-color: #E4F7FF;
}

.a-side__item10 {
  background-color: #EEF8FF;
}

.a-side__number {
  width: 24px;
  height: 24px;

  border-radius: 10px;

  font-size: 12px;
  font-weight: 700;
}

.a-side--active {
  left: 0;
  height: 60px;
}

.drop__list li {
  display: flex;
  align-items: center;

  height: 45px;
  padding: 0 20px;
}

.drop__list li:hover {
  color: #6D6D6D;
  background-color: #F7F9FC;
}

.drop__list li:active {
  color: #A1A2A2;
  background-color: #F0F3F8;
}

@media(max-width: 1585px) {

  .main-wrapper {
    width: 90%;
  }

  .notif {
    min-width: 600px;
    padding: 0 40px;
    padding-top: 90px;
  }

  .submit-button {
    width: 150px;
    height: 40px;

    font-size: 14px;
  }

  .title {
    font-size: 18px;
  }

  .submit__left {
    width: 212px;
  }
}

.swipeAm-enter-active,
.swipeAm-leave-active {
  transition: all 0.3s ease;
}

.swipeAm-enter-from {
  transform: translateX(-50px);
  opacity: 0;
}

.swipeAm-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>