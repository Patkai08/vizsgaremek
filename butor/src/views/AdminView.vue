<script>
export default {
  methods: {
    goHome(){
      this.$router.push("/")
    },
    logout(){
      localStorage.removeItem("role")
      this.$router.push("/login")
    }
  }
}
</script>
<template>
  <div>
    <h1>Admin felület</h1>
    <p>Üdvözöl az admin panel!</p>
    <h3>Admin műveletek</h3>
    <ul>
      <li>Felhasználók kezelése</li>
      <li>Termékek kezelése</li>
      <li>Rendelések megtekintése</li>
    </ul>
    <br>
    <button @click="goHome">Vissza a főoldalra</button>
    <button @click="logout">Kijelentkezés</button>
  </div>
</template>

<style>

</style>