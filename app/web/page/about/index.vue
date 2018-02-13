<template lang="html">
  <div>
    <div class="page-content">
      <h2>管理</h2>
      <section class="list">
        <h1>
          <a href="#">休假制度</a>
        </h1>
      </section>
    </div>
    <tean-comment></tean-comment>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'tean-about',

  components: {
    'tean-comment': () => import('component/comment/comment.vue')
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>