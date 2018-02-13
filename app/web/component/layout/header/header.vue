<template lang="html">
  <nav class="navigation">
    <ul>
      <li :class="currentUrl === '/' ? 'current' : ''">
        <a href="/"> 主页 </a>
      </li>
      <li :class="currentUrl === '/blog' ? 'current' : ''">
        <a href="/blog"> 博客 </a>
      </li>
      <li :class="currentUrl === '/archive' ? 'current' : ''">
        <a href="/archive"> 归档 </a>
      </li>
      <li :class="currentUrl === '/about' ? 'current' : ''">
        <a href="/about"> 关于 </a>
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
  },

  computed: {
    currentUrl() {
      return this.getUrlRelativePath() || '';
    }
  },

  methods: {
    getUrlRelativePath() {
      if (process.browser) {
        const url = document.location.toString();
        const arrUrl = url.split("//");
        let start = arrUrl[1].indexOf("/");
        let relUrl = arrUrl[1].substring(start);

        if(relUrl.indexOf('?') !== -1) {
          relUrl = relUrl.split('?')[0];
        }

        return relUrl;
      }
    }
  }
}
</script>


<style lang="less" scoped>
@import './header.less';
</style>