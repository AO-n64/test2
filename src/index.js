//(ES2015であればなんでもok !)
import 'babel-polyfill'

// src/index.js
import Vue from 'vue'
import App from './components/template.vue' // 今作ったやつ

new Vue({
    el: '#app', // アプリをマウントする要素
    components: { App }, // Appというコンポーネントを使うよ、という宣言
    template: '<app/>', // el(今回は#app)の中に表示する内容
})
