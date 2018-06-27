import 'babel-polyfill'

// src/index.js
import Vue from 'vue'
import './style/index.scss';

// 単一コンポーネント
import ImageViewer from './Img-viewer.vue';

// BootstrapのJavaScript側の機能を読み込む
import 'bootstrap';

Vue.component('test-component', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

var imageViewer = new Vue({
  el: '.image-viewer',
  components: { ImageViewer },
  template: '<image-viewer></image-viewer>'
})


var app1 = new Vue({
  el: '#app-1',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
   el: '#app-2',
   data: {
     count: 0
   },
   methods: {
     countup: function() {
       this.count++;
     }
   }
});
var app3 = new Vue({ el: '#app-3' });

var app4 = new Vue({
  el: '#app-4',
  data: {
    num: 0
  },
  created: function () {
    // `this` は vm インスタンスを指します
    console.log('app4 create')
  },
  watch: {
    num: function (prev, next){
      if(this.num > 5)
        this.num = 0;
    }
  }
});



setInterval(()=>{
  app4.num++;
},1000);
