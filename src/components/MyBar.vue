<template>
  <div class="nav-links">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: rgba(255,255,255,0.25);
  backdrop-filter: blur(12px);
  border-radius: 0 0 18px 18px;
  box-shadow: 0 4px 24px 0 rgba(31, 38, 135, 0.10);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'SF Pro Display', 'Segoe UI', Arial, sans-serif;
  border: 1.5px solid rgba(255,255,255,0.18);
}

li {
  margin: 0 2px;
}

li a {
  display: block;
  color: #1e90ff;
  font-weight: 600;
  font-size: 1.08rem;
  text-align: center;
  padding: 14px 28px;
  text-decoration: none;
  border-radius: 12px;
  margin: 4px 0;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s, transform 0.18s;
  box-shadow: 0 2px 8px rgba(31,38,135,0.06);
  background: rgba(255,255,255,0.15);
}

li a:hover, li a.router-link-exact-active {
  background: linear-gradient(90deg, #6a82fb8c 0%, #fc5c7c93 100%);
  color: #fff;
  box-shadow: 0 4px 16px rgba(31,38,135,0.13);
  transform: translateY(-2px) scale(1.04);
}

@media (max-width: 700px) {
  ul {
    flex-direction: column;
    border-radius: 0 0 18px 18px;
    padding: 8px 0;
  }
  li a {
    font-size: 1rem;
    padding: 10px 18px;
    margin: 2px 0;
  }
}
</style>

