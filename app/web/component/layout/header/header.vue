<template lang="html">
  <nav class="navigation">
    <ul>
      <li class="current">
                    <a href="#"> 主页 </a>
      </li>
      <li>
        <a href="#"> 博客 </a>
      </li>
      <li>
        <a href="#"> 归档 </a>
      </li>
      <li>
        <a href="#"> 关于 </a>
      </li>
    </ul>
  </nav>
</template>


<script>
export default {
  name: "TeanHeader",
  data() {
    return {
    }
  }
}
</script>


<style lang="less" scoped>
@import './header.less';
</style>