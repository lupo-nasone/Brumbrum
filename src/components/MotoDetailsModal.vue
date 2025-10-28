<template>
  <Teleport to="body">
    <div class="modal-overlay" v-if="isVisible" @click="closeModal" :class="`brand-${currentBrand?.toLowerCase()}`">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h2>{{ motoData.nome }}</h2>
          <button class="close-btn" @click="closeModal">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        
        <div class="modal-content">
          <div class="moto-image-section">
            <div class="image-glow"></div>
            <img :src="motoImage" :alt="motoData.nome" class="moto-image" />
            <div class="image-overlay">
              <h3>{{ motoData.nome }}</h3>
              <p>{{ motoData.anno }}</p>
            </div>
            <div class="floating-elements">
              <div v-for="i in 6" :key="i" class="floating-element" :style="getFloatingStyle(i)"></div>
            </div>
          </div>
          
          <div class="stats-sections">
            <!-- Prestazioni -->
            <div class="stats-category" :style="{ animationDelay: '0.1s' }">
              <h3 class="category-title">🏁 Prestazioni</h3>
              <div class="stats-grid">
                <div class="stat-card highlight" v-motion-slide-visible-once-bottom>
                  <span class="stat-label">Potenza</span>
                  <span class="stat-value">{{ motoData.potenza }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-bottom>
                  <span class="stat-label">Coppia</span>
                  <span class="stat-value">{{ motoData.coppia }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-bottom>
                  <span class="stat-label">Velocità Max</span>
                  <span class="stat-value">{{ motoData.velocitaMax }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-bottom>
                  <span class="stat-label">Autonomia</span>
                  <span class="stat-value">{{ motoData.autonomia }}</span>
                </div>
              </div>
            </div>

            <!-- Motore -->
            <div class="stats-category" :style="{ animationDelay: '0.2s' }">
              <h3 class="category-title">⚙️ Motore</h3>
              <div class="stats-grid">
                <div class="stat-card" v-motion-slide-visible-once-left>
                  <span class="stat-label">Tipo Motore</span>
                  <span class="stat-value small">{{ motoData.tipoMotore }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-right>
                  <span class="stat-label">Cilindrata</span>
                  <span class="stat-value">{{ motoData.cilindrata }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-left>
                  <span class="stat-label">N° Cilindri</span>
                  <span class="stat-value">{{ motoData.numCilindri }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-right>
                  <span class="stat-label">Alesaggio/Corsa</span>
                  <span class="stat-value small">{{ motoData.alesaggioCorsa }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-left>
                  <span class="stat-label">Rapporto Compressione</span>
                  <span class="stat-value">{{ motoData.rapportoCompressione }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-right>
                  <span class="stat-label">Distribuzione</span>
                  <span class="stat-value small">{{ motoData.distribuzione }}</span>
                </div>
              </div>
            </div>

            <!-- Telaio e Sospensioni -->
            <div class="stats-category" :style="{ animationDelay: '0.3s' }">
              <h3 class="category-title">🔧 Telaio & Sospensioni</h3>
              <div class="stats-grid">
                <div class="stat-card" v-motion-slide-visible-once-bottom>
                  <span class="stat-label">Telaio</span>
                  <span class="stat-value small">{{ motoData.telaio }}</span>
                </div>
                <div class="stat-card highlight" v-motion-slide-visible-once-bottom>
                  <span class="stat-label">Peso</span>
                  <span class="stat-value">{{ motoData.peso }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-bottom>
                  <span class="stat-label">Sospensione Ant.</span>
                  <span class="stat-value small">{{ motoData.sospAnt }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-bottom>
                  <span class="stat-label">Sospensione Post.</span>
                  <span class="stat-value small">{{ motoData.sospPost }}</span>
                </div>
              </div>
            </div>

            <!-- Freni e Ruote -->
            <div class="stats-category" :style="{ animationDelay: '0.4s' }">
              <h3 class="category-title">🛞 Freni & Ruote</h3>
              <div class="stats-grid">
                <div class="stat-card" v-motion-slide-visible-once-left>
                  <span class="stat-label">Freni Anteriori</span>
                  <span class="stat-value small">{{ motoData.freniAnt }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-right>
                  <span class="stat-label">Freni Posteriori</span>
                  <span class="stat-value small">{{ motoData.freniPost }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-left>
                  <span class="stat-label">Pneumatico Ant.</span>
                  <span class="stat-value">{{ motoData.ruoteAnt }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-right>
                  <span class="stat-label">Pneumatico Post.</span>
                  <span class="stat-value">{{ motoData.ruotePost }}</span>
                </div>
              </div>
            </div>

            <!-- Dimensioni e Consumi -->
            <div class="stats-category" :style="{ animationDelay: '0.5s' }">
              <h3 class="category-title">📏 Dimensioni & Consumi</h3>
              <div class="stats-grid">
                <div class="stat-card" v-motion-slide-visible-once-bottom>
                  <span class="stat-label">Lunghezza</span>
                  <span class="stat-value">{{ motoData.lunghezza }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-bottom>
                  <span class="stat-label">Larghezza</span>
                  <span class="stat-value">{{ motoData.larghezza }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-bottom>
                  <span class="stat-label">Altezza</span>
                  <span class="stat-value">{{ motoData.altezza }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-bottom>
                  <span class="stat-label">Passo</span>
                  <span class="stat-value">{{ motoData.passo }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-bottom>
                  <span class="stat-label">Altezza Sella</span>
                  <span class="stat-value">{{ motoData.altezzaSella }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-bottom>
                  <span class="stat-label">Capacità Serbatoio</span>
                  <span class="stat-value">{{ motoData.capacitaSerbatoio }}</span>
                </div>
                <div class="stat-card" v-motion-slide-visible-once-bottom>
                  <span class="stat-label">Consumo Medio</span>
                  <span class="stat-value">{{ motoData.consumoMedio }}</span>
                </div>
                <div class="stat-card highlight price-card" v-motion-slide-visible-once-bottom>
                  <span class="stat-label">Prezzo</span>
                  <span class="stat-value price">{{ motoData.prezzo }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { setBrandCSSVariables } from '../utils/brandThemes.js'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  motoData: {
    type: Object,
    required: true
  },
  motoImage: {
    type: String,
    required: true
  },
  currentBrand: {
    type: String,
    default: 'kawasaki'
  }
})

const emit = defineEmits(['close'])

// Applicare il tema del marchio quando cambia
watch(() => props.currentBrand, (newBrand) => {
  if (newBrand) {
    setBrandCSSVariables(newBrand)
  }
}, { immediate: true })

const closeModal = () => {
  emit('close')
}

// Elementi floating per l'immagine
const getFloatingStyle = (index) => {
  const delay = index * 0.3
  const duration = 4 + (index % 2)
  return {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    left: `${10 + (index * 15)}%`,
    top: `${20 + (index % 3) * 20}%`
  }
}

// Gestione ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && props.isVisible) {
    closeModal()
  }
})
</script>

<style scoped>
:root {
  --brand-primary: #00ff88;
  --brand-secondary: #00cc6f;
  --brand-accent: #00aa5c;
  --brand-gradient: linear-gradient(135deg, #00ff88, #00cc6f, #00aa5c);
  --brand-glow: rgba(0, 255, 136, 0.3);
  --brand-shadow: rgba(0, 255, 136, 0.2);
  --brand-light: rgba(0, 255, 136, 0.1);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.95) 100%);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
  animation: modalFadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    backdrop-filter: blur(12px);
  }
}

.modal-container {
  background: linear-gradient(145deg, #0a0a0f 0%, #151520 50%, #1a1a25 100%);
  border-radius: 28px;
  max-width: 1400px;
  max-height: 95vh;
  width: 100%;
  overflow: hidden;
  box-shadow: 
    0 50px 100px rgba(0, 0, 0, 0.8),
    0 25px 50px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 2px solid var(--brand-primary);
  animation: modalSlideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

@keyframes modalSlideUp {
  from {
    opacity: 0;
    transform: translateY(80px) scale(0.9) rotateX(10deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0deg);
  }
}

.modal-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--brand-gradient);
  animation: borderPulse 2s ease-in-out infinite;
}

@keyframes borderPulse {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; filter: brightness(1.3); }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(15, 15, 25, 0.8));
  backdrop-filter: blur(25px);
  position: relative;
}

.modal-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 1px;
  background: var(--brand-gradient);
  opacity: 0.6;
}

.modal-header h2 {
  background: var(--brand-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-size: 36px;
  font-weight: 900;
  text-shadow: 0 0 30px var(--brand-glow);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.5px;
  animation: titleGlow 3s ease-in-out infinite;
}

@keyframes titleGlow {
  0%, 100% { filter: drop-shadow(0 0 10px var(--brand-glow)); }
  50% { filter: drop-shadow(0 0 25px var(--brand-glow)); }
}

.close-btn {
  background: linear-gradient(135deg, rgba(30, 30, 40, 0.8), rgba(20, 20, 30, 0.9));
  border: 2px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  font-size: 28px;
  cursor: pointer;
  padding: 14px;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(25px);
}

.close-btn:hover {
  background: linear-gradient(135deg, rgba(255, 70, 70, 0.3), rgba(200, 50, 50, 0.4));
  border-color: rgba(255, 70, 70, 0.6);
  color: #ff4646;
  transform: scale(1.1) rotate(90deg);
  box-shadow: 0 10px 25px rgba(255, 70, 70, 0.4);
}

.close-btn svg {
  width: 28px;
  height: 28px;
  transition: transform 0.4s ease;
}

.modal-content {
  overflow-y: auto;
  max-height: calc(95vh - 140px);
  padding: 0;
  scroll-behavior: smooth;
}

.modal-content::-webkit-scrollbar {
  width: 10px;
}

.modal-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.modal-content::-webkit-scrollbar-thumb {
  background: var(--brand-gradient);
  border-radius: 5px;
  box-shadow: inset 0 0 5px var(--brand-glow);
}

.moto-image-section {
  position: relative;
  height: 400px;
  background: linear-gradient(135deg, #000 0%, #1a1a2e 50%, #16213e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--brand-light) 0%, transparent 70%);
  animation: imageGlow 4s ease-in-out infinite;
  pointer-events: none;
}

@keyframes imageGlow {
  0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.2); }
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--brand-primary);
  border-radius: 50%;
  animation: elementFloat 6s ease-in-out infinite;
  box-shadow: 0 0 15px var(--brand-glow);
}

@keyframes elementFloat {
  0%, 100% { 
    transform: translateY(0) rotate(0deg); 
    opacity: 0; 
  }
  25% { opacity: 1; }
  50% { 
    transform: translateY(-40px) rotate(180deg); 
    opacity: 0.8; 
  }
  75% { opacity: 1; }
}

.moto-image {
  max-width: 85%;
  max-height: 85%;
  object-fit: contain;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8));
  transition: all 0.6s ease;
  animation: imageReveal 1s ease-out;
}

@keyframes imageReveal {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(30px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.moto-image:hover {
  transform: scale(1.05) rotateY(5deg);
  filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 30px var(--brand-glow));
}

.image-overlay {
  position: absolute;
  bottom: 30px;
  left: 40px;
  color: white;
  text-shadow: 0 5px 20px rgba(0, 0, 0, 0.9);
  z-index: 2;
  animation: overlaySlide 0.8s ease-out 0.3s both;
}

@keyframes overlaySlide {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.image-overlay h3 {
  margin: 0;
  font-size: 32px;
  font-weight: 900;
  background: var(--brand-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.image-overlay p {
  margin: 10px 0 0 0;
  font-size: 20px;
  opacity: 0.9;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
}

.stats-sections {
  padding: 40px;
  background: linear-gradient(180deg, #0f0f17 0%, #1a1a25 100%);
}

.stats-category {
  margin-bottom: 50px;
  animation: categorySlide 0.8s ease-out;
  animation-fill-mode: both;
}

@keyframes categorySlide {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.category-title {
  background: var(--brand-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 30px;
  padding-bottom: 18px;
  border-bottom: 3px solid transparent;
  border-image: var(--brand-gradient) 1;
  text-shadow: 0 0 25px var(--brand-glow);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  display: flex;
  align-items: center;
  gap: 12px;
  animation: titlePulse 3s ease-in-out infinite;
}

@keyframes titlePulse {
  0%, 100% { filter: drop-shadow(0 0 10px var(--brand-glow)); }
  50% { filter: drop-shadow(0 0 20px var(--brand-glow)); }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

.stat-card {
  background: linear-gradient(135deg, rgba(20, 20, 35, 0.9), rgba(15, 15, 25, 0.95));
  border: 2px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(25px);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--brand-light), transparent);
  transition: left 1s ease;
}

.stat-card:hover::before {
  left: 100%;
}

.stat-card:hover {
  background: linear-gradient(135deg, var(--brand-light), rgba(0, 0, 0, 0.6));
  border-color: var(--brand-primary);
  transform: translateY(-8px) scale(1.03) rotateY(2deg);
  box-shadow: 
    0 25px 50px var(--brand-shadow),
    0 10px 25px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.stat-card.highlight {
  background: linear-gradient(135deg, var(--brand-light), rgba(0, 0, 0, 0.4));
  border: 3px solid var(--brand-primary);
  animation: highlightPulse 3s ease-in-out infinite;
}

@keyframes highlightPulse {
  0%, 100% { 
    box-shadow: 0 0 20px var(--brand-glow);
    border-color: var(--brand-primary);
  }
  50% { 
    box-shadow: 0 0 40px var(--brand-glow);
    border-color: var(--brand-accent);
  }
}

.stat-card.price-card {
  background: linear-gradient(135deg, var(--brand-light), var(--brand-shadow));
  border: 3px solid var(--brand-accent);
  position: relative;
}

.stat-card.price-card::after {
  content: '💰';
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 28px;
  opacity: 0.8;
  animation: priceFloat 2s ease-in-out infinite;
}

@keyframes priceFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.stat-label {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.stat-value {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 800;
  line-height: 1.4;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.stat-value.small {
  font-size: 18px;
  line-height: 1.5;
  font-weight: 700;
}

.stat-value.price {
  background: var(--brand-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 28px;
  font-weight: 900;
  text-shadow: 0 0 25px var(--brand-glow);
  animation: priceGlow 2s ease-in-out infinite;
}

@keyframes priceGlow {
  0%, 100% { filter: drop-shadow(0 0 10px var(--brand-glow)); }
  50% { filter: drop-shadow(0 0 20px var(--brand-glow)); }
}

/* Responsive Design - Approccio Mobile-First */

/* Tablet Grande - 1200px */
@media (max-width: 1200px) {
  .modal-container {
    max-width: 1100px;
    margin: 15px;
  }
  
  .modal-header {
    padding: 32px 38px;
  }
  
  .modal-header h2 {
    font-size: 34px;
  }
  
  .stats-sections {
    padding: 38px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 18px;
  }
  
  .moto-image-section {
    height: 380px;
  }
}

/* Tablet - 1024px */
@media (max-width: 1024px) {
  .modal-overlay {
    padding: 15px;
  }
  
  .modal-container {
    max-width: 900px;
    border-radius: 24px;
  }
  
  .modal-header {
    padding: 28px 32px;
  }
  
  .modal-header h2 {
    font-size: 30px;
  }
  
  .close-btn {
    width: 52px;
    height: 52px;
    font-size: 26px;
  }
  
  .stats-sections {
    padding: 32px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px;
  }
  
  .stat-card {
    padding: 26px;
  }
  
  .moto-image-section {
    height: 350px;
  }
  
  .category-title {
    font-size: 26px;
  }
}

/* Tablet Piccolo - 768px */
@media (max-width: 768px) {
  .modal-overlay {
    padding: 12px;
  }
  
  .modal-container {
    border-radius: 20px;
    max-height: 94vh;
    max-width: 100%;
  }
  
  .modal-header {
    padding: 26px 28px;
    flex-direction: row;
    gap: 15px;
  }
  
  .modal-header h2 {
    font-size: 26px;
    flex: 1;
    text-align: left;
  }
  
  .close-btn {
    width: 48px;
    height: 48px;
    font-size: 24px;
    flex-shrink: 0;
  }
  
  .stats-sections {
    padding: 28px 26px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 14px;
  }
  
  .stat-card {
    padding: 20px;
  }
  
  .moto-image-section {
    height: 300px;
  }
  
  .image-overlay {
    bottom: 25px;
    left: 30px;
  }
  
  .image-overlay h3 {
    font-size: 26px;
  }
  
  .image-overlay p {
    font-size: 18px;
  }
  
  .category-title {
    font-size: 24px;
    margin-bottom: 25px;
  }
  
  .stat-label {
    font-size: 14px;
  }
  
  .stat-value {
    font-size: 18px;
  }
  
  .stat-value.price {
    font-size: 24px;
  }
}

/* Mobile Grande - 480px */
@media (max-width: 480px) {
  .modal-overlay {
    padding: 8px;
  }
  
  .modal-container {
    border-radius: 16px;
    max-height: 96vh;
  }
  
  .modal-header {
    padding: 22px 24px;
  }
  
  .modal-header h2 {
    font-size: 22px;
    line-height: 1.2;
  }
  
  .close-btn {
    width: 44px;
    height: 44px;
    font-size: 20px;
    border-radius: 12px;
  }
  
  .stats-sections {
    padding: 24px 22px;
  }
  
  .stats-category {
    margin-bottom: 35px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .stat-card {
    padding: 18px;
    border-radius: 14px;
  }
  
  .moto-image-section {
    height: 250px;
  }
  
  .image-overlay {
    bottom: 20px;
    left: 24px;
  }
  
  .image-overlay h3 {
    font-size: 22px;
    line-height: 1.1;
  }
  
  .image-overlay p {
    font-size: 16px;
    margin-top: 6px;
  }
  
  .category-title {
    font-size: 20px;
    margin-bottom: 20px;
    gap: 8px;
  }
  
  .stat-label {
    font-size: 13px;
    margin-bottom: 8px;
    letter-spacing: 0.8px;
  }
  
  .stat-value {
    font-size: 16px;
    line-height: 1.3;
  }
  
  .stat-value.small {
    font-size: 15px;
  }
  
  .stat-value.price {
    font-size: 20px;
  }
  
  .floating-element {
    width: 6px;
    height: 6px;
  }
}

/* Mobile Piccolo - 375px */
@media (max-width: 375px) {
  .modal-overlay {
    padding: 6px;
  }
  
  .modal-container {
    border-radius: 14px;
  }
  
  .modal-header {
    padding: 20px 22px;
  }
  
  .modal-header h2 {
    font-size: 20px;
  }
  
  .close-btn {
    width: 40px;
    height: 40px;
    font-size: 18px;
    border-radius: 10px;
  }
  
  .stats-sections {
    padding: 22px 20px;
  }
  
  .stat-card {
    padding: 16px;
    border-radius: 12px;
  }
  
  .moto-image-section {
    height: 220px;
  }
  
  .image-overlay {
    bottom: 18px;
    left: 22px;
  }
  
  .image-overlay h3 {
    font-size: 20px;
  }
  
  .image-overlay p {
    font-size: 15px;
  }
  
  .category-title {
    font-size: 18px;
    margin-bottom: 18px;
  }
  
  .stat-label {
    font-size: 12px;
    margin-bottom: 6px;
  }
  
  .stat-value {
    font-size: 15px;
  }
  
  .stat-value.price {
    font-size: 18px;
  }
}

/* Mobile Extra Piccolo - 320px */
@media (max-width: 320px) {
  .modal-overlay {
    padding: 4px;
  }
  
  .modal-container {
    border-radius: 12px;
    max-height: 98vh;
  }
  
  .modal-header {
    padding: 18px 20px;
  }
  
  .modal-header h2 {
    font-size: 18px;
    line-height: 1.1;
  }
  
  .close-btn {
    width: 36px;
    height: 36px;
    font-size: 16px;
    border-radius: 8px;
  }
  
  .stats-sections {
    padding: 20px 18px;
  }
  
  .stats-category {
    margin-bottom: 30px;
  }
  
  .stat-card {
    padding: 14px;
    border-radius: 10px;
  }
  
  .moto-image-section {
    height: 200px;
  }
  
  .image-overlay {
    bottom: 16px;
    left: 20px;
  }
  
  .image-overlay h3 {
    font-size: 18px;
    line-height: 1;
  }
  
  .image-overlay p {
    font-size: 14px;
    margin-top: 4px;
  }
  
  .category-title {
    font-size: 16px;
    margin-bottom: 16px;
    gap: 6px;
  }
  
  .stat-label {
    font-size: 11px;
    margin-bottom: 5px;
    letter-spacing: 0.5px;
  }
  
  .stat-value {
    font-size: 14px;
    line-height: 1.2;
    font-weight: 700;
  }
  
  .stat-value.small {
    font-size: 13px;
  }
  
  .stat-value.price {
    font-size: 16px;
  }
  
  /* Riduci gli effetti animati per prestazioni migliori */
  .floating-element, .particle {
    display: none;
  }
  
  .stat-card::before {
    display: none;
  }
  
  .stat-card:hover {
    transform: translateY(-2px) scale(1.01);
  }
}

/* Landscape mobile */
@media (max-width: 768px) and (orientation: landscape) and (max-height: 500px) {
  .modal-container {
    max-height: 92vh;
  }
  
  .moto-image-section {
    height: 200px;
  }
  
  .modal-header {
    padding: 16px 24px;
  }
  
  .modal-header h2 {
    font-size: 20px;
  }
  
  .stats-sections {
    padding: 20px 24px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
  }
  
  .stat-card {
    padding: 14px;
  }
  
  .category-title {
    font-size: 18px;
    margin-bottom: 15px;
  }
  
  .stats-category {
    margin-bottom: 25px;
  }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .modal-header h2,
  .category-title,
  .stat-value {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

/* Ottimizzazioni per touch devices */
@media (hover: none) and (pointer: coarse) {
  .stat-card:hover {
    transform: none;
  }
  
  .stat-card:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
  
  .close-btn:hover {
    transform: none;
  }
  
  .close-btn:active {
    transform: scale(0.95);
  }
}
</style>