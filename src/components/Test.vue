<template>
  <!--<div>-->
    <!--<div>组件传值</div>-->
    <!--<h2>父组件</h2>-->
    <!--<child :message="name" :width="left"></child>-->
  <!--</div>-->
  <div>
    <div>我是父组件</div>
    {{ msg }}
    <child @fromChild="receiveChild" :style="{ position: relative, left: width }"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  data() {
    return {
      width: ''
      // name:'小张',
      // left: '300px'
    }
  },
  components: {
    'child': child
  },
  methods:{
    receiveChild(e){
      console.log(e);
      this.width= e;
    }
  }

}
</script>

<style scoped>
/*a { position: re}*/
</style>