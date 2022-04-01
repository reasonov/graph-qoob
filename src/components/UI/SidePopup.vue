<template>
<transition name="fade" appear>
  <div
    class="side_popup__wrapper"
    v-if="showPopup"
    @click.self="showPopup=false"
  >
</div>
</transition>
<transition name="slide" appear>
  <div
    class="side_popup"
    v-if="showPopup"
  >
    <div
      class="slide_popup__close d-flex align-items-center justify-content-center"
      @click="showPopup=false"
    >
      <div :style="{'background-image': 'url('+require('@/assets/redo.svg')+')'}">
      </div>
    </div>
    <div class="side_popup__content">
      <div class="side_popup__content_wrap">
        <slot></slot>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: "SidePopup",
  data: function (){
    return {
      showPopup: false,
    }
  },
  methods: {
    open() {
      this.showPopup = true;
    }
  }
}
</script>

<style scoped>

.side_popup__wrapper{
  position: fixed;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1050;
  display: flex;
  justify-content: right;
}
.side_popup{
  position: fixed;
  top: 50%;
  left: 69%;
  width: 63%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: #fff;
  /*border-bottom-left-radius: 30px;*/
  /*border-top-left-radius: 30px;*/
  z-index: 1051;
}
.slide_popup__close{
  position: absolute;
  background: #F6F9FC;
  top: 5rem;
  left: -3rem;
  width: 3rem;
  height: 3rem;
  border-bottom-left-radius: 0.75rem;
  border-top-left-radius: 0.75rem;
}
.slide_popup__close > div {
  height: 1.5rem;
  width: 1.5rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  /*margin: -3px 0 0 0;*/
}
.side_popup__content_wrap{
  margin: 5rem 0;
}
.side_popup__content{
  overflow-y: auto;
  overflow-x: auto;
  padding: 0 1.75rem;
  position: relative;
  box-shadow: 0px 24px 120px -30px rgba(0, 0, 0, 0.15);
  /*max-height: calc(100% - 3rem);*/
  max-height: 100%;
  min-height: 100%;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.6s;
}
</style>
