<script>
import { ref } from 'vue';
import axios from 'axios';

const email = ref('');
const username = ref('');
const password = ref('');
const confirmPassword = ref('');

async function onSubmit() {
  if (password.value !== confirmPassword.value) {
    alert('A jelszavak nem egyeznek!');
    return;
  }

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/register', {
      email: email.value,
      username: username.value,
      password: password.value,
      password_confirmation: confirmPassword.value
    });

    alert(response.data.message);
    goToLogin();
  } catch (error) {
    console.log(error.response?.data);
    alert('Hiba történt a regisztráció során!');
  }
}

function goToLogin() {
  // router.push('/user-login');
  alert('Navigálás a felhasználói bejelentkezéshez');
}
</script>

<template>
  <div class="container min-vh-100 d-flex flex-column align-items-center justify-content-center">
    <h1 class="mb-4">Felhasználói regisztráció</h1>

    <form @submit.prevent="onSubmit" class="w-50">
      <div class="mb-3">
        <label for="email" class="form-label">E‑mail cím</label>
        <input
            type="email"
            id="email"
            v-model="email"
            class="form-control"
            placeholder="példa@domain.hu"
            required
        />
      </div>

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
            minlength="6"
        />
      </div>

      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Jelszó megerősítése</label>
        <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            class="form-control"
            placeholder="Jelszó ismét"
            required
        />
      </div>

      <button type="submit" class="btn btn-success w-100 py-2">
        Regisztráció
      </button>
    </form>
    <router-link to="/login">
    <p class="mt-3">
      Már van fiók? <a href="#" @click.prevent="goToLogin">Belépés</a>
    </p>
    </router-link>
  </div>
</template>

<style scoped>

</style>