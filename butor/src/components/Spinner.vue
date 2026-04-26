<script>
export default {
  name: "Spinner",
  props:{
    loading: {type: Boolean, required: true, default: false}
  }
}
</script>

<template>
  <div v-if="loading" class="alert alert-info">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<style scoped>

</style>