<template>
  <div class="graph2">
    <h4 class="graph__title">Жизненный цикл клиентов</h4>
    <div class="graph__wrapper">

      <transition-group name="graphAm">

        <graph-circle v-if="isSync" key="1" />

        <div class="preloader-wrapper" v-else key="2">
          <preloader />
        </div>

      </transition-group>

    </div>

  </div>
</template>

<script>
import graphCircle from "@/components/Dashboard/Services/graph-circle";
import preloader from "@/components/Dashboard/Services/preloader";
import { ref } from 'vue'

export default {
name: "ServicesSegmentStatistic",
  components: {
    graphCircle,
    preloader
  },
  setup() {
    const isSync = ref(false);

    setTimeout(() => {
      isSync.value = true;
    }, 7000)

    return { isSync }
  }

}
</script>

<style scoped>
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

.preloader-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translateX(-50%) translateY(-50%);
}

.graphAm-enter-active, .graphAm-leave-active {
  transition: 1s all ease;
}

.graphAm-enter-from, .graphAm-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>