<template>
  <div class="login-area">
    <div class="container-fluid">
    <div class="row justify-content-md-center">
      <div class="card login-box">
      <div class="card-body">
        <div class="logo text-center mb-2">
          <img class="img-fluid" src="/logo.svg" alt="Flab POS" width="150">
        </div>
        <div class="form-group">
          <label class="label-text">Email</label>
          <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
          <small v-if="errors.email"  class="form-text text-muted">{{errors.email[0]}}</small>
        </div>
        <div class="form-group">
          <label class="label-text">Password</label>
          <input type="password" class="form-control" placeholder="Password">
          <small v-if="errors.password"  class="form-text text-muted">{{errors.password[0]}}</small>
        </div>
        <button type="submit" class="btn btn-primary btn-sm float-right" @click="login">Login</button>
      </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Login'
    }
  },
  data() {
    return {
      errors: {}
    }
  },

  methods: {
    login() {
      this.$router.push({ path: '/dashboard' });
    }
  },
}
</script>

<style scoped>
.login-area {
  height: 100vh;
  background: #e6e6e6;
}
.login-box {
  margin-top: 10%;
}
.label-text {
  color: #3385ff;
  font-weight: bold;
}
.form-control {
  border-color: #3385ff;
}
.card-body{
  width: 330px;
}
</style>
