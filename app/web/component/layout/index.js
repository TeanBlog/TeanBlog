const content = '<div id="app"><div slot="main"><slot></slot></div></div>';

const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>{{title}}</title>
  <meta name="keywords" :content="keywords">
  <meta name="description" :content="description">
  <meta http-equiv="content-type" content="text/html;charset=utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
</head>
<body :class="baseClass">
  <div id="app">${content}</div>
</body>
</html>`;

export default {
  name: 'Layout',
  props: [ 'title', 'description', 'keywords' ],
  components: {
  },
  computed: {
    vTitle() {
      return this.$root.title || this.title || 'TeanBlog';
    },
    vKeywords() {
      return this.$root.keywords || this.keywords || 'TeanBlog';
    },
    vDescription() {
      return this.$root.description || this.description || 'TeanBlog';
    },
    baseClass() {
      return this.$root.baseClass;
    }
  },
  template: EASY_ENV_IS_NODE ? template : content
};