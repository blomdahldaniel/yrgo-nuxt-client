<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4 card box-shadow-2">
      <h3 class="no-margin-top">Join the fun</h3>
      <form action="#" @submit.prevent="submit">
        <div class="form-group" :class="{ 'has-error': errors.email }">
          <label for="inputEmail" class="control-label">Email</label>
            <input v-model="form.email" type="text" class="form-control" id="inputEmail" placeholder="b1@banan.nu">
            <span class="help-block" v-if="errors.email">{{ errors.email[0] }}</span>
        </div>

        <div class="form-group" :class="{ 'has-error': errors.name }">
          <label for="inputName" class="control-label">Name</label>
            <input v-model="form.name" type="text" class="form-control" id="inputName" placeholder="Banana Bandana">
            <span class="help-block" v-if="errors.name">{{ errors.name[0] }}</span>
        </div>
        <div class="form-group" :class="{ 'has-error': errors.password }">
          <label for="inputPassword" class="control-label ">Password</label>
            <input type="password" v-model="form.password" class="form-control" id="inputPassword" placeholder="Enter your super duper password">
            <span class="help-block" v-if="errors.password">{{ errors.password[0] }}</span>
        </div>
        <button type="submit" class="btn btn-primary pull-right">Sign me upp</button>
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
          name: '',
          password: ''
        }
      }
    },
    methods: {
      async submit () {
        await this.$axios.post('register', this.form)

        await this.$auth.login({
          data: {
            email: this.form.email,
            password: this.form.password
          }
        })

        this.$router.push({
          name: 'index'
        })
      }
    }
  }
</script>
