<template>
  <!--<div>-->
    <!--<div :style="{ left: width }">我是子组件的：{{ message }}</div>-->
  <!--</div>-->
  <div>
    <div style="text-align: left;">我是子组件<a @click="changeIsCollapse">点击我向父组件传值</a></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      isShow:true,
      left: '300px'
    }
  },
  mounted(){},
  methods: {
    changeIsCollapse(){
      this.$emit('fromChild',this.left)
    }
  },
  // props: ['type',"message","width"]  // 父传子
}
</script>

<style scoped>
div { position: relative;  }
</style>