<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <nuxt-link class="navbar-brand" to="/">My Library</nuxt-link>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <template v-if="!authenticated">
            <li>
              <nuxt-link :to="{ name: 'auth-signin' }">
                Sign in
              </nuxt-link>
            </li>
            <li>
              <form class="navbar-form navbar-right" role="search">
                <nuxt-link :to="{ name: 'auth-signup' }" class="btn btn-primary" tag="button">
                  Sign up
                </nuxt-link>
              </form>
            </li>
          </template>
          <template v-if="authenticated">
            <li><nuxt-link :to="{ name: 'dashboard' }" href="#">Dashboard</nuxt-link></li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="true">
                {{ user.name }}
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#" @click.prevent="logout">Logout</a></li>
              </ul>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    methods: {
      logout () {
        this.$auth.logout();
      }
    }
  }
</script>
