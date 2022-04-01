<template>
  <div class="cardItem"
    :style="styleComputed"
  >
    <div class="contentWrap" :style="{'padding': padding}">
    <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CmCardBase",
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "min-content"
    },
    padding:{
      type: String,
      default: "2.5rem"
    }
  },
  computed: {
    styleComputed() {
      return {
        'width': this.width,
        'height': this.height
      }
    }
  }
}
</script>

<style scoped>
.cardItem {
  border-radius: 1.875rem;
  box-shadow: 0px 17px 40px rgba(19, 49, 97, 0.07), 0px 6.20528px 21.901px rgba(19, 49, 97, 0.0482987), 0px 3.01255px 10.6325px rgba(19, 49, 97, 0.0389404), 0px 1.47681px 5.21226px rgba(19, 49, 97, 0.0310596), 0px 0.583932px 2.06094px rgba(19, 49, 97, 0.0217013);
}
.contentWrap{
  height: 100%;
  border-radius: 1.875rem;
  padding: 2.5rem;
  background-color: #FFFFFF;
}
</style>