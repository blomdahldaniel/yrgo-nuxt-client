<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4 card box-shadow-2">
      <h3 class="no-margin-top">Login</h3>
      <form action="#" @submit.prevent="submit">
        <div class="form-group" :class="{ 'has-error': errors.email }">
          <label for="inputEmail" class="control-label">Email</label>
            <input v-model="form.email" type="text" class="form-control" id="inputEmail" placeholder="Email">
            <span class="help-block" v-if="errors.email">{{ errors.email[0] }}</span>
        </div>
        <div class="form-group" :class="{ 'has-error': errors.password }">
          <label for="inputPassword" class="control-label ">Password</label>
            <input type="password" v-model="form.password" class="form-control" id="inputPassword" placeholder="Password">
            <span class="help-block" v-if="errors.password">{{ errors.password[0] }}</span>
        </div>
        <button type="submit" class="btn btn-primary pull-right">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    middleware: 'guest',
    data () {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      async submit () {
        await this.$auth.login({
          data: this.form
        })

        this.$router.push({
          path: this.$route.query.redirect || '/books'
        })
      }
    }
  }
</script>
