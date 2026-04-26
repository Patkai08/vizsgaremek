<script>
import { fetchProductById } from '@/api/mockApi.js'
import { addToCart } from '@/stores/cart.js'

export default {
  name: "ProductView",
  data() {
    return {
      product: null,
      loading: true
    }
  },
  async mounted() {
    const id = this.$route.params.id
    this.product = await fetchProductById(id)
    this.loading = false
  },
  methods: {
    handleAddToCart() {
      if (this.product) {
        addToCart(this.product)
        // Opcionális: szép értesítés
        alert(`${this.product.name} sikeresen hozzáadva a kosárhoz!`)
      }
    }
  }
}
</script>

<template>
  <div class="product-detail-page">
    <div v-if="loading" class="loading">Betöltés...</div>

    <div v-else-if="product" class="product-detail">
      <router-link
          :to="`/${product.category}`"
          class="back-btn">
        ← Vissza
      </router-link>

      <div class="product-content">
        <img
            :src="product.image"
            :alt="product.name"
            class="product-main-image"
        />

        <h1>{{ product.name }}</h1>
        <div class="price">{{ product.price.toLocaleString('hu-HU') }} Ft</div>

        <div class="info-grid">
          <div class="info-item"><strong>Méret:</strong> {{ product.dimensions }}</div>
          <div class="info-item"><strong>Anyag:</strong> {{ product.material }}</div>
          <div class="info-item"><strong>Szín:</strong> {{ product.color }}</div>
        </div>

        <div class="description">
          <h2>Leírás</h2>
          <p>{{ product.description }}</p>
        </div>

        <button @click="handleAddToCart" class="add-to-cart-btn">
          🛒 Kosárba teszem
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ugyanaz a stílus mint korábban */
.product-detail-page { padding: 40px 20px; max-width: 1000px; margin: 0 auto; }
.back-btn { color: #3498db; margin-bottom: 20px; display: inline-block; }
.product-main-image { width: 100%; max-height: 480px; object-fit: cover; border-radius: 12px; margin-bottom: 25px; }
.price { font-size: 2.4rem; font-weight: bold; color: #16a085; margin: 15px 0 25px; }
.info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; background: #f8f9fa; padding: 20px; border-radius: 10px; }
.add-to-cart-btn {
  padding: 15px 40px; font-size: 1.2rem; background: #27ae60; color: white;
  border: none; border-radius: 8px; cursor: pointer; font-weight: bold;
}
.add-to-cart-btn:hover { background: #219653; }
</style>