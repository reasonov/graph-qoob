<template>
<transition name="fade">
<div v-if="modals.length !== 0" class="modal__wrapper">
<transition-group name="list" appear>
  <div
    v-for="(modal, index) in modals"
    :key="index"
    class="modal__wrapper d-flex align-items-center justify-content-center"
    @click.self="modals.pop()"
    :style="{'z-index': 1150 + index}"
  >
    <div class="modal__card p-5">
      <component :is="modal.component" v-bind="modal.props" @close="modals.pop()"></component>
      <slot></slot>
    </div>
</div>
</transition-group>
</div>
</transition>
</template>

<script>
import PaymentMethod from "@/components/Dashboard/Billing/payment-method";
import SmsSettings from "@/components/Dashboard/Services/SmsSettings";
export default {
  name: "GlobalModal",
  components: {SmsSettings, PaymentMethod},
  data: function (){
    return{
      showModal: false,
      modals:[],
      currentComponent: null,
      currentProps: {},
    }
  },
  mounted() {
    this.emitter.on('show-global-modal', (event)=>{
      let modal = {show: true};
      if (event.component === 'PaymentMethod'){
        modal.component = PaymentMethod;
        modal.props = {tariff: event.props};
        // this.currentComponent = PaymentMethod;
        // this.currentProps = {tariff: event.props};
      } else if (event.component === 'SmsSettings') {
        modal.component = SmsSettings;

      }
      // this.showModal = true;
      this.modals.push(modal);
    })
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
  height: max-content;
  background-color: #ffffff;
  border-radius: 1rem;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  /*transform: translateY(30px);*/
}
</style>