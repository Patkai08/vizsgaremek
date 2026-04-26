<script>
export default {
  computed: {
    featuredProducts() {
      return this.$root.featuredProducts || []
    }
  }
}
</script>

<template>
  <div class="text-center">
    <h1 class="display-4 mb-4">Üdvözlünk a BútorWebshopban!</h1>
    <p class="lead mb-5">Válassz kategóriát vagy tekintsd meg legnépszerűbb termékeinket</p>

    <div class="row g-4 mb-5">
      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body text-center p-5">
            <i class="bi bi-cup-hot display-1 text-primary mb-3"></i>
            <h3>Konyha</h3>
            <p>Modern konyhabútorok, szigetek, gépek</p>
            <router-link to="/konyha" class="btn btn-primary btn-lg">Megnézem</router-link>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body text-center p-5">
            <i class="bi bi-tv display-1 text-primary mb-3"></i>
            <h3>Nappali</h3>
            <p>Kanapék, asztalok, polcok, TV bútorok</p>
            <router-link to="/nappali" class="btn btn-primary btn-lg">Megnézem</router-link>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body text-center p-5">
            <i class="bi bi-moon display-1 text-primary mb-3"></i>
            <h3>Hálószoba</h3>
            <p>Ágyak, szekrények, komódok, matracok</p>
            <router-link to="/haloszoba" class="btn btn-primary btn-lg">Megnézem</router-link>
          </div>
        </div>
      </div>
    </div>

    <h2 class="mb-4">Népszerű termékeink</h2>
    <div class="row g-4">
      <div class="col-md-3 col-sm-6" v-for="product in featuredProducts" :key="product.id">
        <ProductCard :product="product" @add-to-cart="$root.addToCart(product)" @view-details="$root.viewProduct(product)" />
      </div>
    </div>
  </div>
</template>