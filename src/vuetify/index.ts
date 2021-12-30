// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify)

const theme = {
  primary: colors.cyan.darken1,
  secondary: colors.red.lighten2,
  accent: colors.purple.base,
  error: colors.red.base,
  warning: colors.yellow.base,
  info: colors.blue.base,
  success: colors.green.base,
}

const opts: any = {
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  theme: {
    dark: false,
    themes: {
      light: theme,
      dark: theme,
    },
  },
}

export default new Vuetify(opts)
