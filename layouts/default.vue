<template>
  <div>
    <top-nav></top-nav>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import TopNav from './partials/TopNav'

  export default {
    components: {
      TopNav
    }
  }
</script>
