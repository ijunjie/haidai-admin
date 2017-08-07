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
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted () {
      api.getShopList().then(res => {
        if (!res.data.code && !res.data.data.result) {
          console.log(res.data)
          this.$router.push({path: '/login'})
        }
      }).catch(() => {
        this.$router.push({path: '/login'})
      })
    }
  }
</script>
