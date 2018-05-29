<template>
  <p>dashboard</p>
</template>

<script>
  export default {
    middleware: 'auth',
    mounted() {
      console.log('mounted')
    }
  }
</script>
