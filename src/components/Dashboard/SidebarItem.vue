<template>
    <div
      class="navMenuItemWrap d-flex"
      :class="{'navMenuItemLine': withLine, 'active': isActive, 'sleep': !isActive}"
    >
      <div class="sectionName d-flex align-items-center">
        <div :style="{'background-image': 'url('+iconSrc+')'}" :class="[isActive? '':'white']" class="sectionIcon">
        </div>
        <div>
          <span class="navMenuItemTitle" :style="{'font-size': iconSrc?'0.9375rem':'0.875rem'}">
            <slot></slot>
          </span>
        </div>

      </div>
      <img
        v-if="collapse"
        src="@/assets/drop-down-sidebar.svg"
        alt="" class="navMenuItemArrow"
        :class="{'white': !isActive, 'flip': flipArrow }"
        ref="arrow"
      >
    </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
  isActive:{
    type: Boolean,
    default: false,
  },
  isBordered:{
    type: Boolean,
    default: false,
  },
  iconSrc: {
    type: String,
    src: '',
  },
  collapse: {
    type: Boolean,
    default: false
  },
  white: {
    type: String,
    value: 'white',
  },
  withLine: {
    type: Boolean,
    default: false
  },
  isCollapsed: {
    type: Boolean,
  }
},
  data() {
    return {
      navOpen: false,
      activeClass: 'active',
      defaultClass: 'sleep',
      bordered: 'navMenuItemWrap::after'
    };
  },
  methods: {
    // flipArrow() {
    //   if (!this.collapse) return;
    //   console.log("isActive", this.isActive)
    //   if (!this.isCollapsed){
    //     console.log('add flip');
    //     return this.$refs.arrow.classList.add('flip');
    //   }
    //   console.log("flipArrow");
    //   if (this.collapse) {
    //     console.log('toggle flip');
    //     this.$refs.arrow.classList.toggle('flip');
    //   }
    // },
  },
  computed: {
    flipArrow() {
      return this.collapse && !this.isCollapsed

    }
  }
}

</script>

<style scoped>
.navMenuItem {

}
.navMenuItemWrap img {

}
.flip {
  transition: all .3s ease;
  transform: rotate(180deg);
}
.sectionName {
  position: relative;
}
.sectionName img {
  width: 1.125rem;
  position: absolute;
  top: 0.25rem;
}
.navMenuItemArrow {
  right: 1.5rem;
  width: 0.8rem;
  right: 1.5rem;
  width: 0.875rem;
}
.navMenuItemWrap:hover {
  cursor: pointer;
}
.navMenuItemWrap {
  justify-content: space-between;
  padding: 0.71rem 1.1rem 0.71rem 1.5rem;
  align-items: center;
  position: relative;
}

.navMenuItemTitle {
  font-style: normal;
  font-weight: normal;
  font-size: 0.9375rem;
  line-height: 1.5rem;
  color: #FFFFFF;
  margin: 0;
  padding-left: 0.375rem;
}

.active {
  background-color: #FFC549;
  transition: 0.2s;
}

.active span{
  color: #000;
}

.white {
  filter: invert(1);
}
.sectionIcon {
  height: 1.125rem;
  width: 1.125rem;
  margin-top: -0.125rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

</style>
