<script>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

/*function onSubmit() {
  alert(`Admin bejelentkezés:\nFelhasználónév: ${username.value}`);
}*/

function goBack() {
  alert('Vissza a főmenühez');
}
</script>

<template>
  <div class="container min-vh-100 d-flex flex-column align-items-center justify-content-center">
    <h1 class="mb-4">Admin bejelentkezés</h1>

    <form @submit.prevent="onSubmit" class="w-50">
      <div class="mb-3">
        <label for="username" class="form-label">Felhasználónév</label>
        <input
            type="text"
            id="username"
            v-model="username"
            class="form-control"
            placeholder="Admin felhasználónév"
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
            placeholder="Admin jelszó"
            required
        />
      </div>

      <button type="submit" class="btn btn-danger w-100 py-2">
        Admin bejelentkezés
      </button>
    </form>

    <p class="mt-3">
      Vissza a főmenühez <a href="#" @click.prevent="goBack">←</a>
    </p>
  </div>
</template>

<style scoped>

</style>