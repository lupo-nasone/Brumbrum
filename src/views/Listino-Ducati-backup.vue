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

import R125 from "../assets/Moto/Yamaha/R125.png";
import R3 from "../assets/Moto/Yamaha/r3.png";
import R6 from "../assets/Moto/Yamaha/r6.png";
import R1 from "../assets/Moto/Yamaha/r1.png";

import RKF125 from "../assets/Moto/keeway/rkf.png";
import Superleggera from "../assets/Moto/keeway/superlight.png";

import wottangp1 from "../assets/Moto/Wottan/wottangp1.png";
import wottangp2 from "../assets/Moto/Wottan/wottangp2.png";
import rebbe from "../assets/Moto/Wottan/rebbe.png";

import { RouterView, RouterLink } from "vue-router";    
import { ref, computed } from "vue";
import { useStore } from '../store/store.js'
import { getMotoStats, getMotoMainStats } from '../data/motoDatabase.js'
import MotoBrief from '../components/MotoBrief.vue'
import MotoDetailsModal from '../components/MotoDetailsModal.vue'

const store = useStore()

console.log(store.index)

// Variabili reattive
let variabile = ref(0);
const showModal = ref(false);
const selectedMotoStats = ref({});
const selectedMotoImage = ref('');
const isMobileMenuOpen = ref(false);
const currentBrandIndex = ref(0);

// Array di tutte le marche per il menu mobile
const allBrands = [
  { nome: 'Ducati', logo: Logo },
  { nome: 'Yamaha', logo: '/src/assets/Loghi/yamaha.png' },
  { nome: 'Kawasaki', logo: '/src/assets/Loghi/Kawasaki-Logo.png' },
  { nome: 'Keeway', logo: '/src/assets/Loghi/Keeway-Logo.png' },
  { nome: 'Wottan', logo: '/src/assets/Loghi/Wottan-Logo.png' }
];

// Funzioni per il menu mobile
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
}

function selectBrand(index) {
  currentBrandIndex.value = index;
  store.index = index;
  variabile.value = 0; // Reset alla prima moto della marca
  
  // Aggiorna l'immagine e le info
  if (moto[index] && moto[index].moto[0]) {
    document.getElementById("a").src = moto[index].moto[0].image;
    document.getElementById("b").innerHTML = moto[index].moto[0].nome;
    document.getElementById("c").innerHTML = moto[index].moto[0].anno;
  }
  
  closeMobileMenu();
}

// Mapping tra nomi delle moto e chiavi del database
const motoMapping = {
  'ducati': {
    'PanigaleV2': 'panigalev2',
    'PanigaleV4': 'panigalev4', 
    'PanigaleV4 S': 'panigalev4s',
    'PanigaleV4 SP2': 'panigalev4sp2',
    'PanigaleV4 R': 'panigalev4r'
  },
  'yamaha': {
    'R-125': 'r125',
    'R-3': 'r3', 
    'R-6': 'r6',
    'R-1': 'r1'
  },
  'kawasaki': {
    'ZX-10R': 'zx10r',
    'Ninja 650': 'ninja650',
    'Ninja 400': 'ninja400'
  },
  'keeway': {
    'RKF 125': 'rkf125',
    'Superleggera 125': 'superleggera125'
  },
  'wottan': {
    'Wottan GP1': 'wottangp1',
    'Wottan GP2': 'wottangp2',
    'Rebbe': 'rebbe'
  }
}

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
    nome: "Yamaha",
    moto: [
      {
        image: R125,
        nome: "R-125",
        anno: "2023",
        cilindrata: "399 cc",
      potenza: "46 CV",
      PesoaSecco: "169 kg",
      },
      {
        image: R3,
        nome: "R-3",
        anno: "2023",
        cilindrata: "125 cc",
      potenza: "11 CV",
      PesoaSecco: "142 kg",
      },
      {
        image: R6,
        nome: "R-6",
        anno: "2023",
       cilindrata: "599 cc",
      potenza: "118 CV",
      PesoaSecco: "190 kg",
      },
      {
        image: R1,
        nome: "R-1",
        anno: "2023",
        cilindrata: "998 cc",
      potenza: "200 CV",
      PesoaSecco: "180 kg",
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
    nome: "Keeway",
    moto: [
      {
        image: RKF125,
        nome: "RKF 125",
        anno: "2023",
        cilindrata: "125 cc",
        potenza: "12,8 CV",
        PesoaSecco: "147 kg",
      },
      {
        image: Superleggera,
        nome: "Superleggera",
        anno: "2023",
        cilindrata: "125 cc",
        potenza: "11 CV",
        PesoaSecco: "142 kg",
      },
    ]
  },
  {
    nome: "Wottan",
    moto: [
      {
        image: wottangp1,
        nome: "Wottan GP1",
        anno: "2023",
        cilindrata: "125 cc",
        potenza: "12,6 CV",
        PesoaSecco: "150 kg",
      },
      {
        image: wottangp2,
        nome: "Wottan GP2",
        anno: "2023",
        cilindrata: "125 cc",
        potenza: "14 CV",
        PesoaSecco: "155 kg",
      },
      {
        image: rebbe,
        nome: "Rebbe",
        anno: "2023",
        cilindrata: "125 cc",
        potenza: "11 CV",
        PesoaSecco: "155 kg",
      },
    ]
  },
  

])

