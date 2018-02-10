<template lang="html">
  <div>
    <tean-header></tean-header>
    <main class="content" role="main">
      <article>
        <header class="banner">
          <slot name="banner"></slot>
        </header>
        <div slot="content">
          <slot name="main"></slot>
        </div>
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
