import 'babel-polyfill'

// src/index.js
import Vue from 'vue'
import './style/index.scss';

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})
