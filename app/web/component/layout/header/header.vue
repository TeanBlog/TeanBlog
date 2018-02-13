<template lang="html">
  <nav class="navigation">
    <ul>
      <li>
        <router-link to="/" exact> 主页 </router-link>
      </li>
      <li>
        <router-link to="/blog" exact> 博客 </router-link>
      </li>
      <li>
        <router-link to="/archive" exact> 归档 </router-link>
      </li>
      <li>
        <router-link to="/about" exact> 关于 </router-link>
      </li>
    </ul>
  </nav>
</template>


<script type="text/babel">
export default {
  name: "tean-header",

  data() {
    return {
    }
  }
}
</script>


<style lang="less" scoped>
@import './header.less';
</style>
