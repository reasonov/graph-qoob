<template>
<div class="position-relative">
  <p class="selectLabel">{{selectLabel}}</p>
  <div class="select d-flex align-items-center justify-content-between"
     @click="optionsIsVisible=!optionsIsVisible">
      <div><p class="title" :class="{'selectPlaceholder': !selected}">{{ getSelected() }}</p></div>
      <div class="dropDown" :style="{'background-image': 'url('+require('@/assets/arrow-select.svg')+')'}"></div>
  </div>
  <div
      v-if="optionsIsVisible"
      class="options">
    <p v-for="option in options"
       :key="option.id"
       @click="selectOption(option)">{{option.name}}
    </p>
  </div>
</div>

</template>

<script>
export default {
  name: "CmSelect",
  props: {
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
    },
    selectLabel: {
      type: String,
      default: "",
      required: false
    },
    placeholder: {
      type: String,
      default: "----------"
    }
  },
    data() {
      return {
        optionsIsVisible: false,
      }
    },
    methods: {
      selectOption(option) {
        this.$emit('select', option);
        this.optionsIsVisible = false;
      },
      hideSelect () {
        this.optionsIsVisible = false;
      },
      getSelected() {
        if (this.selected) {
          return this.selected;
        } else {
          return this.placeholder;
        }
      },
    },
    mounted() {
      let cm = this;
      document.addEventListener('click', cm.hideSelect.bind(cm), true)
    },
    beforeUnmount() {
      document.removeEventListener('click', this.hideSelect)
    },

}
</script>

<style scoped>
.select {
  position: relative;
  width: 100%;
  cursor: pointer;
  background-color: #F6F9FC;
  border-radius: 0.75rem;
  color: #000000;
}
.selectLabel {
  margin-bottom: 0.125rem;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: #6D6D6D;
}
.title {
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  color: #000000;
  padding: 0.75rem 1.25rem;
  border: none;
  background-color: #F6F9FC;
  width: 100%;
  border-radius: 0.75rem;
}
.title:active, :hover, :focus {
  outline: 0;
  outline-offset: 0;
}
.select p {
  margin: 0;
}
.select img {
  margin-right: 1.125rem;
}
.options {
  position: absolute;
  top: 5rem;
  right: 0;
  width: 100%;
  background-color: #Ffffff;
  z-index: 1;
  border-radius: 0.75rem;
}
.options p{
  padding: 0.75rem 1.25rem;
}
.options p:hover {
  background-color: #F6F9FC;
  border-radius: 0.75rem;
  transition: 0.2s;
}
.select:after {
  content: "";
  height: 1.5rem;
  width: 1px;
  background-color: #E5E5E5;
  position: absolute;
  right: 3.375rem;
}
.selectPlaceholder{
  color: #A1A2A2;
}
.dropDown{
  height: 1.5rem;
  width: 3.675rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
