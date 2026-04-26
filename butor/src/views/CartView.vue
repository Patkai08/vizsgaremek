<script>
import { cartStore, removeFromCart } from '@/stores/cart.js'

export default {
  name: "CartView",
  computed: {
    cartItems() {
      return cartStore.items
    },
    totalPrice() {
      return cartStore.items.reduce((sum, item) => {
        return sum + item.price * item.quantity
      }, 0)
    }
  },
  methods: {
    removeItem(id) {
      removeFromCart(id)
    },
    increaseQuantity(id) {
      const item = cartStore.items.find(i => i.id === id)
      if (item) item.quantity++
    },
    decreaseQuantity(id) {
      const item = cartStore.items.find(i => i.id === id)
      if (item && item.quantity > 1) {
        item.quantity--
      } else if (item) {
        removeFromCart(id)
      }
    }
  }
}
</script>

<template>
  <div class="cart-page">
    <h1 class="text-center mb-4">Kosár</h1>

    <div v-if="cartItems.length === 0" class="empty-cart">
      <h3>A kosár üres</h3>
      <p>Nincs még termék a kosaradban.</p>
      <router-link to="/nappali" class="btn btn-primary">
        Vásárlás indítása
      </router-link>
    </div>

    <div v-else>
      <div class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" class="cart-image" />

          <div class="cart-details">
            <h5>{{ item.name }}</h5>
            <p class="price">{{ item.price.toLocaleString('hu-HU') }} Ft</p>
          </div>

          <div class="quantity-control">
            <button @click="decreaseQuantity(item.id)" class="qty-btn">-</button>
            <span class="quantity">{{ item.quantity }}</span>
            <button @click="increaseQuantity(item.id)" class="qty-btn">+</button>
          </div>

          <div class="item-total">
            {{ (item.price * item.quantity).toLocaleString('hu-HU') }} Ft
          </div>

          <button @click="removeItem(item.id)" class="remove-btn">
            ✕
          </button>
        </div>
      </div>

      <!-- Összesen -->
      <div class="cart-summary">
        <h4>Végösszeg: <strong>{{ totalPrice.toLocaleString('hu-HU') }} Ft</strong></h4>
        <router-link to="/checkout" class="btn btn-success btn-lg w-100 mt-3">
          Tovább a fizetéshez →
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.cart-item {
  display: grid;
  grid-template-columns: 120px 2fr 1fr 1fr 50px;
  gap: 15px;
  align-items: center;
  background: white;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.cart-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.cart-details h5 {
  margin: 0 0 5px 0;
}

.price {
  color: #16a085;
  font-weight: bold;
  margin: 0;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-btn {
  width: 32px;
  height: 32px;
  border: 1px solid #ccc;
  background: white;
  border-radius: 6px;
  cursor: pointer;
}

.quantity {
  font-size: 1.1rem;
  font-weight: bold;
  min-width: 25px;
  text-align: center;
}

.item-total {
  font-weight: bold;
  color: #2c3e50;
  text-align: right;
}

.remove-btn {
  background: #e74c3c;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
}

.cart-summary {
  margin-top: 30px;
  text-align: right;
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.empty-cart {
  text-align: center;
  padding: 60px 20px;
  color: #64748b;
}

.empty-cart h3 {
  margin-bottom: 15px;
}
</style>