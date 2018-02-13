import MainLayout from './main';

const content = `<div id="app">
  <main-layout>
    <div slot="banner">
      <slot name="banner-title">
        <h1 slot="banner-title">{{vTitle}}</h1>
        <small slot="banner-title">{{secTitle}}</small>
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
  <title>{{title}}</title>
  <meta name="keywords" :content="keywords">
  <meta name="description" :content="description">
  <meta http-equiv="content-type" content="text/html;charset=utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body class="js-system--apple">
  <div id="app">${content}</div>
</body>
</html>`;

export default {
  name: 'Layout',

  props: {
    title: {
      type:    String,
      default: 'TeanBlog'
    },
    secTitle: {
      type:    String,
      default: 'TeanBlog'
    },
    description: {
      type:    String,
      default: 'blog, vue, webpack, SSR, egg'
    },
    keywords: {
      type:    String,
      default: 'blog, vue, webpack, SSR, egg'
    }
  },

  components: {
    'main-layout': MainLayout
  },

  computed: {
    vTitle() {
      return this.$root.title || this.title;
    },
    vKeywords() {
      return this.$root.keywords || this.keywords;
    },
    vDescription() {
      return this.$root.description || this.description;
    },
    vSecTitle() {
      return this.$root.secTitle || this.secTitle;
    }
  },

  template: EASY_ENV_IS_NODE ? template : content
};