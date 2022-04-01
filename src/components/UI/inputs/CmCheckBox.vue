<template>
  <div class="d-flex align-items-center">
    <label class="wrapper align-items-center">
      <p class="checkDescription fs-14">{{label}}</p>
      <input class="checkbox" type="checkbox" :checked="modelValue" @change="updateInput"/>
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "CmCheckBox",
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: Boolean,
      default: false
    },
  },
  data: function (){
    return {
      checked: this.modelValue,
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.checked)
    },
  }
}

</script>

<style scoped>

.wrapper {
  position: relative;
  padding: 0px 0px 0px 40px;
  /*margin-bottom: 34px;*/
  margin-top: 0.3rem;
  margin-bottom: 1rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 1rem;
}
/* Hide the browser's default checkbox */
.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 1px;
  left: 1px;
  height: 1.5rem;
  width: 1.5rem;
  background-image: url(../../../assets/checkBox.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
/* On mouse-over, add a grey background color */
/*.wrapper:hover input ~ .checkmark {*/
/*  background-color: #FFC549;*/
/*}*/
/* When the checkbox is checked, add a blue background */
.wrapper input:checked ~ .checkmark {
  /*background-color: #fff;*/
  /*position: absolute;*/
  /*top: 1px;*/
  /*left: 1px;*/
  /*height: 21px;*/
  /*width: 21px;*/
  /*background-image: url(../../../assets/checkBox.svg);*/
  /*background-position: center;*/
  /*background-repeat: no-repeat;*/

}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the checkmark when checked */
.wrapper input:checked ~ .checkmark:after {
  display: block;
}
/* Style the checkmark/indicator */
.wrapper .checkmark:after {
  width: 100%;
  height: 100%;
  background-image: url(../../../assets/check.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 0.75rem;
}
.checkDescription {
  margin-bottom: 0;
  padding-top: 0.125rem;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  letter-spacing: -0.01em;
  color: #000000;
}
</style>
