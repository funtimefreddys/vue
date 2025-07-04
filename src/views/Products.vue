<script setup>
import { ref, onMounted } from "vue";
import MyCard from "@/views/MyCard.vue";

const items = ref([]);

onMounted(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      items.value = data;
    });
});
</script>

<template>
  <div class="products-page">
    <div class="page-header">
      <h1 class="page-title">Our Products</h1>
      <p class="page-subtitle">Discover amazing products at great prices</p>
    </div>
    <div class="grid-container">
      <MyCard
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :image="item.image"
        :price="item.price"
      />
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Products",
  components: {
    MyCard,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(json => {
        this.items = json;
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  },
};
</script>

<style scoped>
.products-page {
  min-height: 100vh;
  background: linear-gradient(120deg, #e0e7ff 0%, #f8fafc 100%);
  padding: 24px 0 32px 0;
  font-family: 'SF Pro Display', 'Segoe UI', Arial, sans-serif;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 20px 30px 20px;
  background: rgba(255,255,255,0.45);
  color: #222;
  border-radius: 28px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
  border: 1.5px solid rgba(255,255,255,0.18);
  margin-top: 20px;
  position: relative;
  backdrop-filter: blur(12px);
}

.page-title {
  font-size: 2.3rem;
  font-weight: 800;
  margin: 0 0 10px 0;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px rgba(31,38,135,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #222;
}

.page-title::before {
  content: '🛍️';
  font-size: 2.2rem;
  margin-right: 10px;
}

.page-subtitle {
  font-size: 1.08rem;
  color: #555;
  margin: 0;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 36px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 18px 40px 18px;
  transition: gap 0.3s;
}

.grid-container > * {
  /* Card style moved to MyCard.vue */
  box-shadow: none;
  background: none;
  border-radius: 0;
  padding: 0;
  min-height: unset;
  opacity: 0;
  transform: translateY(40px) scale(0.98);
  animation: cardFadeInUp 0.7s cubic-bezier(.39,.58,.57,1) forwards;
}

/* Staggered animation for cards */
.grid-container > *:nth-child(1) { animation-delay: 0.08s; }
.grid-container > *:nth-child(2) { animation-delay: 0.16s; }
.grid-container > *:nth-child(3) { animation-delay: 0.24s; }
.grid-container > *:nth-child(4) { animation-delay: 0.32s; }
.grid-container > *:nth-child(5) { animation-delay: 0.40s; }
.grid-container > *:nth-child(6) { animation-delay: 0.48s; }
.grid-container > *:nth-child(7) { animation-delay: 0.56s; }
.grid-container > *:nth-child(8) { animation-delay: 0.64s; }
.grid-container > *:nth-child(9) { animation-delay: 0.72s; }
.grid-container > *:nth-child(10) { animation-delay: 0.80s; }

.grid-container > *:hover {
  transform: translateY(-10px) scale(1.035) rotate(-1deg);
  box-shadow: 0 16px 40px 0 rgba(31, 38, 135, 0.18);
  z-index: 2;
  transition: transform 0.18s, box-shadow 0.18s;
}

@keyframes cardFadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.98);
  }
  60% {
    opacity: 1;
    transform: translateY(-8px) scale(1.01);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.grid-container h2, .grid-container h3 {
  font-size: 1.13rem;
  font-weight: 700;
  color: #222;
  margin: 0 0 10px 0;
  text-align: center;
}

.grid-container p {
  font-size: 0.99rem;
  color: #444;
  margin: 0 0 8px 0;
  text-align: center;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .grid-container {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 22px;
    padding: 10px 4px 30px 4px;
  }
  .page-header {
    padding: 30px 10px 20px 10px;
  }
}

@media (max-width: 600px) {
  .products-page {
    padding: 6px 0 10px 0;
  }
  .page-title {
    font-size: 1.2rem;
  }
  .grid-container {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 4px 0 10px 0;
  }
}
</style>
