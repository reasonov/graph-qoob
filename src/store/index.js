import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    texts: {
      dashboard: {
        services: {
          name: "Статус сервисов",
          fullName: "Статус сервисов qoob.store",
          welcome: {
            title: "Добро пожаловать в сервис qoob.store",
            text: "Являясь всего лишь частью общей картины, предприниматели в сети интернет лишь добавляют фракционных разногласий и указаны как претенденты на роль ключевых факторов. В своём стремлении повысить качество жизни, они забывают, что постоянный количественный рост.",
            btnText: "Прочитано"
          },
          crm:{
            notSync:{
              img: "/static/crm.svg",
              text: "Для начала синхронизируйте личный кабинет сервиса qoob.store с вашей CRM системой.",
              btnText: "Синхронизировать"
            },
            sync:{
              crm: "CRM",
              accId: "Аккаунт",
              expiry: "Лицензия",
              status: "Статус"
            }
          },
          qoobStore: {
            img: "/static/qoob.store.svg",
            notActive: {
              text: "Активируйте сервис qoob.store выбрав подходящий вам тариф.",
              btnText: "Активировать"
            },
            active: {
              accId: "Аккаунт",
              expiry: "Лицензия",
              status: "Статус",
              expiryBtnText: "Подробнее"
            }
          },
          qoobApp: {
            img: "/static/qoob.app.svg",
            notConfigured: {
              text: "Настройте приложения qoob для ваших клиентов.",
              btnText: "Настроить"
            },
            configured: {
              userCount: "Установок"
            }
          },
          whatsApp: {
            img: "/static/whatsappLogo.png",
            title: "WhatsApp",
            accId: "Ваш аккаунт ID",
            expiry: "Оплачен по"
          },
          sms: {
            img: "/static/sms.png",
            title: "Агрегатор"
          },
          clientFlow: {
            title: "Поток клиентов",
            btnText: "Подробнее"
          },
          segmentStatistic: {
            title: "Статсистика сегментов",
          }
        },
        guide: {
          name: "Гид по настройке",
          fullName: "Добро пожаловать в сервис qoob.store",
        },
        mobileApp: {
          name: "Приложение",
          fullName: "Настройки мобильного приложения",
        },
        notifications: {
          name: "Уведомления",
          fullName: "Уведомления",
          segments: {name: "Сегменты"},
          types: {name: "Типы"},
          templates: {name: "Шаблоны"}
        },
        billing: {
          name: "Биллинг",
          fullName: "Биллинг",
          license: {name: "Лицензия"},
          payments: {name: "Оплаты"}
        },
        settings: {
          name: "Настройки",
          fullName: "Настройки",
          title: "Настройки подключаемых сервисов qoob.store",
          services: [
            {
              name: "crm",
              img: '/static/yclientsLogo.png',
              text: "Настройка, подключение и синхронизация Вашей CRM системы с сервисом qoob.store",
              btnText: "Настройки",
              component: "CrmSettings"
            },
            {
              name: "whatsapp",
              img: "/static/whatsappLogo.png",
              text: "Подключение канала мессенджера WhatsApp",
              btnText: "Настройки",
              component: "WhatsAppSettings"
            },
            {
              name: "sms",
              img: "/static/smsAgregatorLogo.png",
              text: "Подключение СМС Агрегатора к каскаду уведомлений",
              btnText: "Настройки",
              component: "SmsSettings"
            },
            {
              name: "push",
              img: "/static/pushLogo.png",
              text: "Настройка Push уведомлений приложения qoob",
              btnText: "Настройки",
              component: "CrmSettings"
            },
            {
              name: "vk",
              img: "/static/vkLogo.png",
              text: "Подключение каскада уведомлений соцсети Vkontakte",
              btnText: "Настроить",
              component: "CrmSettings"
            },
            {
              name: "fb",
              img: "/static/facebookLogo.png",
              text: "Подключение каскада уведомлений соцсети Facebook",
              btnText: "Настроить",
              component: "CrmSettings"
            },
            {
              name: "insta",
              img: "/static/instagramLogo.png",
              text: "Подключение каскада уведомлений соцсети Instagram",
              btnText: "Настроить",
              component: "CrmSettings"
            }
          ]
        },
        personalArea: {
          name: "Личный кабинет",
          fullName: "Личный кабинет пользователя",
          contact: {
            title: 'Контакт',
            phoneText: 'Номер телефона WhatsApp',
            positionText: "Должность",
            noticesTexts: {
              text1: "Отправлять предупреждения",
              text2: "Отправлять новости",
              text3: "Отправлять уведомления о лицензии"
            },
            btnContactAdd: "Добавить новый контакт",
            btnContactDel: "Удалить контакт"
          },
          profileTitle: "Профиль Владелеца аккаунта",
          personalData: {
            title: "Личные данные",
            avatarDescriptionText: "Краткая информация (технические требования) о формате, размере и соотношении сторон.",
            btnAvatarLoadText: "Загрузить",
            btnAvatarDelText: "Удалить",
            secondNameText: "Фамилия",
            firstNameText: "Имя",
            patronimText: "Отчество",
            statusText: "Статус",
            whatsappNumberText: "Личный номер телефона для связи на котором есть WhatsApp",
            emailText: "Личные e-mail, для связи",
            preferConnectText: "Предпочтительный способ связи"
          },
          serviceNotification: {
            title: "Уведомления о работе сервиса",
            text: "Как вы хотите получать информацию о новых функциях сервиса qoob.store и обучении?",
            noticesTexts: {
              text1: "На личный номер",
              text2: "На личный email"
            },
            btnSubcribeTelegramText: "Подписаться на телеграм канал"
          },
          btnSaveChangesText: "Сохранить изменения",
          alertWhatsapp: {
            title: "Экстренные оповещения WhatsApp",
            text: "Укажите номер WhatsApp для экстренных уведомлений собственника бизнеса, управляющего и (или) старшего администратора."
          }
        }
      },
      components: {
        whatsAppSettings: {
          title: "Подключение канала WhatsApp",
          instruction:{
            title: "Инструкция",
            subtitle: "Инструкция по подключению канала WhatsApp к каскаду уведомлений.",
            description: "Являясь всего лишь частью общей картины, предприниматели в сети интернет лишь добавляют фракционных разногласий и указаны как претенденты на роль ключевых факторов."
          },
          status: {
            img: "/static/whatsappLogo.png",
            accId: "Ваш аккаунт ID",
            expiry: "Оплачен до",
            status: "Статус —",
            imgActive: "/static/wa-status-ok.svg",
            imgInactive: "/static/wa-status-inactive.svg",
          },
          licenseNotExists: {
            title: "Внимание!",
            text: "Мы не нашли у Вас ниодной активной лицензии на использование сервиса доставки уведомлений через WhatsApp.\nДля начала работы, необходимо приобрести лицензию сервиса qoob.store",
            btnText: "Выбрать лицензию",
          },
          licenseExists: {
            notAuth:{
              agreeText: "Внимание! Нажимая на кнопку привязать сущкствующий канал WhatsApp все уведомления из текущего филиала будут поступать именно на этот номер.",
              btnAgreeText: "Привязать существующий",
              instructionText:"Для отправки и приема сообщений Вам необходимо авторизовать наш сервер как WhatsApp Web.\n\n 1. Откройте WhatsApp на телефоне\n 2. Нажмите “Настройки” > WhatsApp WEB > Добавить\n 3. Просканируйте код и подождите 1 минуту\n 4. Держите телефон подключенным к интернету",
              qrText:"Код доступен для сканирования в течении 1 минуты после загрузки. Отправка сообщений будет доступна сразу после авторизации."
            },
            auth:{
              text: "Ваш аккаунт WhatsApp подключен.",
              img: "/static/whatsappOk.jpg",
              btnDisable: "Отключить",
              btnReconfig: "Перенастроить"
            }

          }
        },
        smsSettings: {
          title: "Подключение канала SMS",
          instruction: {
            title: "Инструкция",
            subtitle: "Инструкция по подключению канала WhatsApp к каскаду уведомлений.",
            description: "Являясь всего лишь частью общей картины, предприниматели в сети интернет лишь добавляют фракционных разногласий и указаны как претенденты на роль ключевых факторов."
          },
          status: {
            img: "/static/sms.svg",
            aggregator: "Аггрегатор",
            status: "Статус",
            imgActive: "/static/wa-status-ok.svg",
            imgInactive: "/static/wa-status-inactive.svg",
          },
        }
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
