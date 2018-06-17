import 'babel-polyfill'

// src/index.js
import Vue from 'vue'
import './style/index.scss';


// BootstrapのJavaScript側の機能を読み込む
import 'bootstrap';


var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
