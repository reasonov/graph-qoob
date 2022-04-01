<template>
  <div class="graph1">
    <h4 class="graph__title">Приток / Отток - за последние 30 дней</h4>
    <div class="graph__wrapper">

      <transition-group name="graphAm">
        <div class="graph-container" v-if="isSync">
          <div class="axis-wrapper">
            <p class="axis-top">10</p>
            <p class="axis-bottom">0</p>
          </div>

          <ul class="graph__main">
            <li class="graph__item" v-for="index in 30" :key="index">
          <span
              :class="['item__background',
              {'line--active': currentLine === index}]"
              :style="'top: ' + ((i - 1) * 8) + 'px;'"
              v-for="i in 22"
              :key="i"
          ></span>
              <graph-lines :index="index" @lineActive="lineActive($event, index)" />
            </li>
          </ul>

          <div class="graph__bottom">

            <div class="graph__info">
              <div class="info__item">
                <span class="info__color item--yellow"></span>
                <p class="info__text">Приток</p>
              </div>
              <div class="info__item">
                <span class="info__color item--grey"></span>
                <p class="info__text">Отток</p>
              </div>
            </div>

            <a class="graph__about">Подробнее</a>

          </div>
        </div>

        <p class="need-sync" v-else>
          Необходимо выполнить синхронизацию с вашей crm системой
        </p>
      </transition-group>

    </div>

  </div>
</template>

<script>
import {ref} from "vue";
import graphLines from "@/components/Dashboard/Services/graph-lines";

export default {
name: "ServicesClientFlow",
  components: {
    graphLines
  },
  setup() {

    const isSync = ref(false);

    setTimeout(() => {
      isSync.value = true;
    }, 7000)

    const currentLine = ref(0);

    function lineActive(state, index) {
      if(state) {
        currentLine.value = index;
      } else {
        currentLine.value = 0;
      }

    }

    return { lineActive, currentLine, isSync }

  }
}
</script>

<style scoped>
.graph1 {
  margin-right: 20px;
}

.graph__title {
  margin-bottom: 25px;
  font-size: 20px;
  font-weight: 600;
}

.graph__wrapper {
  position: relative;

  width: 790px;
  height: 340px;
  padding: 40px;
  padding-left: 70px;

  box-sizing: border-box;
  box-shadow: 0 17px 40px rgba(19, 49, 97, 0.07), 0 6.20528px 21.901px rgba(19, 49, 97, 0.0482987), 0 3.01255px 10.6325px rgba(19, 49, 97, 0.0389404), 0 1.47681px 5.21226px rgba(19, 49, 97, 0.0310596), 0px 0.583932px 2.06094px rgba(19, 49, 97, 0.0217013);
  border-radius: 30px;

  background-color: #fff;
}

.graph-container {
  position: relative;
  width: 680px;
  height: 260px;
}

.axis-wrapper {
  position: absolute;
  top: 0;
  left: -35px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 180px;

  font-size: 14px;
}

.graph__main {
  display: flex;
  justify-content: space-between;
}

.graph__item {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 180px;
}

.item__background {
  position: absolute;
  left: 0;

  display: block;
  width: 3px;
  height: 6px;

  border-radius: 50%;

  background-color: #F0F3F8;
}

.line--active {
  background-color: #5CC3C6;
}

.graph__bottom {
  display: flex;
  justify-content: space-between;

  margin-top: 40px;
}

.graph__info {
  display: flex;
  align-items: flex-end;
}

.info__item {
  display: flex;
  margin-right: 40px;
}

.info__color {
  display: block;
  width: 8px;
  height: 15px;

  border-radius: 12px;
}

.item--yellow {
  background-color: #FFC549;
}

.item--grey {
  background-color: #CDCDCD;
}

.info__text {
  margin-left: 10px;

  font-size: 14px;
}

.graph__about {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 136px;
  height: 40px;

  border: 1.7px solid #FFC549;
  box-sizing: border-box;
  border-radius: 12px;

  font-size: 14px;
}

.need-sync {
  position: absolute;
  bottom: 40px;

  width: calc(100% - 110px);

  font-size: 20px;
  text-align: center;
  color: #6D6D6D;
}

.graphAm-enter-active, .graphAm-leave-active {
  transition: 1s all ease;
}

.graphAm-enter-from, .graphAm-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
