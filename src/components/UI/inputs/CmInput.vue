<template>
  <div class="wrapInput">
    <div class="d-flex justify-content-between inputHeader">
      <div><label v-if="label">{{ label }}</label></div>
      <img v-if="required" src="@/assets/info-circle.svg" alt="!">
    </div>
    <input type="text" :placeholder=placeholder @input="updateInput" :value="modelValue">
  </div>

</template>

<script>
export default {
  name: "CmInput",
  props: {
    label: {
      type: String,
      default: "",
      required: false
    },
    placeholder: {
      type: String,
      default: "",
      required: false
    },
    required: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      input: '',
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
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
  font-family: 'Graphik LCG';
  flex-direction: row;
  padding: 0.75rem 1.25rem;
  background: #F6F9FC;
  border-radius: 0.75rem;
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
  margin-bottom: 1rem;
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
  margin-bottom: 0.125rem;
}
img {
  position: absolute;
  top: 0.125rem;
  right: 0.1875rem;
}
</style>
