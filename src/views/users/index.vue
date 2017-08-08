<template>
  <div id="users">
    <div class="index-container">
      <transition :name="transitionName">
        <router-view class="child-view"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'users',
    data () {
      return {
        transitionName: 'slide-right'
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
</script>
<style lang="less" type="text/less">
  .index-container{
    margin: 0 auto;
    width: 330px;
    text-align: center;
    position: relative;
  }
  .child-view {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>
