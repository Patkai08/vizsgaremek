<script>
import { fetchProductsByCategory } from '@/api/mockApi.js'
import { addToCart } from '@/stores/cart.js'

export default {
  name: "CategoryView",
  props: {
    category: String
  },
  data() {
    return {
      products: [],
      loading: true,
      categoryNames: {
        nappali: "Nappali bútorok",
        konyha: "Konyha bútorok",
        haloszoba: "Hálószoba bútorok"
      }
    }
  },
  async mounted() {
    await this.loadProducts()
  },
  beforeRouteUpdate(to, from, next) {
    this.category = to.params.category || to.props.category
    this.loadProducts()
    next()
  },
  watch: {
    category() {
      this.loadProducts()
    }
  },
  methods: {
    async loadProducts() {
      this.loading = true
      this.products = await fetchProductsByCategory(this.category)
      this.loading = false
    },
    addProductToCart(product) {
      addToCart(product)
      // Kis visszajelzés
      alert(`${product.name} hozzáadva a kosárhoz!`)
    }
  }
}
</script>

<template>
  <div class="category-page">
    <h1 class="category-title">{{ categoryNames[category] }}</h1>

    <div v-if="loading" class="loading">Betöltés...</div>

    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img
            :src="product.image"
            :alt="product.name"
            class="product-image"
        />
        <h3 class="product-name">{{ product.name }}</h3>
        <div class="price">{{ product.price.toLocaleString('hu-HU') }} Ft</div>

        <div class="button-group">
          <router-link :to="`/product/${product.id}`" class="btn details-btn">
            Részletek
          </router-link>
          <button @click="addProductToCart(product)" class="btn add-to-cart-btn">
            🛒 Kosárba
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-page {
  padding: 30px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.category-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #1e2937;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  padding-bottom: 15px;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.product-name {
  font-size: 1.35rem;
  margin: 15px 15px 8px;
  color: #1e2937;
  text-align: center;
}

.price {
  font-size: 1.75rem;
  font-weight: bold;
  color: #16a085;
  text-align: center;
  margin-bottom: 15px;
}

.button-group {
  display: flex;
  gap: 10px;
  padding: 0 15px;
  justify-content: center;
}

.btn {
  flex: 1;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}

.details-btn {
  background: #3b82f6;
  color: white;
}

.details-btn:hover {
  background: #2563eb;
}

.add-to-cart-btn {
  background: #27ae60;
  color: white;
}

.add-to-cart-btn:hover {
  background: #219653;
}

.loading {
  text-align: center;
  font-size: 1.3rem;
  margin: 80px 0;
}
</style>