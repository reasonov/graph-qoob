<template>
  <div class="wrapInput">
    <div class="d-flex justify-content-between inputHeader">
      <div><label v-if="contact.type.name">{{ contact.type.name }}</label></div>
    </div>
    <div class="d-flex">
      <div class="d-flex align-items-center iconWrap">
        <div class="icon" :style="{'background-image': 'url('+this.glb.getMediaUrl(contact.type.icon)+')'}"></div>
      </div>
      <div class="w-100">
        <input type="text" @input="$emit('update:modelValue', $event.target.value)" :value="modelValue">
      </div>
      <div @click="$emit('delete', contact.id )" class="inputBtn"><div>Удалить</div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileAppContact",
  props: {
    contact: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: String
    }
  }
}
</script>

<style scoped>
.inputHeader {
  align-items: center;
  position: relative;
}

input {
  flex-direction: row;
  padding: 0.75rem 0;
  background: #F6F9FC;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  width: 100%;
  color: #000000;
}
.wrapInput {
  margin-top: 1.5rem;
}
input:active, :hover, :focus {
  outline: 0;
  outline-offset: 0;
}
input::placeholder,
input::-webkit-input-placeholder {
  color: #A1A2A2;
}
label {
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: #6D6D6D;
  margin-bottom: 1px;
}
.iconWrap{
  display: flex;
  align-items: center;
  background: #F6F9FC;
  border-radius: 0.75rem 0 0 0.75rem;
  padding: 0 1.1rem;
}
.icon {
  width: 1.5rem;
  height: 1.5rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.inputBtn{
  display: flex;
  align-items: center;
  background: #F6F9FC;
  border-radius: 0 0.75rem 0.75rem 0;
  color: #6D6D6D;
}
.inputBtn > div{
  background: #F6F9FC;
  padding: 0 1.5rem;
  border-left: solid 1px #e7e7e7;
  color: #6D6D6D;
}
.inputBtn:hover {
  cursor: pointer;
}

</style>
