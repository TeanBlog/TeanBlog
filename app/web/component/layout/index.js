import MainLayout from './main';

const content = `<div id="app">
  <main-layout>
    <div slot="banner">
      <slot name="banner-title">
        <h1 slot="banner-title">{{vBannerTitle}}</h1>
        <small slot="banner-title">{{vBannerTitle}}副标题</small>
      </slot>
    </div>
    <div slot="main">
      <slot></slot>
    </div>
  </main-layout>
</div>`;

const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>{{vTitle}}</title>
  <meta name="keywords" :content="vKeywords">
  <meta name="description" :content="vDescription">
  <meta http-equiv="content-type" content="text/html;charset=utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body class="js-system--apple">
  <div id="app">${content}</div>
</body>
</html>`;

export default {
  name: 'Layout',

  props: [ 'title', 'description', 'keywords' ],

  components: {
    'main-layout': MainLayout
  },

  computed: {
    vKeywords() {
      return this.$root.keywords || this.keywords;
    },
    vDescription() {
      return this.$root.description || this.description;
    },
    vTitle() {
      return this.$root.title || this.title;
    },
    vBannerTitle() {
      if (this.$route.path === '/') {
        return '主页';
      }
      if (this.$route.path === '/blog') {
        return '博客';
      }
      if (this.$route.path === '/archive') {
        return '归档';
      }
      if (this.$route.path === '/about') {
        return '关于';
      }
    }
  },

  template: EASY_ENV_IS_NODE ? template : content
};