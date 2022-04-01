<template>
  <div class="graph-circle__main">

    <div class="wrapper">
      <p class="center__text">Все клиенты по сегментам</p>

      <diagram-component />
    </div>

    <ul class="graph__stat">
      <li class="stat__item">
        <span class="stat__color yellow"></span>
        <p class="stat__percent">41%</p>
        <p class="stat__text">Новички</p>
      </li>
      <li class="stat__item">
        <span class="stat__color green"></span>
        <p class="stat__percent">39%</p>
        <p class="stat__text">Активные</p>
      </li>
      <li class="stat__item">
        <span class="stat__color grey"></span>
        <p class="stat__percent">13%</p>
        <p class="stat__text">Отток</p>
      </li>
      <li class="stat__item">
        <span class="stat__color grey--dark"></span>
        <p class="stat__percent">7%</p>
        <p class="stat__text">Потерянные</p>
      </li>
    </ul>

  </div>
</template>

<script>
import diagramComponent from "@/components/Dashboard/Services/diagram-component";
import {ref, computed} from "vue";

export default {
  name: "graph-circle",
  components: {
    diagramComponent
  },
  setup() {

    const wrapper = ref(null);

    const wrapperParams = computed(() => {

      if(wrapper.value) {
        const width = wrapper.value.clientWidth;
        const height = wrapper.value.clientHeight;

        return { width, height }
      }
      return 0;

    })


    return { wrapper, wrapperParams }

  }
}
</script>

<style scoped>

.wrapper {
  position: relative;
  width: 260px;
  height: 260px;
}

.graph-circle__main {
  display: flex;
}

.center__text {
  position: absolute;
  top: 115px;
  left: 21px;

  max-width: 220px;

  font-size: 18px;
  line-height: 26px;
  text-align: center;
}

.graph__stat {
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 70px;
}

.stat__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
  margin: 15px 0;

  font-size: 16px;
}

.stat__text {
  width: 85px;
}

.stat__color {
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 25px;

  border-radius: 7px;
}

.stat__percent {
  margin-right: 20px;
  font-weight: 500;
}

.yellow {
  background-color: #FFC549;
}

.green {
  background-color: #4ADDBC;
}

.grey {
  background-color: #CDCDCD;
}

.grey--dark {
  background-color: #575C62;
}
</style>