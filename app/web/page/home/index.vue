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
  </div>
</template>

<script type="text/babel">
  const _this = this;

  export default {
    name: 'tean-home',

    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.routerLink(() => {
          setTimeout(() => {
            vm.$bar.finish();
          }, 500)
        })
      })
    },

    data() {
      return {
        $bar: this.$bar
      }
    },

    methods: {
      routerLink() {
        this.$bar.start()
      }
    }
  }
</script>

<style lang="less" scoped>
@import './index.less';
</style>