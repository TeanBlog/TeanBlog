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
    <tean-footer></tean-footer>
  </div>
</template>

<script type="text/babel">
  import TeanHeader from './header/header';
  import TeanFooter from './footer/footer';

  export default {
    components: {
      TeanHeader,
      TeanFooter
    }
  }
</script>

<style lang="less">
@import './main.less';
</style>
