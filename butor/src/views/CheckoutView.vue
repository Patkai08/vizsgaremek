<script>
import axios from 'axios'
import { cartStore, removeFromCart } from '@/stores/cart.js'

export default {
  name: "CheckoutView",
  data() {
    return {
      form: {
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        paymentMethod: 'card'
      },
      submitted: false,
      loading: false,
      errorMessage: ''
    }
  },
  computed: {
    cartItems() {
      return cartStore.items
    },
    totalPrice() {
      return cartStore.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }
  },
  methods: {
    removeItem(id) {
      removeFromCart(id)
    },

    async submitOrder() {
      this.errorMessage = ''

      if (!this.form.name || !this.form.email || !this.form.address || !this.form.city || !this.form.zip) {
        this.errorMessage = 'Kérlek tölts ki minden kötelező mezőt!'
        return
      }

      if (this.cartItems.length === 0) {
        this.errorMessage = 'A kosár üres!'
        return
      }

      const orderData = {
        name: this.form.name,
        email: this.form.email,
        address: this.form.address,
        city: this.form.city,
        zip: this.form.zip,
        payment_method: this.form.paymentMethod,
        total_price: this.totalPrice,
        items: this.cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        }))
      }

      try {
        this.loading = true

        const response = await axios.post('http://127.0.0.1:8000/api/orders', orderData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        console.log('Sikeres mentés:', response.data)

        this.submitted = true
        cartStore.items = []

        setTimeout(() => {
          this.$router.push('/nappali')
        }, 800)

      } catch (error) {
        console.error('Hiba mentés közben:', error.response?.data || error.message)

        if (error.response?.data?.message) {
          this.errorMessage = error.response.data.message
        } else {
          this.errorMessage = 'Nem sikerült elmenteni a rendelést.'
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<template>
  <div class="checkout-page">
    <h1 class="text-center mb-4">Fizetés</h1>

    <div class="row">
      <!-- Kosár összefoglaló -->
      <div class="col-lg-5">
        <div class="order-summary">
          <h4>Rendelésed</h4>
          <div v-for="item in cartItems" :key="item.id" class="summary-item">
            <div>{{ item.name }} × {{ item.quantity }}</div>
            <div>{{ (item.price * item.quantity).toLocaleString('hu-HU') }} Ft</div>
          </div>

          <hr>
          <div class="total">
            <strong>Végösszeg:</strong>
            <strong>{{ totalPrice.toLocaleString('hu-HU') }} Ft</strong>
          </div>
        </div>
      </div>

      <!-- Szállítási és fizetési adatok -->
      <div class="col-lg-7">
        <div class="checkout-form">
          <h4>Szállítási adatok</h4>

          <div class="mb-3">
            <label>Név *</label>
            <input v-model="form.name" type="text" class="form-control" required>
          </div>
          <div class="mb-3">
            <label>Email cím *</label>
            <input v-model="form.email" type="email" class="form-control" required>
          </div>
          <div class="mb-3">
            <label>Szállítási cím *</label>
            <input v-model="form.address" type="text" class="form-control" required>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label>Város</label>
              <input v-model="form.city" type="text" class="form-control">
            </div>
            <div class="col-md-6 mb-3">
              <label>Irányítószám</label>
              <input v-model="form.zip" type="text" class="form-control">
            </div>
          </div>

          <h4 class="mt-4">Fizetési mód</h4>
          <div class="payment-methods">
            <label>
              <input type="radio" v-model="form.paymentMethod" value="card">
              Bankkártya (Online fizetés)
            </label>
            <label>
              <input type="radio" v-model="form.paymentMethod" value="cash">
              Utánvét (Készpénz)
            </label>
          </div>

          <button @click="submitOrder" class="btn btn-success btn-lg w-100 mt-4">
            🛍️ Rendelés leadása
          </button>

          <p class="text-center text-muted mt-3 small">
            A rendelés leadásával elfogadod az <a href="#">ÁSZF</a>-et.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkout-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}

.order-summary {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  position: sticky;
  top: 20px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.total {
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.checkout-form {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.payment-methods label {
  display: block;
  margin: 12px 0;
  font-size: 1.1rem;
}

.btn-success {
  background: #27ae60;
  border: none;
}
</style>