// Computed per ottenere le statistiche della moto attualmente selezionata
const currentMotoStats = computed(() => {
  const currentMoto = moto[store.index].moto[variabile.value];
  const marca = moto[store.index].nome.toLowerCase();
  const modelloKey = motoMapping[marca]?.[currentMoto.nome];
  
  if (modelloKey) {
    const fullStats = getMotoStats(marca, modelloKey);
    if (fullStats) {
      return {
        potenza: fullStats.potenza,
        cilindrata: fullStats.cilindrata,
        peso: fullStats.peso,
        velocitaMax: fullStats.velocitaMax
      };
    }
  }
  
  // Fallback ai dati esistenti
  return {
    potenza: currentMoto.potenza,
    cilindrata: currentMoto.cilindrata,
    peso: currentMoto.PesoaSecco,
    velocitaMax: "N/A"
  };
});

function click(index) {
  variabile.value = index;
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
}

function showMotoDetails() {
  const currentMoto = moto[store.index].moto[variabile.value];
  const marca = moto[store.index].nome.toLowerCase();
  const modelloKey = motoMapping[marca]?.[currentMoto.nome];
  
  if (modelloKey) {
    const fullStats = getMotoStats(marca, modelloKey);
    if (fullStats) {
      selectedMotoStats.value = fullStats;
      selectedMotoImage.value = currentMoto.image;
      showModal.value = true;
    }
  }
}

function info() {
  console.log("ciao")
}



</script>

