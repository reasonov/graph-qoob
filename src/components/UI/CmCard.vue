<template>
  <div class="cardItem position-relative"
  :style="styleComputed"
  >
    <div class="cardContentWrap position-absolute top-0 bottom-0 start-0 end-0">
      <div class="cardContent">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CmCard",
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      // default: "340px"
    },
    ratio: {
      type: Number,
    }
  },
  computed: {
    styleComputed() {
      return {
        'width': this.width,
        'height': this.height,
        'padding-top': this.ratio+'%',
      }
    }
  }
}
</script>

<style scoped>
.cardItem {
  border-radius: 1.85rem;
  /*height: 340px;*/
  box-shadow: 0px 17px 40px rgba(19, 49, 97, 0.07), 0px 6.20528px 21.901px rgba(19, 49, 97, 0.0482987), 0px 3.01255px 10.6325px rgba(19, 49, 97, 0.0389404), 0px 1.47681px 5.21226px rgba(19, 49, 97, 0.0310596), 0px 0.583932px 2.06094px rgba(19, 49, 97, 0.0217013);
}
.cardContent{
  height: 100%;
  padding: 1.875rem;
}
.cardContentWrap{
  border-radius: 1.85rem;
  background-color: #FFFFFF;
}
/*@media screen and (max-width: 1600px) {*/
/*  .cardItem {*/
/*    height: 300px;*/
/*  }*/
/*}*/
/*@media screen and (max-width: 1400px) {*/
/*  .cardItem {*/
/*    height: 280px;*/
/*  }*/
/*}*/
/*@media screen and (max-width: 1200px) {*/
/*  .cardItem {*/
/*    height: 260px;*/
/*  }*/
/*}*/

</style>
