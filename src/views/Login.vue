<template>
<div class="container">
  <div class="align-items-center justify-content-center loginForm">
    <div>
      <div v-if="enterCode===0" class="text-center">
        <h2>Вход</h2>
        <cm-input
          label="Телефон"
        ></cm-input>
        <cm-button class="btnLogin"
          :cls="'main'"
          @click="sendCode"
        >Войти</cm-button>
      </div>
      <div v-if="enterCode===1" class="text-center">
        <h2>Код авторизации</h2>
        <cm-input
          label="введите код подтверждения"
        ></cm-input>
        <Timer
               :date=refreshTimer() @sendCode="sendCode()"
        ></Timer>
<!--        <div class="d-flex justify-content-between align-items-center timerWrap">-->
<!--          <p class="timer">Отправить код подтверждения повторно, можно через:</p>-->
<!--          <span class="timerValue text-secondary">4:37</span>-->
<!--        </div>-->
        <cm-button class="btnLogin btnLogin_2"
                   :cls="'main'"
                   @click="$router.push({name: 'services'})"
        >Подтвердить</cm-button>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import CmInput from "@/components/UI/inputs/CmInput";
import CmButton from "@/components/UI/buttons/CmButton";
import Timer from "@/components/auth/Timer";
export default {
name: "Login",
  components: {CmButton, CmInput, Timer},
  data: function () {
    return {
      enterCode: 0,
    }
  },
  methods: {
    sendCode() {
      this.enterCode = 1
      return this.enterCode
    },
    refreshTimer() {
      this.date = new Date(Date.now()+5000)
      return this.date
    }
  }
}
</script>

<style scoped>
.loginForm {
  margin: 12.25rem auto;
  width: 24.125rem;
}
h2 {
  font-family: Graphik LCG;
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.625rem;
  color: #1E2022;
  margin-bottom: 1.5rem;
}
.btnLogin {
  width: 100%;
  margin-top: 2.5rem;
}
.btnLogin_2 {
  /*margin-top: 58px;*/
}

</style>