<template>
  <div class="container">
    <!-- Menu Hamburger Mobile -->
    <div class="mobile-menu-overlay" :class="{ active: isMobileMenuOpen }" @click="closeMobileMenu">
      <div class="mobile-menu" @click.stop>
        <div class="mobile-menu-header">
          <h3>Seleziona Marca</h3>
          <button class="close-mobile-menu" @click="closeMobileMenu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        <div class="mobile-brand-list">
          <button 
            v-for="(brand, index) in allBrands" 
            :key="index"
            class="mobile-brand-item"
            :class="{ active: currentBrandIndex === index }"
            @click="selectBrand(index)"
          >
            <img :src="brand.logo" :alt="brand.nome" class="mobile-brand-logo">
            <span class="mobile-brand-name">{{ brand.nome }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Hamburger Button -->
    <button class="hamburger-btn" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="moto">
      <img :src="moto[store.index].moto[0].image" id="a" @click="info" />
    </div>
    
    <div class="title">
      <img :src="Logo">
      <h1 id="b">{{moto[store.index].moto[0].nome}}</h1>
      <h4 id="c">{{moto[store.index].moto[0].anno}}</h4>
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
    <MotoBrief 
      :stats="currentMotoStats"
      :hasFullStats="true"
      :currentBrand="moto[store.index].nome"
      @showDetails="showMotoDetails"
    />
  </div>

  <!-- Modal per le statistiche complete -->
  <MotoDetailsModal 
    :isVisible="showModal"
    :motoData="selectedMotoStats"
    :motoImage="selectedMotoImage"
    :currentBrand="moto[store.index].nome"
    @close="showModal = false"
  />
</template>

<style scoped>

.visibile{
  display: block!important;;
}
.container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  position: relative;
  background: linear-gradient(145deg, #0a0a0f 0%, #151520 50%, #1a1a25 100%);
}

/* Layout responsivo base */
.sin {
  width: 50%;
  height: 100%;
  float: left;
  display: flex;
  flex-direction: column;
  position: relative;
}

.des {
  width: 50%;
  height: 100%;
  float: right;
  position: relative;
}

/* Menu Hamburger Mobile */
.hamburger-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1001;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(20, 20, 35, 0.95), rgba(15, 15, 25, 0.98));
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  display: none; /* Nascosto per default */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  backdrop-filter: blur(25px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.hamburger-btn span {
  width: 24px;
  height: 3px;
  background: linear-gradient(90deg, #ffffff, #e0e0e0);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.hamburger-btn:hover {
  border-color: rgba(0, 255, 136, 0.4);
  transform: scale(1.05);
  box-shadow: 0 12px 30px rgba(0, 255, 136, 0.2);
}

.hamburger-btn.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
  background: linear-gradient(90deg, #ff6b6b, #ff5252);
}

.hamburger-btn.active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger-btn.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
  background: linear-gradient(90deg, #ff6b6b, #ff5252);
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: linear-gradient(180deg, #0a0a0f 0%, #151520 50%, #1a1a25 100%);
  border-left: 2px solid rgba(255, 255, 255, 0.1);
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
}

.mobile-menu-overlay.active .mobile-menu {
  transform: translateX(0);
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(15, 15, 25, 0.6));
}

.mobile-menu-header h3 {
  color: white;
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff, #e0e0e0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.close-mobile-menu {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.close-mobile-menu:hover {
  border-color: rgba(255, 70, 70, 0.5);
  color: #ff4646;
  background: rgba(255, 70, 70, 0.1);
}

.mobile-brand-list {
  padding: 20px 0;
}

.mobile-brand-item {
  width: 100%;
  padding: 18px 20px;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 16px;
  font-weight: 600;
}

.mobile-brand-item:hover {
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 200, 100, 0.05));
  color: rgba(255, 255, 255, 1);
  transform: translateX(8px);
}

.mobile-brand-item.active {
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.15), rgba(0, 255, 136, 0.08));
  border-left: 4px solid #00ff88;
  color: #00ff88;
  font-weight: 700;
}

.mobile-brand-logo {
  width: 35px;
  height: 35px;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
}

.mobile-brand-name {
  flex: 1;
  text-align: left;
}

.info {
  text-align: center;
  position: absolute;
  top: 20%;
  right: 15px;
  width: 32%;
  background: rgba(20, 20, 35, 0.95);
  backdrop-filter: blur(25px);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  line-height: 1.6;
  z-index: 10;
}
.foot{
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.3));
  backdrop-filter: blur(10px);
  padding: 10px 0;
}

.foot::-webkit-scrollbar {
  height: 6px;
}

.foot::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
}

.foot::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #00ff88, #00cc6f);
  border-radius: 3px;
}

.a{
  width: 300px;
  height: 20vh;
  flex-shrink: 0;
  margin: 0 10px;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  background: linear-gradient(135deg, rgba(15, 15, 25, 0.8), rgba(25, 25, 35, 0.6));
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
}

