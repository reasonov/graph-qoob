<template>
  <div>
    <div class="text-center">
      <div v-if="!finish" class="d-flex justify-content-between align-items-center timerWrap">
        <p class="timer">Отправить код подтверждения повторно, можно через:</p>
        <span class="timerValue text-secondary d-flex justify-content-between">
            <div class="minutes">{{ minutes }}:</div>
            <div class="seconds">{{ seconds }}</div>
        </span>
      </div>
      <div v-if="finish" class="">
        <cm-button
            class="myBtn"
            @click="this.$emit('sendCode'), refreshTimer()"
        >Отправить код подтверждения повторно</cm-button>
      </div>
    </div>
  </div>
</template>
<script>
import CmButton from "@/components/UI/buttons/CmButton";
export default {
  name: 'Timer',
  components: {CmButton},
  props: {
    date: null,
    enterCode: {
      type: Number
    }

  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      event: this.date,
      finish: false,
      // enterCode: 1
    }
  },
  mounted() {
    const _self = this
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
      if (!this.finish && this.calculatedDate - this.now <= 0) {
        _self.finish = true
        _self.$emit('onFinish')
      }
    }, 1000)
  },
  computed: {
    secondCount() {
      return this.calculatedDate - this.now
    },
    calculatedDate() {
      return Math.trunc(Date.parse(this.event) / 1000)
    },
    seconds() {
      if (this.secondCount < 0) return 0
      if (this.secondCount % 60 < 10) return '0' + this.secondCount % 60
      else return this.secondCount % 60
    },
    minutes() {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60) % 60
    },
    hours() {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60) % 24
    },
    days() {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60 / 24)
    }
  },
  methods: {
    refreshTimer() {
      this.finish = false
      this.event = new Date(Date.now()+5000)
      return this.event
    }
  }
}
</script>

<style lang="css">
.myBtn {
  width: 100%;
}
.timerWrap {
  margin: 0;
}
.minutes {
  font-family: Graphik LCG;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #6D6D6D;
}
.seconds {
  font-family: Graphik LCG;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #6D6D6D;
}

</style>
