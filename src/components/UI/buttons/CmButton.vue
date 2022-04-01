<template>
  <button
      @mouseenter="btnHover=true"
      @mouseleave="btnHover=false"
      @click="isActive=!isActive"
      :class="{'btnBase': cls==='base' && !sm, 'btnBaseSm': cls==='base' && sm, 'btnMain': cls==='main', 'btnSecondary': cls==='secondary', 'btnDisable': cls==='disable', 'sm': sm }"
  >
<!--    <img v-if="toBack" class="arrow arrow_back" :src="toBackArrow" alt="">-->
    <div v-if="toBack" class="arrowDiv" :class="['arrowDiv'+cls]"></div>
    <slot></slot>
    <div v-if="toNext" class="arrowDiv arrowNext" :class="['arrowDiv'+cls]"></div>
<!--    <img v-if="toNext" class="arrow arrow_next" :src="toNextArrow" alt="">-->
  </button>
</template>

<script>

export default {
  name: "cmButton",
  props: {
    cls: {
      type: String,
      default: 'base',
      validator: value => {
        return [
          'base',
          'main',
          'secondary',
          'disable'
        ].includes(value)
      }
    },
    toNext: {
      type: Boolean,
      default: false
    },
    toBack: {
      type: Boolean,
      default: false
    },
    sm: {
      type: Boolean,
      default: false
    }
  },
  data: function (){
    return {
      btnHover: false,
    }
  },
  computed: {
    btnClass(){
      if (this.cls === 'main'){
        return 'btnMain'
      } else if (this.cls === 'secondary') {
        return 'btnSecondary'
      } else if (this.cls === 'disable') {
        return 'btnDisable'
      } else {
        return 'btnBase'
      }
    },
    // toNextArrow(){
    //   if (this.cls === 'disable'){
    //     return require('@/assets/arrow-right-light-grey.svg')
    //   } else if (this.btnHover || this.cls === 'main') {
    //     return require('@/assets/arrow-right-black.svg')
    //   } else {
    //     return require('@/assets/arrow-right-grey.svg')
    //   }
    // },
    // toBackArrow(){
    //   if (this.cls === 'disable'){
    //     return require('@/assets/arrow-left-light-grey.svg')
    //   } else if (this.btnHover || this.cls === 'main') {
    //     return require('@/assets/arrow-left-black.svg')
    //   } else {
    //     return require('@/assets/arrow-left-grey.svg')
    //   }
    // }
  }
}
</script>

<style scoped>
.main{
  margin-top: 0;
}
button {
  line-height: 1.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}
.btnMain {
  background: #FFC549;
  border: none;
  color: black;
}
.btnBase {
  padding: 0.675rem 1.375rem;
  background: transparent;
  border: 0.125rem solid #FFC549;
}
.btnSecondary {
  background: #F7F9FC;
  border: none;
  color: #6D6D6D;
}
.btnDisable {
  background: #F0F3F8;
  border: none;
  color: #A1A2A2;
}
.btnMain:hover{
  background: #FED47A;
  color: #1E2022;
  transition: 0.3s;
}
.btnBaseSm:hover,  .btnBase:hover {
  background: #FED47A;
  color: #1E2022;
}
.btnMain:active{
  background: #F7F9FC;
  color: #6D6D6D;
  transition: 0.1s;
  border: none;
}
.btnSecondary:active {
  background: #328FE4;
  color: #FFFFFF;
  transition: 0.3s;
}
.btnDisable:hover {
  cursor: default;
}
.arrowDiv{
  margin-right: 0.625rem;
  height: 1rem;
  width: 1rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.arrowNext{
  transform: rotate(180deg);
  margin-left: 0.625rem;
  margin-right: 0;
}
.arrowDivmain, .arrowDivbase{
  background-image: url(../../../assets/arrow-left-black.svg);
}

.btnMain:active .arrowDivmain,
.btnBase:active .arrowDivbase,
.btnBaseSm:active .arrowDivbase{
  background-image: url(../../../assets/arrow-left-grey.svg);
}
.btnSecondary .arrowDivsecondary{
  background-image: url(../../../assets/arrow-left-grey.svg);
}
.btnSecondary:active .arrowDivsecondary{
  background-image: url(../../../assets/arrow-left-white.svg);
}
.arrow {
  align-items: center;
  height: 1rem;
  width: auto;
}
.arrow_back {
  margin-right: 0.625rem;
}
.arrow_next {
  margin-left: 0.625rem;
}
.sm {
  padding: 0.5rem 1.35rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
}
.btnBaseSm {
  padding: 0.375rem 1.225rem;
  background: transparent;
  border: 0.125rem solid #FFC549;
}
.btnBaseSm:active .arrow, .btnMain:active .arrow, .btnBase:active .arrow{
  color: #6D6D6D;
}
.btnBase:active {
  background: #F7F9FC;
  color: #6D6D6D;
  padding: 0.75rem 1.5rem;
  border: none;
  /*transition: 0.1s;*/
}
.btnBaseSm:active{
  background: #F7F9FC;
  color: #6D6D6D;
  padding: 0.5rem 1.35rem;
  border: none;
  /*transition: 0.1s;*/
}
</style>
