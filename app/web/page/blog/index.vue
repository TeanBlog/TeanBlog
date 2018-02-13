<template lang="html">
  <div>
    <h1 slot="banner-title">博客</h1>
    <small slot="banner-title">2333</small>
    <div class="page-content">
      <h2>管理</h2>
      <section class="list">
        <h1>
          <a href="#">休假制度</a>
        </h1>
      </section>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'tean-blog'
  }
</script>

<style lang="less" scoped>
@import './index.less';
</style>