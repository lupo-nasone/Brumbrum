// Sistema di colori dinamico per i marchi di moto
export const brandThemes = {
  ducati: {
    primary: '#DC143C',     // Rosso Ducati
    secondary: '#B71C1C',   // Rosso scuro
    accent: '#FF1744',      // Rosso accento
    gradient: 'linear-gradient(135deg, #DC143C, #B71C1C, #8B0000)',
    glow: 'rgba(220, 20, 60, 0.3)',
    shadow: 'rgba(220, 20, 60, 0.2)',
    light: 'rgba(220, 20, 60, 0.1)',
    name: 'Ducati'
  },
  yamaha: {
    primary: '#0066CC',     // Blu Yamaha
    secondary: '#003D7A',   // Blu scuro
    accent: '#1976D2',      // Blu accento
    gradient: 'linear-gradient(135deg, #0066CC, #003D7A, #001F3F)',
    glow: 'rgba(0, 102, 204, 0.3)',
    shadow: 'rgba(0, 102, 204, 0.2)',
    light: 'rgba(0, 102, 204, 0.1)',
    name: 'Yamaha'
  },
  kawasaki: {
    primary: '#00B04F',     // Verde Kawasaki
    secondary: '#2E7D32',   // Verde scuro
    accent: '#4CAF50',      // Verde accento
    gradient: 'linear-gradient(135deg, #00B04F, #2E7D32, #1B5E20)',
    glow: 'rgba(0, 176, 79, 0.3)',
    shadow: 'rgba(0, 176, 79, 0.2)',
    light: 'rgba(0, 176, 79, 0.1)',
    name: 'Kawasaki'
  },
  keeway: {
    primary: '#FF6F00',     // Arancione Keeway
    secondary: '#E65100',   // Arancione scuro
    accent: '#FF9800',      // Arancione accento
    gradient: 'linear-gradient(135deg, #FF6F00, #E65100, #BF360C)',
    glow: 'rgba(255, 111, 0, 0.3)',
    shadow: 'rgba(255, 111, 0, 0.2)',
    light: 'rgba(255, 111, 0, 0.1)',
    name: 'Keeway'
  },
  wottan: {
    primary: '#7B1FA2',     // Viola Wottan
    secondary: '#4A148C',   // Viola scuro
    accent: '#9C27B0',      // Viola accento
    gradient: 'linear-gradient(135deg, #7B1FA2, #4A148C, #2D1B69)',
    glow: 'rgba(123, 31, 162, 0.3)',
    shadow: 'rgba(123, 31, 162, 0.2)',
    light: 'rgba(123, 31, 162, 0.1)',
    name: 'Wottan'
  }
};

// Funzione per ottenere il tema di un marchio
export function getBrandTheme(brandName) {
  const brand = brandName.toLowerCase();
  return brandThemes[brand] || brandThemes.kawasaki; // Default verde se marchio non trovato
}

// CSS Variables per essere usate nei componenti
export function setBrandCSSVariables(brandName) {
  const theme = getBrandTheme(brandName);
  const root = document.documentElement;
  
  root.style.setProperty('--brand-primary', theme.primary);
  root.style.setProperty('--brand-secondary', theme.secondary);
  root.style.setProperty('--brand-accent', theme.accent);
  root.style.setProperty('--brand-gradient', theme.gradient);
  root.style.setProperty('--brand-glow', theme.glow);
  root.style.setProperty('--brand-shadow', theme.shadow);
  root.style.setProperty('--brand-light', theme.light);
}

// Animazioni dinamiche basate sul marchio
export const brandAnimations = {
  ducati: {
    duration: '0.6s',
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Bounce aggressivo
    intensity: 'high'
  },
  yamaha: {
    duration: '0.4s', 
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Smooth
    intensity: 'medium'
  },
  kawasaki: {
    duration: '0.5s',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)', // Standard
    intensity: 'medium'
  },
  keeway: {
    duration: '0.3s',
    easing: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)', // Quick
    intensity: 'low'
  },
  wottan: {
    duration: '0.8s',
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Smooth bounce
    intensity: 'high'
  }
};