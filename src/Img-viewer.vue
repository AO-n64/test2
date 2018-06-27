<template>
  <div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <div class="card-body">
        <p class="card-heading lead"></p>

        <div id="app-5">
          <img :src="url" v-on:load="load" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      urllist: ["img/hw.png", "img/tresure-image.png","img/tresure2-image.png"],
      url: "img/hw.png",
      num: 0
    }
  },
  methods: {
    load(){
      setInterval(()=>{
        this.url = this.urllist[this.num];
        let tmpNum = this.num + 1;
        this.num = this.num > this.urllist.length - 1 ? 0 : tmpNum;
      },1000);
    }
  }
};
</script>
