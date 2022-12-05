<script setup>
import { RouterView, RouterLink } from "vue-router";    
import { ref } from "vue";

import Logo from "../assets/Loghi/Kawasaki-Logo.png";

import ZX10R from "../assets/Moto/Kawasaki/NinjaZX10R.png";
import Ninja650 from "../assets/Moto/Kawasaki/Ninja650.png";
import Ninja400 from "../assets/Moto/Kawasaki/Ninja400.png";


let variabile = 0;

let moto = ([
  {
    image: ZX10R,
    nome: "ZX-10R",
    anno: "2023",
    cilindrata: "998 cc",
    },
    {
        image: Ninja650,
        nome: "Ninja 650",
        anno: "2023",
        cilindrata: "649 cc",
    },
    {
        image: Ninja400,
        nome: "Ninja 400",
        anno: "2023",
        cilindrata: "399 cc",
    }
  

])

function click(index) {
  variabile = index;
  console.log(index);
  document.getElementById("a").src = moto[index].image;
  document.getElementById("b").innerHTML = moto[index].nome;
  document.getElementById("c").innerHTML = moto[index].anno;
}


</script>

<template>
  <div class="container">
    <div class="moto">
      <img :src="moto[0].image" id="a"/>
    </div>
    
    <div class="title">
      <img :src="Logo">
      <h1 id="b">{{moto[variabile].nome}}</h1>
      <h4 id="c">{{moto[variabile].anno}}</h4>
    </div>


    <div class="foot" id="prova">
      <div class="a" v-for=" (items, index) in moto" :key="index" @click="click(index)">
        <div class="title-mini">
          <div class="moto-mini">
            <img :src="items.image"/>
          </div>
          <h1>{{items.nome}}</h1>
          <h3>{{items.anno}}</h3>
        </div>
      </div>
    </div>
  </div>


  <div class="info">
    <div class="sin">
      <b><h2>Cilindrata</h2></b>
      <h1>1103 cc</h1>

      <br><br><br>

      <b><h2>Cilindrata</h2></b>
      <h1>1103 cc</h1>

      <br><br><br>

      <b><h2>Cilindrata</h2></b>
      <h1>1103 cc</h1>
    </div>
    <div class="des">

    </div>
  </div>
</template>

<style scoped>
.sin{
  width: 50%;
  height: 100%;
  float: left;
  display: flex;
  flex-direction: column;
}
.des{
  width: 50%;
  height: 100%;

  float: right;
}
.info{
  text-align: center;
  position: absolute;
  top: 25%;
  right: 10px;
  width: 30%;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(10px);
  padding: 20px;
}
.a{
  backdrop-filter: blur(10px);
  width: 300px;
  height: 200px;
  flex-shrink: 0;
}
.foot{
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}
  .container{
    height: 90vh;
    background: rgb(213,213,213);
    background: linear-gradient(0deg, rgba(213,213,213,1) 0%, rgba(80,80,80,1) 100%);
  }

  .title{
    
    width: 50%;
    height: 50%;
    padding: 30px;
    font-size: 40px;
  }
  .title-mini{
    
    width: 100%;
    height: 100%;
    padding: 5px;
    font-size: 10px;
  }
  img{
    width: 150px;
  }
  .moto{
    position: absolute;
    width: 60%;
    left: 40%;
    top: 40%;
    transform: translate(-50%, -50%);
    
  }
  .moto-mini{
    position: absolute;
    width: 90%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
  }
  .moto img{
    width: 100%;
  }
  .moto-mini img{
    width: 100%;
  }

  @media screen and (max-width: 992px) {
  .title{
    width: 100%;
    text-align: center;
  }
  .moto{
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .moto img{
    width: 100%;
  }
  .moto-mini{
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .info{
    display: none;
  }

  h1{
    font-size: 25px;
  }

  .a{
    width: 60%;
    height: 150px;
  }
}
</style>
