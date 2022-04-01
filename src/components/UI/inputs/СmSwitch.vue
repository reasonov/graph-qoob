<template>
  <div :class="['toggle', {'toggle--active': modelValue, 'toggle_lg': lg}]" @click="$emit('update:modelValue', !modelValue)">
    <span :class="['toggle__eclipse', {'eclipse--active': modelValue}]"></span>
  </div>
</template>

<script>

export default {
  name: "CmSwitch",
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    lg: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>
  .toggle {
    position: relative;

    width: 1.875rem;
    height: 1.125rem;
    border-radius: 3.1875rem;
    transition: .3s all ease;

    background: #EDF2FB;
    box-shadow: inset 0px 0.5px 1px rgba(0, 0, 0, 0.09);
  }

  .toggle__eclipse {
    position: absolute;
    top: 0.1875rem;
    left: 0.1875rem;

    width: 0.75rem;
    height: 0.75rem;

    border-radius: 50%;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    transition: .3s all ease;

    background-color: #FFFFFF;
  }

  .toggle--active {
    background-color: #FFC549;
    box-shadow: none;
  }

  .eclipse--active {
    left: 0.875rem;
  }
  .toggle_lg {
    width: 2.75rem;
    height: 1.625rem;
  }
  .toggle_lg .toggle__eclipse {
    top: 0.25rem;
    left: 0.25rem;
    width: 1.125rem;
    height: 1.125rem;
  }
  .toggle_lg .eclipse--active{
    left: 1.375rem
  }
</style>