import Vue from 'nativescript-vue'
import Home from './components/Home.vue'

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
