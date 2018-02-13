<template lang="html">
  <div class="comment">
    <h2>评论</h2>
    <div id="gitalk-container"></div>
  </div>
</template>

<script type="text/babel">
export default {
  name: "tean-comment",

  data() {
    return {
    }
  },

  mounted() {
    require ('gitalk/dist/gitalk.css');
    const Gitalk = require('gitalk');

    const gitalk = new Gitalk({
      clientID: '1918f30b0e5955c3895d',
      clientSecret: 'aafcf204fa93defdde2bb9cabbb31faddbccda4a',
      repo: 'TeanBlog',
      owner: 'TeanLee',
      admin: ['TeanLee', 'HuangXiZhou'],
      distractionFreeMode: false,
      pagerDirection: 'last'
    })

    gitalk.render('gitalk-container')
  }
}
</script>

<style lang="less">
@import './comment.less';
</style>