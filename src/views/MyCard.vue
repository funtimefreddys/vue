<script>
export default {
  name: 'MyCard',
  props: {
    id: [String, Number],
    title: String,
    description: String,
    image: String,
    price: [String, Number],
  },
  methods: {
    getImageUrl(path) {
      // ถ้าเป็น URL (API) ให้ return ตรงๆ
      if (typeof path === 'string' && (path.startsWith('http://') || path.startsWith('https://'))) {
        return path;
      }
      // ถ้าเป็น local ให้ require
      try {
        return require(`@/assets/${path}`);
      } catch (e) {
        return '';
      }
    }
  }
};
</script>

<template>
  <div class="card">
    <img :src="image" :alt="title" class="card-img" />
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <p class="price">{{ price }}</p>
    <router-link :to="`/products/${id}`">
      <button class="btn">View Details</button>
    </router-link>
  </div>
</template>


<style scoped>
.card {
  background: rgba(255,255,255,0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  border-radius: 28px;
  max-width: 350px;
  margin: 18px auto;
  text-align: center;
  font-family: 'SF Pro Display', 'Segoe UI', Arial, sans-serif;
  backdrop-filter: blur(16px);
  border: 1.5px solid rgba(255,255,255,0.25);
  transition: box-shadow 0.2s, transform 0.2s;
  padding: 28px 18px 18px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card:hover {
  box-shadow: 0 16px 40px 0 rgba(31, 38, 135, 0.22);
  transform: translateY(-4px) scale(1.03);
}

.card-img {
  display: block;
  max-width: 140px;
  max-height: 140px;
  width: 100%;
  height: 140px;
  object-fit: contain;
  margin: 0 auto 18px auto;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(100,100,100,0.10);
  background: #fff;
  border: 2.5px solid rgba(255,255,255,0.7);
}

h2 {
  font-size: 1.18rem;
  font-weight: 700;
  color: #222;
  margin: 0 0 10px 0;
  text-align: center;
  letter-spacing: 0.2px;
}

p {
  font-size: 1.01rem;
  color: #444;
  margin: 0 0 8px 0;
  text-align: center;
  line-height: 1.5;
}

.price {
  color: #6c6c6c;
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px 0;
  color: #fff;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  text-align: center;
  cursor: pointer;
  width: 90%;
  font-size: 1.08rem;
  font-weight: 600;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(31,38,135,0.10);
  margin-top: 8px;
  letter-spacing: 0.5px;
  transition: background 0.2s, opacity 0.2s;
}

.card button:hover {
  opacity: 0.85;
  background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
}
</style>
