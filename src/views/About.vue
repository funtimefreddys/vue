<template>
  <div class="about-container">
    <!-- ส่วนหัว -->
    <div class="header">
      <button class="header-button toggle-btn" @click="show = !show">
        <span class="btn-icon">👁️</span>
        Toggle List
      </button>
      <button class="header-button push-btn" @click="list.push(list.length + 1)">
        <span class="btn-icon">➕</span>
        Push Number
      </button>
      <button class="header-button pop-btn" @click="list.pop()">
        <span class="btn-icon">➖</span>
        Pop Number
      </button>
      <button class="header-button reverse-btn" @click="list.reverse()">
        <span class="btn-icon">🔄</span>
        Reverse List
      </button>
    </div>

    <!-- รายการ -->
    <div class="list-container">
      <div v-if="show && list.length" class="list-wrapper">
        <h3 class="list-title">รายการตัวเลข</h3>
        <ul class="animated-list">
          <li v-for="(item, index) of list" :key="item" class="list-item" :style="{ animationDelay: index * 0.1 + 's' }">
            <span class="item-number">{{ item }}</span>
          </li>
        </ul>
      </div>
      <div v-else-if="list.length" class="message-container">
        <div class="message-box hidden">
          <span class="message-icon">🙈</span>
          <p>List is not empty, but hidden.</p>
        </div>
      </div>
      <div v-else class="message-container">
        <div class="message-box empty">
          <span class="message-icon">📭</span>
          <p>List is empty.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(true);
const list = ref([1, 2, 3]); 
</script>
<script>
export default {
  name: 'AboutPage' 
}
</script>

<style scoped>
.about-container {
  min-height: 100vh;
  background: linear-gradient(120deg, #e0e7ff 0%, #f8fafc 100%);
  font-family: 'SF Pro Display', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 24px 0 32px 0;
  box-sizing: border-box;
}

/* ส่วนหัว (ปุ่มต่างๆ) */
.header {
  position: fixed;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  max-width: 600px;
  height: auto;
  background: rgba(255,255,255,0.45);
  color: #222;
  z-index: 1000;
  padding: 18px 24px 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  box-sizing: border-box;
  border-radius: 28px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
  backdrop-filter: blur(12px);
  border: 1.5px solid rgba(255,255,255,0.18);
}

.header-button {
  font-size: 15px;
  font-weight: 600;
  padding: 12px 18px;
  border: none;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  color: #fff;
  cursor: pointer;
  border-radius: 16px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 8px rgba(31,38,135,0.10);
  backdrop-filter: blur(5px);
  letter-spacing: 0.2px;
}

.header-button:hover {
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 6px 20px rgba(31, 38, 135, 0.18);
  background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
}

.header-button:active {
  transform: translateY(0);
}

.btn-icon {
  font-size: 16px;
}

.toggle-btn:hover {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.push-btn:hover {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.pop-btn:hover {
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
}

.reverse-btn:hover {
  background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%);
}

.list-container {
  margin-top: 200px;
  padding: 32px 24px 32px 24px;
  width: 92%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(255,255,255,0.55);
  border-radius: 28px;
  font-size: 18px;
  font-weight: 500;
  box-sizing: border-box;
  box-shadow: 0 20px 40px rgba(31, 38, 135, 0.10);
  backdrop-filter: blur(12px);
  border: 1.5px solid rgba(255,255,255,0.18);
}

.list-wrapper {
  animation: fadeInUp 0.6s ease-out;
}

.list-title {
  text-align: center;
  color: #222;
  margin-bottom: 25px;
  font-size: 1.35rem;
  font-weight: 700;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.animated-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  background: rgba(255,255,255,0.85);
  margin: 12px 0;
  padding: 18px 0;
  border-radius: 18px;
  color: #333;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 4px 18px rgba(31, 38, 135, 0.10);
  transition: all 0.2s;
  animation: slideInLeft 0.5s ease-out forwards;
  opacity: 0;
  transform: translateX(-30px);
  font-size: 1.15rem;
}

.list-item:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 10px 28px rgba(31, 38, 135, 0.16);
  background: rgba(255,255,255,0.95);
}

.item-number {
  font-size: 1.35rem;
  font-weight: 700;
  color: #6a82fb;
}

.message-container {
  text-align: center;
  padding: 40px 20px;
}

.message-box {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px;
  border-radius: 22px;
  animation: fadeIn 0.6s ease-out;
  background: rgba(255,255,255,0.7);
  box-shadow: 0 2px 12px rgba(31,38,135,0.08);
  color: #333;
}

.message-box.hidden {
  background: linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%);
  color: #8b4513;
}

.message-box.empty {
  background: linear-gradient(90deg, #a8edea 0%, #fed6e3 100%);
  color: #2c5aa0;
}

.message-icon {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.message-box p {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .header {
    width: 98%;
    flex-wrap: wrap;
    padding: 18px 10px 12px 10px;
    gap: 10px;
  }
  
  .header-button {
    font-size: 13px;
    padding: 10px 10px;
    flex: 1;
    min-width: 100px;
  }
  
  .list-container {
    width: 98%;
    padding: 18px 8px 18px 8px;
  }
  
  .list-item {
    padding: 12px 0;
    font-size: 1.05rem;
  }
  
  .item-number {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .header {
    flex-direction: column;
    height: auto;
    top: 100px;
    padding: 12px 4px 8px 4px;
  }
  
  .header-button {
    width: 100%;
    justify-content: center;
  }
  
  .list-container {
    margin-top: 250px;
    padding: 10px 2px 10px 2px;
  }
}
</style>