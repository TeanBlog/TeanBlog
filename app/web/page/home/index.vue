<template lang="html">
  <Layout
    title="TeanBlog"
    description="TeanBlog"
    keywords="blog, vue, webpack, server side render, egg">
    <h1 slot="banner-title">主页</h1>
    <small slot="banner-title">主页副标题</small>
    <div class="page-content">
      <h2>管理</h2>
      <section class="list">
        <h1>
          <a href="#">休假制度</a>
        </h1>
      </section>
    </div>
  </Layout>
</template>

<script type="text/babel">
  export default {
    name: 'tean-home',

    data() {
      return {
      }
    },

    // beforeRouteEnter(to, from, next) {
    //   next(vm => {
    //     vm.$bar.start();
    //     setTimeout(() => {
    //       vm.$bar.finish();
    //     }, 500)
    //   })
    // },

    // data() {
    //   return {
    //     $bar: this.$bar
    //   }
    // },
  }
</script>

<style lang="less" scoped>
@import './index.less';
</style>