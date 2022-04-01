<template>
<transition name="fade" appear>
  <div
    class="modal__wrapper d-flex align-items-center justify-content-center"
    v-if="showPopup"
    @click.self="showPopup=false"
  >
    <div class="modal__card">
      <slot></slot>
    </div>

</div>
</transition>
</template>

<script>
export default {
name: "Modal",
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
.wrap{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.modal__wrapper{
  position: fixed;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1150;
}
.modal__card{
  position: relative;
  width: 650px;
  height: 740px;
  background-color: #ffffff;
  border-radius: 1rem;
}

</style>
