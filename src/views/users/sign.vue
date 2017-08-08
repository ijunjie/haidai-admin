<template>
  <div class="user-container">
    <div class="admin-title">注册海带后台</div>
    <div class="admin-desc">注册账号</div>
    <div class="form-container">
      <div class="form-label">
        <input @keydown="changeValue" type="text" placeholder="用户名" v-model="username">
      </div>
      <div class="form-label">
        <input v-model="password" type="password" placeholder="密码">
      </div>
      <div class="submit">
        <button class="login" @click="login" :disabled="disabled">注册账号</button>
      </div>
      <p class="forget-pwd sign-up-desc">已有有账号？</p>
      <div class="submit">
        <button class="sign login" @click="goLogin">去登陆</button>
      </div>
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
    computed: {
      disabled () {
        return this.username === '' || this.password === ''
      }
    },
    methods: {
      goLogin () {
        this.show = false
        this.$router.push({path: '/login'})
      },
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
<style lang="less" type="text/less">
  @import "../../style/index";
  .user-container{
    margin: 0 auto;
    width: 330px;
    text-align: center;
    .admin-title{
      font-size: @ft-20;
      font-weight: bold;
      margin: 100px 0 30px 0;
    }
    .admin-desc{
      font-size: @ft-14;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .form-container{
      width: 330px;
      .form-label{
        border: 1px solid @border-color;
        padding: 5px 20px;
        background: @white;
        border-top: none;
        input{
          border: none;
          outline: none;
          width: 100%;
          height: 34px;
        }
      }
      .form-label:first-child{
        border: 1px solid @border-color;
      }
      .login{
        width: 100%;
        height: 45px;
        margin-top: 20px;
        background: @primary-color;
        color: @white;
        outline: none;
        font-size: @ft-14;
        border: none;
        cursor: pointer;
      }
      .login:disabled{
        cursor: not-allowed;
        opacity: 0.5;
      }
      .forget-pwd{
        margin: 15px;
        font-size: @ft-14;
      }
      .sign-up-desc{
        margin: 30px 0 0;
        color: #58666e;
        font-size: @ft-13;
      }
      .sign{
        background: @white;
        color: @black;
        border: 1px solid @border-color;
      }
    }
  }
</style>
