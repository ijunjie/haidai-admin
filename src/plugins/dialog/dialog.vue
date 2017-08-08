<template>
  <div class="su-dialog-container">
    <div class="su-model" v-show="show.visible"></div>
    <transition name="slide-fade">
      <div class="su-dialog__wrapper" v-show="show.visible" @click="show.visible=false">
        <div :class="['su-dialog','su-size-'+size]" @click="prevent">
          <div class="su-dialog__header">
            <span class="title">{{title}}{{show}}</span>
            <span class="close" @click="show.visible=false">×</span>
          </div>
          <div class="su-dialog__body">
            <slot name="body"></slot>
          </div>
          <div class="su-dialog__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  export default{
    name: 'SuDialog',
    props: {
      show: {
        visible: false
      },
      title: {
        type: String,
        default: '提示'
      },
      size: {
        type: String,
        default: 'middle'
      }
    },
    methods: {
      prevent (e) {
        e.stopPropagation()
      }
    },
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
<style lang="less" type="text/less">
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateY(-50px);
    opacity: 0;
  }
  .su-dialog__wrapper,.su-model{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 2017;
    .su-dialog{
      background: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,.3);
      transition:top 0.35s linear;
    }
    .su-size-middle{
      width: 640px;
      height: 550px;
    }
  }
  .su-model{
    z-index: 2016;
    opacity: 0.4;
    background: #000;
  }

</style>
