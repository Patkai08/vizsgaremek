<script>
export default {
  methods: {
    loginUser() {
      localStorage.setItem("role", "user")
      this.$router.push("/profile")
    },
    loginAdmin() {
      localStorage.setItem("role", "admin")
      this.$router.push("/admin")
    },
    logout() {
      localStorage.removeItem("role")
      alert("Kijelentkeztél")
    }
  }
}
</script>

<template>
  <div>
    <h1>Bejelentkezés</h1>
    <p>Válassz szerepkört:</p>
    <button @click="loginUser">Belépés Userként</button>
    <button @click="loginAdmin">Belépés Adminként</button>
    <br><br>
    <button @click="logout">Kijelentkezés</button>
  </div>
</template>

<style scoped>

</style>