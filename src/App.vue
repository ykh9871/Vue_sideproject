<template>
  <div class="black-bg" v-if = "modalstatus == true">
    <div class="white-bg">
      <h4>상세 페이지</h4>
      <p>상세 페이지 내용</p>
      <button @click="modalstatus=false">닫기</button>
    </div>
  </div>




  <div class="menu">
    <a v-for="(a,i) in menus" :key="i"> {{ a }} </a>
  </div>




  
  <div v-for="(Products,i) in products" :key="i">
    <img :src = "products[i].image" class="room-img">
    <h4 @click="modalstatus=true">{{products[i].title}}</h4>
    <p >{{products[i].price}}원</p>
  </div>
</template>

<script>

import products from './data/post.js'


export default {
  name: 'App',
  data() {
    return {
      modalstatus : false,

      menus : ['Home', 'Products', 'About'],
      prices : ['60', '70', '80'],
      products : products,
      reports : [0, 0, 0], 
    }
  },
  methods : {
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.room-img{
  widows: 100%;
  margin-top: 40px;
}
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
</style>