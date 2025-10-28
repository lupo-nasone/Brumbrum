<!--
  📄 MARCHE.VUE - PAGINA SELEZIONE MARCHE MOTOCICLISTICHE
  
  🎯 SCOPO:
  - Mostra una griglia di card interattive per selezionare le marche di moto
  - Permette la navigazione verso i listini specifici di ogni marca
  - Gestisce lo stato globale per mantenere la marca selezionata
  
  🏗️ STRUTTURA:
  - Array delle marche con logo, bandiera nazionale e numero modelli
  - Card interattive con hover effects e animazioni
  - Navigazione dinamica verso le pagine dei listini
  
  🎨 DESIGN:
  - Card eleganti con effetti glass-morphism
  - Hover effects con glow verde e animazioni
  - Layout responsive con flexbox
  - Tema scuro futuristico coerente con l'app
  
  🔧 FUNZIONALITÀ:
  - Click su una card porta al listino della marca selezionata
  - Salvataggio dell'indice della marca nello store globale
  - Animazioni fluide e feedback visivo
-->

<script setup>
// Importazione componenti e risorse
import HelloWorld from '../components/HelloWorld.vue'

// Import dei loghi delle marche
import LogoDucati from '../../src/assets/Loghi/Ducati-Logo.png'
import LogoYamaha from '../../src/assets/Loghi/yamaha.png'
import LogoKawasaki from '../../src/assets/Loghi/Kawasaki-Logo.png'
import LogoKeeway from '../../src/assets/Loghi/Keeway-Logo.png'
import LogoWottan from '../../src/assets/Loghi/Wottan-Logo.png'

// Import delle bandiere nazionali
import Italia from '../../src/assets/Flag/italia.png'
import Giappone from '../../src/assets/Flag/giappone.png' 

// Import per routing e store globale
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from '../store/store.js'

// Inizializzazione dello store per gestire lo stato globale
const store = useStore()

// Array delle marche disponibili con tutte le informazioni necessarie
let marche = ([
  {
    name: 'Ducati',           // Nome della marca
    logo: LogoDucati,         // Logo della marca
    nation: Italia,           // Immagine bandiera
    nationa: "Italia",        // Nome nazione (stringa)
    nmodelli: "5",           // Numero di modelli disponibili
    link: '/Listino-Ducati', // URL del listino specifico
  },
  {
    name: 'Yamaha',
    logo: LogoYamaha,
    nation: Giappone,
    nationa: "Giappone",
    nmodelli: "4",
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
  {
    name: 'Keeway',
    logo: LogoKeeway,
    nation: Italia,
    nationa: "Italia",
    nmodelli: "2",
    link: '/Listino-Keeway',
  },
  {
    name: 'Wottan',
    logo: LogoWottan,
    nation: Italia,
    nationa: "Italia",
    nmodelli: "3",
    link: '/Listino-Wottan',
  }
])

// Variabile locale per tracking (attualmente non utilizzata)
let a = 0;

/**
 * Funzione chiamata quando si clicca su una marca
 * @param {number} index - Indice della marca selezionata nell'array
 */
function quale(index) {
  store.set(index)        // Salva l'indice nello store globale
  a = index;              // Aggiorna variabile locale
  console.log(index);     // Debug: mostra l'indice selezionato
}
</script>

<template>
  <!-- Container principale con griglia delle marche -->
  <div class="container">
    <!-- Loop attraverso tutte le marche disponibili -->
    <router-link 
      :to="'/Listino-Ducati'" 
      v-for="(items, index) in marche" 
      class="no" 
      @click="quale(index)" 
      :key="index"
    >
      <!-- Card singola marca -->
      <div class="marca">
        <!-- Sezione superiore con logo -->
        <div class="a">
          <div class="logo">
            <!-- Logo della marca con alt text -->
            <img :src="items.logo" alt="logo" />
          </div>
        </div>
        
        <!-- Footer informativo della card -->
        <div class="b">
          <!-- Lato sinistro: bandiera e nazione -->
          <div class="left">
            <img :src="items.nation" alt="nation" class="flag" />
            <h1>{{items.nationa}}</h1>
          </div>
          
          <!-- Lato destro: numero di modelli -->
          <div class="right">
            <p>{{items.nmodelli}}</p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
/* Container principale con background simile al listino Ducati */
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100% !important;  
  height: 80vh;
  background: linear-gradient(145deg, #0a0a0f 0%, #151520 50%, #1a1a25 100%);
  position: relative;
  overflow: hidden;
  padding: 20px;
}

/* Effetto overlay radiale come nel listino Ducati */
.container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at 70% 30%, rgba(0, 255, 136, 0.03) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
}

