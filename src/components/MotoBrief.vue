<template>
  <div class="moto-stats-brief" :class="`brand-${currentBrand}`">
    <div class="animated-background"></div>
    <div class="floating-particles">
      <div v-for="i in 8" :key="i" class="particle" :style="getParticleStyle(i)"></div>
    </div>
    
    <div class="stats-grid">
      <div class="stat-item" 
           v-for="(stat, index) in formattedStats" 
           :key="stat.label"
           :style="{ animationDelay: `${index * 0.1}s` }"
           @mouseenter="onStatHover(index)"
           @mouseleave="onStatLeave(index)">
        <div class="stat-icon">{{ stat.icon }}</div>
        <h3>{{ stat.label }}</h3>
        <span class="stat-value" :ref="`statValue${index}`">{{ stat.value }}</span>
        <div class="stat-bar">
          <div class="stat-progress" :style="{ width: stat.percentage + '%' }"></div>
        </div>
      </div>
    </div>
    
    <button 
      class="show-more-btn" 
      @click="handleShowMore"
      @mouseenter="onButtonHover"
      @mouseleave="onButtonLeave"
      v-if="hasFullStats"
    >
      <div class="button-bg"></div>
      <span class="button-text">Mostra di più</span>
      <svg class="arrow-icon" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
      </svg>
      <div class="ripple-effect" ref="rippleEffect"></div>
    </button>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, inject } from 'vue'
import { getBrandTheme, setBrandCSSVariables } from '../utils/brandThemes.js'

const props = defineProps({
  stats: {
    type: Object,
    required: true
  },
  hasFullStats: {
    type: Boolean,
    default: true
  },
  currentBrand: {
    type: String,
    default: 'kawasaki'
  }
})

const emit = defineEmits(['showDetails'])
const rippleEffect = ref(null)

// Statistiche formattate con icone e percentuali
const formattedStats = computed(() => {
  const maxValues = {
    potenza: 300, // CV massimo per calcolare %
    cilindrata: 1200, // cc massimo
    peso: 250, // kg massimo
    velocitaMax: 350 // km/h massimo
  }

  return [
    {
      label: 'Cilindrata',
      value: props.stats.cilindrata,
      icon: '⚙️',
      percentage: Math.min((parseInt(props.stats.cilindrata) / maxValues.cilindrata) * 100, 100)
    },
    {
      label: 'Potenza', 
      value: props.stats.potenza,
      icon: '⚡',
      percentage: Math.min((parseInt(props.stats.potenza) / maxValues.potenza) * 100, 100)
    },
    {
      label: 'Peso',
      value: props.stats.peso,
      icon: '⚖️',
      percentage: Math.min((parseInt(props.stats.peso) / maxValues.peso) * 100, 100)
    },
    {
      label: 'Velocità Max',
      value: props.stats.velocitaMax,
      icon: '🏁',
      percentage: Math.min((parseInt(props.stats.velocitaMax) / maxValues.velocitaMax) * 100, 100)
    }
  ]
})

// Applicare il tema del marchio
onMounted(() => {
  setBrandCSSVariables(props.currentBrand)
})

// Animazioni particelle
const getParticleStyle = (index) => {
  const delay = index * 0.2
  const duration = 3 + (index % 3)
  return {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    left: `${10 + (index * 12)}%`,
    opacity: 0.1 + (index % 3) * 0.1
  }
}

// Event handlers per interazioni
const onStatHover = (index) => {
  // Animazione al hover della statistica
  const statElement = document.querySelector(`.stat-item:nth-child(${index + 1})`)
  if (statElement) {
    statElement.style.transform = 'translateY(-8px) scale(1.05) rotateY(5deg)'
    statElement.style.zIndex = '10'
  }
}

const onStatLeave = (index) => {
  const statElement = document.querySelector(`.stat-item:nth-child(${index + 1})`)
  if (statElement) {
    statElement.style.transform = 'translateY(0) scale(1) rotateY(0deg)'
    statElement.style.zIndex = '1'
  }
}

const onButtonHover = () => {
  // Effetto glow più intenso
  const button = document.querySelector('.show-more-btn')
  if (button) {
    button.style.boxShadow = `0 20px 40px var(--brand-shadow), 0 0 30px var(--brand-glow)`
  }
}

const onButtonLeave = () => {
  const button = document.querySelector('.show-more-btn')
  if (button) {
    button.style.boxShadow = `0 15px 30px var(--brand-shadow), 0 5px 15px rgba(0, 0, 0, 0.4)`
  }
}

