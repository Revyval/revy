import './assets/main.css'

import {CarbonIconsVue, LogoInstagram32, LogoGithub32, LogoDiscord32, Information16, ArrowLeft32} from '@carbon/icons-vue';

import enMessages from '../i18n/en_en.json'
import esMessages from '../i18n/es_es.json'

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
import {createI18n} from "vue-i18n";

const browserLanguage = navigator.language.split('-')[0];
const savedLanguage = localStorage.getItem('language') || browserLanguage || 'en';

export const i18n = createI18n({
    legacy: false,
    locale: savedLanguage,
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {
        en: enMessages,
        es: esMessages
    }
})

createApp(App)
    .use(i18n)
    .use(router)
    .use(
        CarbonIconsVue,
        {
            components: {
                LogoInstagram: LogoInstagram32,
                LogoGithub: LogoGithub32,
                LogoDiscord: LogoDiscord32,
                Information: Information16,
                ArrowLeft: ArrowLeft32,
            }
        }
    )
    .mount('#app')