.a:hover {
  transform: translateY(-5px) scale(1.02);
  border-color: rgba(0, 255, 136, 0.4);
  box-shadow: 0 10px 25px rgba(0, 255, 136, 0.2);
}
  .container{
    height: 90vh;
    background: linear-gradient(135deg, #0a0a0f 0%, #1a1a25 50%, #0f0f17 100%);
    position: relative;
    overflow: hidden;
  }

  .container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at 70% 30%, rgba(0, 255, 136, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  .title{
    width: 50%;
    height: 10vh;
    padding: 30px;
    font-size: 40px;
    color: white;
    text-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  }

  .title h1 {
    background: linear-gradient(135deg, #ffffff, #e0e0e0);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    margin: 10px 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .title h4 {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
    margin: 5px 0;
  }
  .title-mini{
    width: 100%;
    height: 100%;
    padding: 15px;
    font-size: 12px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4));
    border-radius: 15px;
  }

  .title-mini h1 {
    margin: 5px 0;
    font-size: 16px;
    font-weight: 700;
    color: #00ff88;
    text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  }

  .title-mini h3 {
    margin: 2px 0;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
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

/* Tablet Grande - 1200px */
@media screen and (max-width: 1200px) {
  .container {
    padding: 20px;
  }
  
  .title h1 {
    font-size: 60px;
  }
  
  .moto {
    width: 70%;
    left: 45%;
  }
  
  .info {
    padding: 30px;
    font-size: 16px;
  }
  
  .foot {
    padding: 15px 30px;
  }
}

/* Tablet - 1024px - Mostra il menu hamburger */
@media screen and (max-width: 1024px) {
  .hamburger-btn {
    display: flex; /* Mostra il menu hamburger */
  }
  
  .foot {
    display: none; /* Nasconde il footer di navigazione originale */
  }
  
  .container {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    padding: 15px;
  }
}
  
  .title {
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .title h1 {
    font-size: 52px;
    margin: 0;
  }
  
  .moto {
    position: relative;
    width: 80%;
    left: 50%;
    top: auto;
    transform: translateX(-50%);
    margin: 30px 0;
  }
  
  .moto-mini {
    position: relative;
    width: 90%;
    left: 50%;
    top: auto;
    transform: translateX(-50%);
    margin: 20px 0;
  }
  
  .info {
    display: block;
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 25px;
    font-size: 15px;
    line-height: 1.6;
  }
  
  .foot {
    position: relative;
    bottom: auto;
    width: 100%;
    margin-top: 40px;
    padding: 20px;
  }

/* Tablet Piccolo - 768px */
@media (max-width: 768px) {
  /* Mostra il menu hamburger */
  .hamburger-btn {
    display: flex;
  }
  
  /* Nascondi il footer di navigazione originale */
  .foot {
    display: none;
  }
  
  .container {
    padding: 10px;
  }
  
  .title h1 {
    font-size: 42px;
    line-height: 1.2;
  }
  
  .moto {
    width: 90%;
    margin: 20px 0;
  }
  
  .moto-mini {
    width: 95%;
    margin: 15px 0;
  }
  
  .info {
    padding: 20px;
    font-size: 14px;
    max-width: 500px;
  }
  
  .a {
    min-width: 120px;
    height: 60px;
    font-size: 14px;
  }
}

/* Mobile Grande - 480px */
@media (max-width: 480px) {
  .hamburger-btn {
    top: 15px;
    right: 15px;
    width: 45px;
    height: 45px;
  }
  
  .hamburger-btn span {
    width: 20px;
    height: 2px;
  }
  
  .mobile-menu {
    width: 100%;
  }
  
  .container {
    padding: 8px;
    min-height: 100vh;
  }
  
  .title {
    margin-bottom: 20px;
  }
  
  .title h1 {
    font-size: 32px;
    line-height: 1.1;
    margin: 0;
  }
  
  .moto {
    width: 95%;
    margin: 15px 0;
  }
  
  .moto-mini {
    width: 98%;
    margin: 10px 0;
  }
  
  .info {
    display: none;
  }
}

/* Mobile Piccolo - 375px */
@media (max-width: 375px) {
  .hamburger-btn {
    width: 40px;
    height: 40px;
    top: 12px;
    right: 12px;
  }
  
  .hamburger-btn span {
    width: 18px;
  }
  
  .mobile-menu {
    width: 100%;
  }
  
  .mobile-menu-header {
    padding: 20px 15px;
  }
  
  .mobile-menu-header h3 {
    font-size: 18px;
  }
  
  .mobile-brand-item {
    padding: 16px 15px;
    font-size: 15px;
  }
  
  .mobile-brand-logo {
    width: 30px;
    height: 30px;
  }
  
  .container {
    padding: 5px;
  }
  
  .title h1 {
    font-size: 28px;
  }
  
  .moto, .moto-mini {
    width: 98%;
    margin: 8px 0;
  }
}

/* Mobile Extra Piccolo - 320px */
@media (max-width: 320px) {
  .hamburger-btn {
    width: 36px;
    height: 36px;
    top: 10px;
    right: 10px;
  }
  
  .hamburger-btn span {
    width: 16px;
    height: 2px;
  }
  
  .mobile-menu-header h3 {
    font-size: 16px;
  }
  
  .mobile-brand-item {
    padding: 14px 12px;
    font-size: 14px;
  }
  
  .mobile-brand-logo {
    width: 28px;
    height: 28px;
  }
  
  .title h1 {
    font-size: 24px;
    line-height: 1;
  }
  
  .moto, .moto-mini {
    width: 100%;
    margin: 5px 0;
  }
}
</style>
