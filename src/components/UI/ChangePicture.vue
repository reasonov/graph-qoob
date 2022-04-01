<template>
  <div class="changePictureWrap">
  <h4 class="changePictureTitle">{{ title }}</h4>
  <div class="d-flex mt-4">
    <div class="labelWrap">
      <label for="picture" :style="{ backgroundImage: 'url('+ getPicture() +')'}" class="labelPicture"></label>
      <input @update="$emit('update:modelValue', $event.target.value)" ref="fileinput" type="file" id="picture" accept="image/*" class="d-none" autocomplete="off">
    </div>
    <div class="position-relative changeDescription">
      <p>{{ requirementsText }}</p>
      <div class="changeBtnGroup">
        <CmButton @click="$refs.fileinput.click()">Загрузить</CmButton>
        <CmButton :cls="'secondary'" class="mx-3">Удалить</CmButton>
      </div>
    </div>
  </div>
<!--  <h4 class="fw-bold">{{ title }}</h4>-->
<!--  <div class="mt-4">-->
<!--    <div class="float-start me-3">-->
<!--      <label for="picture" :style="{ backgroundImage: 'url('+ getPicture() +')'}" class="labelPicture"></label>-->
<!--      <input @update="$emit('update:modelValue', $event.target.value)" ref="fileinput" type="file" id="picture" accept="image/*" class="d-none" autocomplete="off">-->
<!--    </div>-->
<!--    <div class="position-relative changeDescription">-->
<!--      <p>{{ requirementsText }}</p>-->
<!--      <div class="changeBtnGroup">-->
<!--        <CmButton @click="$refs.fileinput.click()" class="me-3 ">Загрузить</CmButton>-->
<!--        <CmButton :cls="'secondary'" class="">Удалить</CmButton>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</div>

</template>

<script>
import CmButton from "@/components/UI/buttons/CmButton";
export default {
  name: "ChangePicture",
  components: {CmButton},
  props: {
    title: {
      type: String,
    },
    requirementsText:{
      type: String
    },
    picture: {
      type: String
    }
  },
  methods:{
    getPicture(){
      console.log(this.picture ? this.picture : require('@/assets/add-picture.svg'));
      return this.picture? this.glb.getMediaUrl(this.picture): require('@/assets/add-picture.svg');
    }
  }
}
</script>

<style scoped>
.changePictureWrap{
  margin-bottom: 3.8rem;
}
.changePictureTitle{
  font-weight: 600;
}
.labelWrap {
  margin-bottom: -.6rem;
}
.labelPicture{
  height: 9.125rem;
  width: 9.125rem;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /*box-shadow: 1px 10px 25px 0px rgb(0 0 0 / 15%);*/
  border-radius: 0.75rem;
}
/*.changeBtnGroup{*/
/*  display: flex;*/
/*  flex-wrap: wrap;*/
/*  !*position: absolute;*!*/
/*  !*left: 0;*!*/
/*  !*bottom: 12px;*!*/
/*}*/
.changeDescription{
  max-width: 28.125rem;
  margin-left: 1.55rem;
}

.changeBtnGroup{
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
}
.changeDescription{
  width: 18.75rem;
}

</style>
