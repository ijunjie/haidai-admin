<template>
  <div class="user-container">
    <div class="form-label">
      <span>用户名：</span><input @keydown="changeValue" v-model="username">
    </div>
    <div class="form-label">
      <span>密码：</span><input v-model="password">
    </div>
    <div class="submit">
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
  import api from '../../api/index'
  export default{
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      changeValue (e) {
        if (e.keyCode < 48 || e.keyCode > 57) {
          e.returnValue = false
        }
      },
      login () {
        api.login({
          username: this.username,
          password: this.password
        }).then(res => {
          if (!res.data.code) {
            this.$router.push({path: '/'})
          }
        })
      }
    },
    mounted () {
      api.getShopDetail()
    }
  }
</script>
