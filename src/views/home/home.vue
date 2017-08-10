<template>
  <div class="home">
    {{username}} is login
  </div>
</template>

<script>
  import api from '../../api/index'
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        username: ''
      }
    },
    mounted () {
      api.getUserInfo().then(res => {
        if (res.data.code) {
          this.$router.push({path: '/login'})
        } else {
          this.username = res.data.data.username
        }
      })
    }
  }
</script>
