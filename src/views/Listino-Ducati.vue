<script setup>


import Logo from "../assets/Loghi/Ducati-Logo.png";

import PanigaleV2 from "../assets/Moto/Ducati/PanigaleV2.png";
import PanigaleV4 from "../assets/Moto/Ducati/PanigaleV4.png";
import PanigaleV4S from "../assets/Moto/Ducati/PanigaleV4s.png";
import PanigaleV4SP2 from "../assets/Moto/Ducati/PanigaleV4sp2.png";
import PanigaleV4R from "../assets/Moto/Ducati/PanigaleV4r.png";




import ZX10R from "../assets/Moto/Kawasaki/NinjaZX10R.png";
import Ninja650 from "../assets/Moto/Kawasaki/Ninja650.png";
import Ninja400 from "../assets/Moto/Kawasaki/Ninja400.png";

import { RouterView, RouterLink } from "vue-router";    
import { ref } from "vue";
import { useStore } from '../store/store.js'
const store = useStore()



console.log(store.index)

let variabile = 0;

let moto = ([
  {
    nome: "Ducati",
    moto: [
      {
        image: PanigaleV2,
        nome: "PanigaleV2",
        anno: "2023",
        potenza: "155 CV",
        cilindrata: "955 cc",
        PesoaSecco: "176 kg",
      },
      {
        image: PanigaleV4,
        nome: "PanigaleV4",
        anno: "2023",
        potenza: "215,5 CV",
        cilindrata: "1100 cc",
        PesoaSecco: "175 kg",
      },
      {
        image: PanigaleV4S,
        nome: "PanigaleV4 S",
        anno: "2023",
        potenza: "215,5 CV",
        cilindrata: "998 cc",
        PesoaSecco: "174 kg",
      },
      {
        image: PanigaleV4SP2,
        nome: "PanigaleV4 SP2",
        anno: "2023",
        potenza: "215,5 CV",
        cilindrata: "1103 cc",
        PesoaSecco: "173 kg",
      },
      {
        image: PanigaleV4R,
        nome: "PanigaleV4 R",
        anno: "2023",
        potenza: "237 CV",
        cilindrata: "998cc",
        PesoaSecco: "167 kg",
      },
    ]
  },
  {
    nome: "Kawasaki",
    moto: [
    {
    image: ZX10R,
    nome: "ZX-10R",
    anno: "2023",
    cilindrata: "998 cc",
    potenza: "203 CV",
    PesoaSecco: "206 kg",
    },
    {
        image: Ninja650,
        nome: "Ninja 650",
        anno: "2023",
      cilindrata: "649 cc",
      potenza: "60 CV",
      PesoaSecco: "174 kg",
    },
    {
        image: Ninja400,
        nome: "Ninja 400",
        anno: "2023",
      cilindrata: "399 cc",
      potenza: "46 CV",
      PesoaSecco: "169 kg",
    }
    ]
  },
  {
    nome: "Yamaha",
    moto: [
      {
        image: PanigaleV2,
        nome: "PanigaleV2",
        anno: "2023",
        potenza: "155 CV",
        coppia: "10,6 Kgm",
        PesoaSecco: "176 kg",
      },
    ]
  }

])

function click(index) {
  variabile = index;
  document.getElementById("a").src = moto[store.index].moto[index].image;
  //animate the image when click
  document.getElementById("a").animate([
    // keyframes
    { transform: 'scale(1)' }, 
    { transform: 'scale(1.01)' },
    { transform: 'scale(1)' }
  ], { 
    // timing options
    duration: 500,
    iterations: 1
  });


  document.getElementById("b").innerHTML = moto[store.index].moto[index].nome;
  document.getElementById("c").innerHTML = moto[store.index].moto[index].anno;
  document.getElementById("d").innerHTML = moto[store.index].moto[index].cilindrata;
  document.getElementById("e").innerHTML = moto[store.index].moto[index].potenza;
  document.getElementById("f").innerHTML = moto[store.index].moto[index].PesoaSecco;

}

function info() {
  console.log("ciao")
}



</script>

<template>
  <div class="container">
    <div class="moto">
      <img :src="moto[0].image" id="a" @click="info" />
    </div>
    
    <div class="title">
      <img :src="Logo">
      <h1 id="b">{{moto[variabile].nome}}</h1>
      <h4 id="c">{{moto[variabile].anno}}</h4>
    </div>


    <div class="foot">
      <div class="a" v-for=" (items, index) in moto[store.index].moto" :key="index" @click="click(index)">
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


  <div class="info" id="informazioni">
    <div class="sin">
      <b><h2>Cilindrata</h2></b>
      <h1 id="d">{{moto[variabile].potenza}}</h1>

      <br><br><br>

      <b><h2>Potenza</h2></b>
      <h1 id="e">{{moto[variabile].potenza}}</h1>

      <br><br><br>

      <b><h2>Peso</h2></b>
      <h1 id="f">{{moto[variabile].PesoaSecco}}</h1>
    </div>
    <div class="des">

    </div>
  </div>
</template>

<style scoped>

.visibile{
  display: block!important;;
}
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
  width: 300px;
  height: 20vh;
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

  @media screen and (max-width: 1000px) {
    .info{
      display: none;
    }

    .title{
      width: 100%;
      text-align: center;
    }
    .title h1{
      font-size: 50px;
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

    .foot{
      bottom: 50px;
    }

  }

  @media screen and (max-width: 450px) {
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
