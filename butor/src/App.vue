<script>
import { cartStore } from './stores/cart.js'

export default {
  name: "App",
  computed: {
    totalItems() {
      return cartStore.items.reduce((sum, item) => sum + (item.quantity || 1), 0)
    }
  }
}
</script>

<template>
  <div class="d-flex flex-column min-vh-100">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <i class="bi bi-shop"></i> BútorWebshop
        </router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">

            <li class="nav-item">
              <router-link class="nav-link" to="/login">
                <i class="bi bi-door-open"></i> Belépés
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/nappali">
                <i class="bi bi-tv"></i> Nappali
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/konyha">
                <i class="bi bi-cup-hot"></i> Konyha
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/haloszoba">
                <i class="bi bi-moon"></i> Hálószoba
              </router-link>
            </li>

            <!-- Kosár link: szöveg magyar, URL angol -->
            <li class="nav-item">
              <router-link class="nav-link text-warning position-relative" to="/cart">
                <i class="bi bi-cart"></i> Kosár
                <span
                    v-if="totalItems > 0"
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {{ totalItems }}
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container-fluid flex-grow-1 py-4">
      <router-view></router-view>
    </main>

    <footer class="bg-dark text-white text-center py-4 mt-auto">
      © 2026 BútorWebshop – Minden jog fenntartva
    </footer>

  </div>
</template>

<style>
body {
  background-color: #f2f2f2;
  margin: 0;
}
</style>