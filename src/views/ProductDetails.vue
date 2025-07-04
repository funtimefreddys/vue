<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "ProductDetails",
  setup() {
    const route = useRoute();
    const product = ref(null);
    onMounted(() => {
      fetch(`https://fakestoreapi.com/products/${route.params.id}`)
        .then((res) => res.json())
        .then((data) => {
          product.value = data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    });
    return { product };
  }
};
</script>

<template>
  <div v-if="product" class="container">
    <div class="left-column">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="right-column">
      <div class="product-description">
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <p class="product-price">Price: {{ product.price }} $</p>
        <router-link to="/products">
          <button class="cart-btn">Back to Products</button>
        </router-link>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>Product not found or loading...</h1>
    <router-link to="/products">
      <button>Go back to the product list</button>
    </router-link>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 40px;
  align-items: flex-start;
  background: linear-gradient(120deg, #e0e7ff 0%, #f8fafc 100%);
  border-radius: 32px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
  font-family: 'SF Pro Display', 'Segoe UI', Arial, sans-serif;
  animation: fadeInUp 0.7s cubic-bezier(.39,.58,.57,1);
  margin: 40px auto 0 auto;
  max-width: 900px;
}

.left-column img {
  width: 340px;
  height: 340px;
  object-fit: contain;
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.13);
  background: #fff;
  margin-bottom: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.left-column img:hover {
  transform: scale(1.04) rotate(-2deg);
  box-shadow: 0 16px 40px 0 rgba(31, 38, 135, 0.18);
}

.right-column {
  width: 65%;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-description {
  background: rgba(255,255,255,0.7);
  border-radius: 22px;
  box-shadow: 0 2px 12px rgba(31,38,135,0.08);
  padding: 32px 28px 28px 28px;
  animation: fadeIn 0.8s cubic-bezier(.39,.58,.57,1);
}

.product-description h1 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  font-weight: 800;
  letter-spacing: 1px;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.product-description p {
  font-size: 1.15rem;
  margin-bottom: 15px;
  color: #444;
}

.product-price {
  font-weight: bold;
  color: #6a82fb;
  font-size: 1.18rem;
  margin-bottom: 18px;
}

.cart-btn {
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  border: none;
  padding: 12px 32px;
  color: white;
  border-radius: 16px;
  cursor: pointer;
  font-size: 1.08rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(31,38,135,0.10);
  letter-spacing: 0.5px;
  transition: background 0.2s, opacity 0.2s, transform 0.2s;
}
.cart-btn:hover {
  opacity: 0.85;
  background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
  transform: scale(1.04);
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeIn {
  from { opacity: 0; filter: blur(8px); }
  to { opacity: 1; filter: blur(0); }
}

@media (max-width: 900px) {
  .container {
    flex-direction: column;
    gap: 18px;
    padding: 18px 4px 18px 4px;
    max-width: 98vw;
  }
  .left-column img {
    width: 90vw;
    height: 220px;
    margin: 0 auto 10px auto;
    display: block;
  }
  .right-column {
    width: 100%;
    margin-top: 0;
  }
  .product-description {
    padding: 18px 8px 18px 8px;
  }
}
</style>
