<template>
  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-center regForm">

          <transition name="fade">
            <div v-if="step===1" class="reg__step">
              <div class=text-center>
                <h2>Регистрация</h2>
              </div>
              <div class="regSteps d-flex justify-content-between">
                <div class="stepBordered"> <span class="stepNumberLighted">1</span></div>
                <div class="step"> <span class="stepNumber">2</span></div>
                <div class="step"> <span class="stepNumber">3</span></div>
              </div>
              <div>
                <p class="stepDescription">Укажите контакты ответственного лица на которого будет зарегистрирован личный кабинет.
                  На этот номер будут приходить самые важные уведомления о работе сервиса.</p>
              </div>
              <cm-input
                  label="Телефон"
                  v-model="inputPhone"
              ></cm-input>
              <cm-input
                  label="E-mail"
                  v-model="inputEmail"
              ></cm-input>
              <CmCheckBox
                  class="mt-1"
                  v-model="inputCheck"
                  label="Я принимаю условия соглашения сервиса qoob.store"
              ></CmCheckBox>
              <cm-button
                  class="mt-4"
                  to-next="true"
                  cls="main"
                  @click="sendCode(); doStep()"
              >Далее </cm-button>
            </div>
          </transition>
          <transition name="fade">
            <div v-if="step===2" class="reg__step">
              <div class=text-center>
                <h2>Регистрация</h2>
              </div>
              <div class="regSteps d-flex justify-content-between">
                <div class="stepBordered"> <span class="stepNumber">1</span></div>
                <div class="stepBordered"> <span class="stepNumberLighted">2</span></div>
                <div class="step"> <span class="stepNumber">3</span></div>
              </div>
              <div>
                <p class="stepDescription">На указанный вами номер телефона, нами был выслан код подтверждения,
                  Введите его в поле ниже.</p>
              </div>
              <cm-input
                  label="введите код подтверждения"
                  class=""
              ></cm-input>
              <Timer

                  :date=refreshTimer() @sendCode="sendCode()"
              ></Timer>
              <div class="d-flex justify-content-between mt-4">
                <cm-button class="regBtn_half"
                           cls="secondary"
                           to-back
                           @click="doStepBack"
                >Назад</cm-button>
                <cm-button class="regBtn_half"
                           cls="main"
                           @click="doStep"
                >Подтвердить</cm-button>
              </div>
            </div>
          </transition>
          <transition name="fade">
            <div v-if="step===3" class="reg__step">
              <div class=text-center>
                <h2>Регистрация</h2>
              </div>
              <div class="regSteps d-flex justify-content-between">
                <div class="stepBordered"> <span class="stepNumber">1</span></div>
                <div class="stepBordered"> <span class="stepNumber">2</span></div>
                <div class="stepBordered"> <span class="stepNumberLighted">3</span></div>
              </div>
              <div>
                <p class="stepDescription">Если вам нечего добавить, то можете просто пропустить этот шаг,
                  нажав кнопку “Готово”.</p>
              </div>
              <cm-input
                  label="Телефон того, кто порекомендовал"
              ></cm-input>
              <cm-input
                  label="У меня есть промокод"
              ></cm-input>
              <div class="d-flex justify-content-between regBtn_half_step_3">
                <cm-button class="regBtn_half"
                           :isActive="false"
                           to-back
                           @click="doStepBack"
                           cls="secondary"
                >Назад</cm-button>
                <cm-button class="regBtn_half"
                           cls="main"
                           @click="$router.push({name: 'services'})"
                >Готово</cm-button>
              </div>
            </div>
          </transition>

      </div>
    </div>

  </div>
</template>

<script>
import CmInput from "@/components/UI/inputs/CmInput";
import CmCheckBox from "@/components/UI/inputs/CmCheckBox";
import CmButton from "@/components/UI/buttons/CmButton";
import Timer from "../components/auth/Timer";
export default {
  name: "Registration",
  components: {CmButton, CmInput, CmCheckBox, Timer},
  data: function () {
    return {
      inputPhone: '',
      inputEmail: '',
      inputCode: '',
      inputReferalPhone: '',
      inputPromoCode: '',
      inputCheck: '',
      enterCode: 0,
      step: 1,
    }
  },
  methods:
      {
        doStep() {
          this.step = this.step + 1
          return this.step
        },
        doStepBack() {
          this.step = this.step - 1
          return this.step
        },
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
.regForm {
  height: 100vh;

  margin: 0 auto;
}
.regSteps {
  height: 2.375rem;
  margin-top: 1.9rem;
  margin-bottom: 1rem;
}
.regBtn_half {
  width: 183px;
  margin-top: 2px;
}
.regBtn_half_step_3 {
  margin-top: 32px;
}
.step {
  text-align: center;
  width: 100%;
  border-bottom: 1px solid #DEDEDE;
}
.checkBoxWrap {
  margin-top: 10px;
}
.stepNumber {
  font-family: 'Graphik LCG';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #A1A2A2;
}
.stepDescription {
  font-family: 'Graphik LCG';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #000000;
  text-align: left;
  margin-bottom: 32px;
}
.stepNumberLighted {
  font-weight: 500;
  line-height: 22px;
  color: #000000;
}
.stepBordered {
  width: 100%;
  border-bottom: 2px solid #FFCB00;
}
.timerWrap {
  margin-top: 8px;
  margin-bottom: 42px;
}
.reg__step{
  position: absolute;
  text-align: center;
  max-width: 24.5rem;
  left: 50%;
  top: 17.5rem;
  width: 24.5rem;
  transform: translate(-50%, 0px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.wrap {
  margin-bottom: 16px;
}
.wrapper {
  margin-bottom: 20px;
}
.wrapInput {
  margin: 0 0 16px;
}
</style>
