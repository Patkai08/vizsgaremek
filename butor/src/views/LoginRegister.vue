<script setup>

function goToUserLogin() {
  alert('Navigálás a felhasználói bejelentkezéshez');
}
function goToUserRegister() {
  alert('Navigálás a felhasználói regisztrációhoz');
}
function goToAdminLogin() {
  alert('Navigálás az admin bejelentkezéshez');
}
</script>

<template>
  <div class="container min-vh-100 d-flex flex-column align-items-center justify-content-center">
    <h1 class="mb-4">Belépés / Regisztráció</h1>

    <div class="row gap-3 w-50">
      <router-link to="/login">
      <button
          @click="goToUserLogin"
          class="btn btn-primary w-100 py-3"
      >
        Felhasználói bejelentkezés
      </button>
      </router-link>

      <router-link to="/register">
      <button
          @click="goToUserRegister"
          class="btn btn-success w-100 py-3"
      >

        Felhasználói regisztráció
      </button>
      </router-link>
      <router-link to="/admin">
      <button
          @click="goToAdminLogin"
          class="btn btn-warning w-100 py-3"
      >
        Admin bejelentkezés
      </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>