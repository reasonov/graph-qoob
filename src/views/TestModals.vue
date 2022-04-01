<template>
<div>
  <cm-button
    class="m-3"
    @click="$refs.modalOne.open()"
  >Открыть модалку 1</cm-button>
  <cm-button
    class="m-3"
    @click="$refs.modalTwo.open()"
  >Открыть модалку 2</cm-button>
  <cm-button
    class="m-3"
    @click="$refs.modalThree.open()"
  >Открыть модалку 3</cm-button>
  <modal ref="modalOne">
    <div class="modalContainer">
      <h3 class="modalTitle">Добавить канал рассылки</h3>
      <div class="templateChannelList">
        <div class="templateChannelItem">
          <div class="templateChannelLogo">
            <img src="@/assets/whatsapp.png">
          </div>
          <div class="templateChannelDescription">
            Подключить канал мессенджера WhatsApp к каскаду уведомлений.
          </div>
        </div>
        <div class="templateChannelItem">
          <div class="templateChannelLogo">
            <img src="@/assets/sms.png">
          </div>
          <div class="templateChannelDescription">
            Подключить канал СМС Агрегатора к каскаду уведомлений.
          </div>
        </div>
        <div class="templateChannelItem">
          <div class="templateChannelLogo">
            <img src="@/assets/vkLogo.png">
          </div>
          <div class="templateChannelDescription">
            Подключить канал соцсети Вконтакте к каскаду уведомлений.
          </div>
        </div>
      </div>

    </div>
    <div class="modalBtns d-flex justify-content-end">
      <cm-button
          @click="$refs.modalOne.open()"
      >Закрыть</cm-button>
      <cm-button

          @click="$refs.modalTwo.open()"
      >Добавить</cm-button>
    </div>


  </modal>
  <modal ref="modalTwo">Сюда надо вставить новый компонент 2</modal>
  <modal ref="modalThree">Сюда надо вставить новый компонент 3</modal>
</div>
</template>

<script>
import CmButton from "@/components/UI/buttons/CmButton";
import Modal from "@/components/UI/Modal";
export default {
  name: "TestModals",
  components: {Modal, CmButton}
}
</script>

<style scoped>

.modalContainer {
  padding: 60px;
  height: 100%;
}
.modalTitle {
  margin-bottom: 20px;
}
.templateChannelLogo {
  margin-bottom: 6px;
}
.templateChannelItem {
  border-bottom: 1px solid #EFF0F0;
  padding: 30px 0 20px 0;
}
.modalBtns {
  position: absolute;
  bottom: 60px;
  right: 60px;
}
.modalBtns .btnBase{
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 20px;
  min-width: 121px;
}
</style>
