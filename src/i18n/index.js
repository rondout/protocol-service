/* eslint-disable camelcase */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh_CN from './langs/zh_CN'
import en_US from './langs/en_US'

Vue.use(VueI18n)

var language = navigator.language.split('-').join('_')

const i18n = new VueI18n({
  locale: localStorage.language ? localStorage.language : language,
  messages: {
    en_US: en_US,
    zh_CN: zh_CN
  },
  silentTranslationWarn: true
})

export default i18n
