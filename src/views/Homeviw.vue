<!--
  📄 HOMEVIW.VUE - PAGINA PRINCIPALE / LAYOUT DELL'APPLICAZIONE
  
  🎯 SCOPO:
  - Fornisce il layout base dell'applicazione con header e area di contenuto
  - Funge da wrapper principale per tutte le altre pagine tramite router-view
  - Gestisce la navigazione di ritorno alla homepage tramite il link "MOTO"
  
  🏗️ STRUTTURA:
  - Header fisso con brand "MOTO" e link di navigazione
  - Container principale con sfondo gradiente elegante
  - Area dinamica per il contenuto delle pagine (router-view)
  
  🎨 DESIGN:
  - Tema scuro futuristico con gradienti blu/nero
  - Effetti di blur e glow verde caratteristici
  - Responsive design per tutti i dispositivi
  - Stile coerente con il listino Ducati
-->

<script setup>
// Importazione del componente RouterLink per la navigazione
import { RouterLink } from 'vue-router';
</script>

<template>
    <!-- Wrapper Vuetify per l'intera applicazione -->
    <v-app>
    <v-main>
      <!-- Container principale con effetti visivi -->
      <div class="container">
        <!-- Overlay decorativo con effetto radiale verde -->
        <div class="container-overlay"></div>
        
        <!-- Header con brand e navigazione -->
        <div class="header">
          <!-- Link di ritorno alla homepage con stile elegante -->
          <router-link to="/" id="palle">MOTO</router-link>
        </div>
        
        <!-- Area dinamica dove vengono renderizzate le pagine dell'app -->
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
/* Container principale con lo stesso gradiente del listino Ducati */
.container {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(145deg, #0a0a0f 0%, #151520 50%, #1a1a25 100%);
  position: relative;
  overflow: hidden;
}

/* Effetto overlay radiale come nel listino Ducati */
.container-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at 70% 30%, rgba(0, 255, 136, 0.03) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
}

/* Header con stile simile al listino Ducati */
.header {
  height: 10vh;
  background: linear-gradient(135deg, rgba(20, 20, 35, 0.95), rgba(15, 15, 25, 0.98));
  backdrop-filter: blur(25px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  padding: 20px;
  position: relative;
  z-index: 10;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.05), transparent);
  pointer-events: none;
}

.header h1 {
  text-align: center;
  padding-top: 30px;
  background: linear-gradient(135deg, #ffffff, #e0e0e0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

#palle {
  color: transparent;
  background: linear-gradient(135deg, #ffffff, #e0e0e0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  font-size: 30px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 800;
  text-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
}

#palle:hover {
  background: linear-gradient(135deg, #00ff88, #00cc6f);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: scale(1.05);
  text-shadow: 0 0 30px rgba(0, 255, 136, 0.5);
}

/* Stili responsivi per tablet e mobile */
@media screen and (max-width: 1024px) {
  .container {
    padding: 15px;
  }
  
  .header {
    padding: 15px;
  }
  
  #palle {
    font-size: 26px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 10px;
  }
  
  .header {
    padding: 12px;
    height: 8vh;
  }
  
  #palle {
    font-size: 24px;
  }
}

@media screen and (max-width: 480px) {
  .container {
    padding: 5px;
  }
  
  .header {
    padding: 10px;
    height: 7vh;
  }
  
  #palle {
    font-size: 22px;
  }
}

@media screen and (max-width: 375px) {
  .header {
    padding: 8px;
    height: 6vh;
  }
  
  #palle {
    font-size: 20px;
  }
}

@media screen and (max-width: 320px) {
  .header {
    padding: 6px;
    height: 5vh;
  }
  
  #palle {
    font-size: 18px;
  }
}
</style>
