<template>
  <div class="su-collapse-item" :style="isCollapsed ? 'height:50px' : 'height:'+(50+height)+'px'">
    <div class="su-collapse-item__title" @click="collapse">
      <span>{{title}}</span>
      <span class="su-carousel__arrow--left" :style="isCollapsed?'transform:rotate(0)':'transform:rotate(180deg)'">∨</span>
    </div>
    <div ref="slot" class="su-carousel__body">
      <slot></slot>
    </div>

  </div>
</template>
<script>
  export default{
    name: 'SuCollapseItem',
    props: {
      title: {
        type: String,
        default: '标题'
      }
    },
    data () {
      return {
        isCollapsed: true,
        height: ''
      }
    },
    mounted () {
      this.height = this.$refs.slot.offsetHeight
    },
    methods: {
      collapse () {
        this.isCollapsed = !this.isCollapsed
      }
    }
  }
</script>
<style lang="less" type="text/less">
  .su-collapse-item{
    width: 100%;
    overflow: hidden;
    transition: height .5s ease;
    border-bottom: 1px solid #ddd;
    .su-collapse-item__title{
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      .su-carousel__arrow--left{
        float: right;
        transition:0.5s ease;
      }
    }
  }

</style>
