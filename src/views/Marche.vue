<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import LogoDucati from '../../src/assets/Loghi/Ducati-Logo.png'
import LogoYamaha from '../../src/assets/Loghi/yamaha.png'
import LogoKawasaki from '../../src/assets/Loghi/Kawasaki-Logo.png'

import Italia from '../../src/assets/Flag/italia.png'
import Giappone from '../../src/assets/Flag/giappone.png'  

let marche = ([
  {
    name: 'Ducati',
    logo: LogoDucati,
    nation: Italia,
    nationa: "Italia",
    nmodelli: "5",
    link: '/Listino-Ducati',
  },
  {
    name: 'Yamaha',
    logo: LogoYamaha,
    nation: Giappone,
    nationa: "Giappone",
    nmodelli: "1",
    link: '/Listino-Yamaha',
  },
  {
    name: 'Kawasaki',
    logo: LogoKawasaki,
    nation: Giappone,
    nationa: "Giappone",
    nmodelli: "3",
    link: '/Listino-Kawasaki',
  },
])
let a = 0;
function quale(index) {
  a = index;
  console.log(index);
}
</script>

<template>

  <div class="container">
     <router-link :to="marche[index].link" v-for="(items, index) in marche" class="no" @click="quale(index)" :key="index">
      <div class="marca">
      <div class="a">
        <div class="logo">
          <img :src="items.logo" alt="logo" />
        </div>
      </div>
      <div class="b">
        <div class="left">
          <img :src="items.nation" alt="nation" class="flag" />
          <h1>{{items.nationa}}</h1>

        </div>
        <div class="right">
          <p>{{items.nmodelli}}</p>
        </div>
      </div>
    </div>
    </router-link>
  </div>

</template>

<style scoped>


.no:hover{
  background-color: #181818;
}

template{
    padding: 20px;
    background-color: #c2c1c2;
}
p{
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    color: #000;
    text-align: center;
}

.marca{
    width: 300px;
    height: 400px;
    border: black 3px solid;
    margin: 20px;
    background: rgb(99,99,99);
    background: radial-gradient(circle, rgba(99,99,99,1) 0%, #1d1c1d 100%);
    border-radius: 5px;
    transition: .5s;
}
.marca:hover{
    background: rgb(99,99,99);
    background: radial-gradient(circle, rgba(99,99,99,1) 0%, rgba(0,0,0,1) 100%);
    border: #4694e5 3px solid;
}
.marca:hover .b{
    background-color: #4694e5;
}
.a{
    height: 92%;
}
.logo{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

}
.logo img{
    width: 100%;
}
.b{
    background-color: #1d1c1d;
    text-align: end;
    height: 8%;
    transition: .5s;
}

.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%!important;  
    height: 100vh;
}

.left{
    float: left;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: left;
    align-items: center;
}
.left p{
    color: white;
    font-size: 20px;
    margin: 0px 20px;
}
.flag{
    height: 20px;
}
.right{
    float: right;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: right;
    align-items: center;
}
.right p{
    color: white;
    font-size: 20px;
    margin: 0px 20px;
}
.right img{
    height: 80%;
}


</style>
