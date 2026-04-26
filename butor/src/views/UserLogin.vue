<script>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

function onSubmit() {
  // Replace with actual auth request
  alert(`Bejelentkezés próbálkozás:\nFelhasználónév: ${username.value}`);
  // On success, navigate to dashboard etc.
}

function goToRegister() {
  // router.push('/user-register');
  alert('Navigálás a regisztrációhoz');
}
</script>

<template>
  <div class="container min-vh-100 d-flex flex-column align-items-center justify-content-center">
    <h1 class="mb-4">Felhasználói bejelentkezés</h1>

    <form @submit.prevent="onSubmit" class="w-50">
      <div class="mb-3">
        <label for="username" class="form-label">Felhasználónév</label>
        <input
            type="text"
            id="username"
            v-model="username"
            class="form-control"
            placeholder="Felhasználónév"
            required
        />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Jelszó</label>
        <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            placeholder="Jelszó"
            required
        />
      </div>

      <button type="submit" class="btn btn-primary w-100 py-2">
        Bejelentkezés
      </button>
    </form>
    <router-link to="/register">
    <p class="mt-3">
      Nincs fiókod? <a href="#" @click.prevent="goToRegister">Regisztráció</a>
    </p>
    </router-link>
  </div>
</template>



<style scoped>

</style>