/* Link wrapper senza decorazioni */
.no {
  text-decoration: none;
  color: inherit;
  position: relative;
  z-index: 2;
}

.no:hover {
  background-color: transparent;
}

/* Stile delle card delle marche simile agli elementi del listino Ducati */
.marca {
  width: 300px;
  height: 400px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  margin: 20px;
  background: linear-gradient(135deg, rgba(15, 15, 25, 0.8), rgba(25, 25, 35, 0.6));
  backdrop-filter: blur(20px);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

/* Effetto hover con glow verde */
.marca:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(0, 255, 136, 0.4);
  box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(15, 15, 25, 0.9));
}

.marca:hover .b {
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.8), rgba(0, 200, 100, 0.6));
}

/* Area del logo */
.a {
  height: 92%;
  position: relative;
}

.logo {
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
  position: relative;
  overflow: hidden;
}

/* Effetto particelle/glow dietro il logo */
.logo::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.4s ease;
}

.marca:hover .logo::before {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(0, 255, 136, 0.2) 0%, transparent 70%);
}

.logo img {
  width: 80%;
  max-width: 200px;
  height: auto;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5));
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
}

.marca:hover .logo img {
  transform: scale(1.1);
  filter: drop-shadow(0 6px 20px rgba(0, 255, 136, 0.3));
}

/* Footer informativo */
.b {
  background: linear-gradient(135deg, rgba(20, 20, 35, 0.95), rgba(15, 15, 25, 0.98));
  backdrop-filter: blur(15px);
  height: 8%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 0 0 20px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  padding: 0 15px;
}

/* Layout interno del footer */
.left {
  float: left;
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

.right {
  float: right;
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

/* Testi con gradienti */
h1 {
  color: transparent;
  background: linear-gradient(135deg, #ffffff, #e0e0e0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

p {
  font-size: 18px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  margin: 0;
  text-align: center;
}

.marca:hover h1 {
  background: linear-gradient(135deg, #00ff88, #00cc6f);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
}

.marca:hover p {
  color: rgba(255, 255, 255, 1);
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.2);
}

/* Bandiera con effetti */
.flag {
  height: 24px;
  width: auto;
  border-radius: 4px;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
  transition: all 0.3s ease;
}

.marca:hover .flag {
  filter: drop-shadow(0 4px 12px rgba(0, 255, 136, 0.2));
  transform: scale(1.05);
}

/* Responsive Design */
@media screen and (max-width: 1024px) {
  .container {
    padding: 15px;
    height: auto;
    min-height: 80vh;
  }
  
  .marca {
    width: 280px;
    height: 380px;
    margin: 15px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 10px;
    flex-direction: column;
    height: auto;
  }
  
  .marca {
    width: 260px;
    height: 360px;
    margin: 10px;
  }
  
  h1 {
    font-size: 14px;
  }
  
  p {
    font-size: 16px;
  }
}

@media screen and (max-width: 480px) {
  .container {
    padding: 8px;
  }
  
  .marca {
    width: 240px;
    height: 320px;
    margin: 8px;
  }
  
  h1 {
    font-size: 12px;
  }
  
  p {
    font-size: 14px;
  }
  
  .flag {
    height: 20px;
  }
}

@media screen and (max-width: 375px) {
  .marca {
    width: 220px;
    height: 300px;
    margin: 6px;
  }
  
  h1 {
    font-size: 11px;
  }
  
  p {
    font-size: 12px;
  }
  
  .flag {
    height: 18px;
  }
}

@media screen and (max-width: 320px) {
  .marca {
    width: 200px;
    height: 280px;
    margin: 5px;
  }
  
  h1 {
    font-size: 10px;
  }
  
  p {
    font-size: 11px;
  }
  
  .flag {
    height: 16px;
  }
}
</style>
