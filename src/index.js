import 'babel-polyfill'

// src/index.js
import Vue from 'vue'
import './style/index.scss';


// BootstrapのJavaScript側の機能を読み込む
import 'bootstrap';


// button-counter と呼ばれる新しいコンポーネントを定義します
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('test-component', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

var app1 = new Vue({
  el: '#app-1',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({ el: '#app-2' })
var app3 = new Vue({ el: '#app-3' })
