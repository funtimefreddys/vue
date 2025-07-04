<script setup>
import {ref} from 'vue'
const message = ref ('Hello World')
</script>
<script>
export default {
  name: 'HomePage'
}
</script>

<template>
  <div class="home-hero">
    <h1 class="hero-title">{{ message }}</h1>
  </div>
</template>
<style scoped>
.home-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #e0e7ff 0%, #f8fafc 100%);
}

.hero-title {
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-align: center;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 8px 32px rgba(31, 38, 135, 0.18), 0 2px 8px rgba(31,38,135,0.08), 0 0 32px #fc5c7d88;
  font-family: 'SF Pro Display', 'Segoe UI', Arial, sans-serif;
  margin: 0;
  animation: float-bounce 2.5s ease-in-out infinite, fadeIn 1.2s cubic-bezier(.39,.58,.57,1) 1;
  transition: transform 0.25s, background 0.25s, text-shadow 0.25s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.hero-title:hover {
  transform: scale(1.04) rotate(-2deg);
  text-shadow: 0 8px 32px #6a82fb88, 0 0 32px #fc5c7d88, 0 2px 8px #6a82fb44;
  cursor: pointer;
}

@keyframes float-bounce {
  0%, 100% { transform: translateY(0); }
  20% { transform: translateY(-12px); }
  40% { transform: translateY(0); }
  60% { transform: translateY(8px); }
  80% { transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; filter: blur(8px); }
  to { opacity: 1; filter: blur(0); }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.5rem;
  }
}
</style>

