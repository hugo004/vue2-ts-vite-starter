import 'regenerator-runtime/runtime'

import Vue from 'vue'
import isInIcestark from '@ice/stark-app/lib/isInIcestark'
import setLibraryName from '@ice/stark-app/lib/setLibraryName'
import App from './App.vue'
import i18n from './i18n'

import { name } from '../package.json'

setLibraryName(name)

Vue.config.productionTip = false

function createVue() {
  return new Vue({
    i18n,
    render: (h) => h(App),
  })
}

let vue: Vue

export function mount(props: { container: any }): void {
  const { container } = props
  vue = createVue().$mount()
  // for vue don't replace mountNode
  container.innerHTML = ''
  container.appendChild(vue.$el)
}

export function unmount(): void {
  if (vue) {
    vue.$destroy()
  }
}

if (!isInIcestark()) {
  createVue().$mount('#app')
}
