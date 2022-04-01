<template>
  <div class="popup-segment__header">
    <span class="item-number segment__number">0{{ aSideNumber - 1 }}</span>
    <h2 class="header__title">{{ nameList[aSideNumber - 2] }}</h2>
  </div>
</template>

<script>
export default {
  name: "segmeny-header",
  props: {
    aSideNumber: {
      type: Number,
      required: true
    }
  },
  setup() {
    const nameList = [
        'Чемпионы',
        'Лояльные',
        'Растущие',
        'Новички',
        'В зоне риска',
        'Средние на грани',
        'Сомневающиеся',
        'Требуют внимания',
        'Спящие'
    ]

    return { nameList }

  }
}
</script>

<style scoped>

.popup-segment__header {
  position: relative;

  display: flex;
  align-items: center;
  padding-bottom: 20px;
}

.popup-segment__header::after {
  content: '';
  position: absolute;
  left: 0px;
  bottom: 0px;

  width: 100%;
  height: 1px;
  border-radius: 12px;

  background-color: #EFF0F0;
}

.item-number {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;

  border: 2px solid #1E2022;
  border-radius: 14px;

  font-size: 16px;
  font-weight: 500;
  color: #1E2022;
}

.segment__number {
  margin-right: 20px;
}

.header__title {
  font-size: 26px;
  font-weight: 600;
}
</style>