const handleShowMore = (event) => {
  // Effetto ripple
  if (rippleEffect.value) {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    
    rippleEffect.value.style.left = `${x}px`
    rippleEffect.value.style.top = `${y}px`
    rippleEffect.value.classList.add('active')
    
    setTimeout(() => {
      rippleEffect.value.classList.remove('active')
    }, 600)
  }
  
  // Vibrazione se supportata
  if (navigator.vibrate) {
    navigator.vibrate(50)
  }
  
  emit('showDetails')
}
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

.moto-stats-brief {
  background: linear-gradient(145deg, rgba(15, 15, 23, 0.95), rgba(25, 25, 35, 0.9));
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 25px;
  color: white;
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.4),
    0 5px 15px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px) rotateX(10deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
}

.moto-stats-brief::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--brand-gradient);
  animation: shimmer 2s ease-in-out infinite;
}

.animated-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 70%, var(--brand-light) 0%, transparent 50%);
  animation: backgroundPulse 4s ease-in-out infinite;
  pointer-events: none;
}

@keyframes backgroundPulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}

.floating-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--brand-primary);
  border-radius: 50%;
  animation: float 4s ease-in-out infinite;
  box-shadow: 0 0 10px var(--brand-glow);
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0; }
  25% { opacity: 1; }
  50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
  75% { opacity: 1; }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin-bottom: 25px;
  position: relative;
  z-index: 2;
}

.stat-item {
  text-align: center;
  padding: 18px 14px;
  background: linear-gradient(135deg, rgba(30, 30, 45, 0.8), rgba(20, 20, 30, 0.6));
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  animation: statFadeIn 0.6s ease-out;
  animation-fill-mode: both;
}

@keyframes statFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--brand-light), transparent);
  transition: left 0.8s ease;
}

.stat-item:hover::before {
  left: 100%;
}

