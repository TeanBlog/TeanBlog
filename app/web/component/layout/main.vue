<template lang="html">
  <div>
    <tean-header></tean-header>
    <main class="content" role="main">
      <article>
        <header class="banner">
          <h1> TeanBlog </h1>
          <small>万里不惜死，朝得成功</small>
        </header>
      </article>
    </main>
  </div>
</template>

<script type="text/babel">
  import TeanHeader from './header/header';

  export default {
    components: {
      TeanHeader
    }
  }
</script>

<style lang="less">
@import './main.less';
</style>
