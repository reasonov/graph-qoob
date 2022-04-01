<template>
  <div class="searchDiv w-100">
    <input class="w-100 inputStyle" type="text" :placeholder=placeholder v-model="searchQuery" @input="$emit('updateResults', resultSearchQuery() )">
    <img class="searchIcon" src="@/assets/search-normal.svg" />
  </div>
</template>

<script>
export default {
  name: "CmSearch",
  props: {
    placeholder: {
      type: String,
      default: "",
      required: false
    },
    searchArray: null,
    arrayField: null,
  },
  data() {
    return {
      searchQuery: null
    }
  },
  methods: {
    resultSearchQuery() {
      if (this.searchQuery!=null){
        return this.searchArray.filter((arrayElement)=>{
          return this.searchQuery.toLowerCase().split(' ').every(v => arrayElement[this.arrayField].toLowerCase().includes(v))
            }
        )
      }else {
        return this.searchArray;
      }
    }
  },
}
</script>

<style scoped>
.searchDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: #F6F9FC;
  border-radius: 0.75rem;
}
.searchIcon{
  height: 1.75rem;
  width: auto;
}
.inputStyle {
  border: none;
  background-color: #F6F9FC;

  font-size: 1rem;
  line-height: 1.5rem;

  color: #6D6D6D;
  outline: none;
}
</style>