.stat-item:hover {
  background: linear-gradient(135deg, var(--brand-light), rgba(0, 0, 0, 0.4));
  border-color: var(--brand-primary);
  box-shadow: 
    0 15px 30px var(--brand-shadow),
    0 5px 15px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.stat-icon {
  font-size: 24px;
  margin-bottom: 8px;
  animation: iconBounce 2s ease-in-out infinite;
}

@keyframes iconBounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.stat-item h3 {
  margin: 0 0 10px 0;
  font-size: 13px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.stat-value {
  font-size: 20px;
  font-weight: 800;
  background: var(--brand-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  display: block;
  position: relative;
  animation: valueGlow 3s ease-in-out infinite;
  margin-bottom: 10px;
}

@keyframes valueGlow {
  0%, 100% { filter: drop-shadow(0 0 5px var(--brand-glow)); }
  50% { filter: drop-shadow(0 0 15px var(--brand-glow)); }
}

.stat-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 8px;
}

.stat-progress {
  height: 100%;
  background: var(--brand-gradient);
  border-radius: 2px;
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  animation: progressGlow 2s ease-in-out infinite;
}

@keyframes progressGlow {
  0%, 100% { box-shadow: 0 0 5px var(--brand-glow); }
  50% { box-shadow: 0 0 15px var(--brand-glow); }
}

.show-more-btn {
  width: 100%;
  padding: 16px 24px;
  background: linear-gradient(135deg, #0a0a0f, #1a1a25);
  border: 2px solid transparent;
  border-radius: 14px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  transform-style: preserve-3d;
  z-index: 2;
}

.button-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--brand-gradient);
  opacity: 0;
  transition: opacity 0.4s ease;
  border-radius: 12px;
}

.show-more-btn:hover .button-bg {
  opacity: 1;
}

.show-more-btn:hover {
  border-color: var(--brand-primary);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 
    0 15px 30px var(--brand-shadow),
    0 5px 15px rgba(0, 0, 0, 0.4);
}

.button-text,
.arrow-icon {
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.show-more-btn:hover .button-text {
  color: #000;
  font-weight: 800;
  text-shadow: none;
}

.show-more-btn:active {
  transform: translateY(-1px) scale(0.98);
}

.arrow-icon {
  width: 22px;
  height: 22px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 0 5px var(--brand-glow));
}

.show-more-btn:hover .arrow-icon {
  transform: translateX(6px) scale(1.2) rotateY(180deg);
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
  color: #000;
}

.ripple-effect {
  position: absolute;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: radial-gradient(circle, var(--brand-primary) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
  pointer-events: none;
}

.ripple-effect.active {
  width: 200px;
  height: 200px;
  opacity: 0.6;
}

/* Responsive Design - Approccio Mobile-First */

/* Tablet Grande - 1024px */
@media (max-width: 1024px) {
  .moto-stats-brief {
    padding: 24px;
    border-radius: 18px;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }
  
  .stat-item {
    padding: 18px 14px;
  }
  
  .stat-item h3 {
    font-size: 13px;
    margin-bottom: 8px;
  }
  
  .stat-value {
    font-size: 19px;
  }
  
  .show-more-btn {
    font-size: 16px;
    padding: 16px 24px;
    min-height: 54px;
  }
  
  .arrow-icon {
    width: 20px;
    height: 20px;
  }
}

/* Tablet - 768px */
@media (max-width: 768px) {
  .moto-stats-brief {
    padding: 20px;
    border-radius: 16px;
    margin: 10px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-bottom: 20px;
  }
  
  .stat-item {
    padding: 16px 12px;
    border-radius: 12px;
  }
  
  .stat-item h3 {
    font-size: 12px;
    margin-bottom: 6px;
  }
  
  .stat-value {
    font-size: 18px;
    line-height: 1.3;
  }
  
  .show-more-btn {
    font-size: 15px;
    padding: 15px 22px;
    min-height: 50px;
    border-radius: 10px;
  }
  
  .arrow-icon {
    width: 18px;
    height: 18px;
  }
  
  .particle {
    width: 4px;
    height: 4px;
  }
}

/* Mobile Grande - 480px */
@media (max-width: 480px) {
  .moto-stats-brief {
    padding: 16px;
    border-radius: 14px;
    margin: 8px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 18px;
  }
  
  .stat-item {
    padding: 14px 10px;
    border-radius: 10px;
    text-align: center;
  }
  
  .stat-item h3 {
    font-size: 11px;
    margin-bottom: 6px;
    letter-spacing: 0.8px;
  }
  
  .stat-value {
    font-size: 16px;
    line-height: 1.2;
  }
  
  .show-more-btn {
    font-size: 14px;
    padding: 14px 20px;
    min-height: 48px;
    border-radius: 8px;
    gap: 8px;
  }
  
  .arrow-icon {
    width: 16px;
    height: 16px;
  }
  
  .particle {
    width: 3px;
    height: 3px;
  }
  
  .floating-element {
    width: 6px;
    height: 6px;
  }
}

/* Mobile Piccolo - 375px */
@media (max-width: 375px) {
  .moto-stats-brief {
    padding: 14px;
    border-radius: 12px;
    margin: 6px;
  }
  
  .stats-grid {
    gap: 10px;
    margin-bottom: 16px;
  }
  
  .stat-item {
    padding: 12px 8px;
    border-radius: 8px;
  }
  
  .stat-item h3 {
    font-size: 10px;
    margin-bottom: 5px;
  }
  
  .stat-value {
    font-size: 15px;
  }
  
  .show-more-btn {
    font-size: 13px;
    padding: 12px 18px;
    min-height: 44px;
    gap: 6px;
  }
  
  .button-text {
    font-size: 13px;
  }
  
  .arrow-icon {
    width: 14px;
    height: 14px;
  }
}

/* Mobile Extra Piccolo - 320px */
@media (max-width: 320px) {
  .moto-stats-brief {
    padding: 12px;
    border-radius: 10px;
    margin: 4px;
  }
  
  .stats-grid {
    gap: 8px;
    margin-bottom: 14px;
  }
  
  .stat-item {
    padding: 10px 6px;
    border-radius: 6px;
  }
  
  .stat-item h3 {
    font-size: 9px;
    margin-bottom: 4px;
    letter-spacing: 0.5px;
  }
  
  .stat-value {
    font-size: 14px;
    font-weight: 700;
  }
  
  .show-more-btn {
    font-size: 12px;
    padding: 10px 16px;
    min-height: 40px;
    gap: 5px;
    border-radius: 6px;
  }
  
  .button-text {
    font-size: 12px;
  }
  
  .arrow-icon {
    width: 12px;
    height: 12px;
  }
  
  .particle, .floating-element {
    display: none; /* Nascondo le animazioni su schermi molto piccoli per performance */
  }
}

/* Landscape mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .moto-stats-brief {
    max-width: 90%;
    margin: 5px auto;
    padding: 16px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-bottom: 16px;
  }
  
  .stat-item {
    padding: 12px 8px;
  }
  
  .stat-item h3 {
    font-size: 10px;
  }
  
  .stat-value {
    font-size: 14px;
  }
  
  .show-more-btn {
    padding: 10px 20px;
    font-size: 13px;
  }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .stat-item, .show-more-btn {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

/* Animazione shimmer */
@keyframes shimmer {
  0%, 100% { opacity: 0.5; transform: translateX(-100%); }
  50% { opacity: 1; transform: translateX(100%); }
}
</style>