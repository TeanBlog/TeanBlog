import MainLayout from './main';

const content = `<main-layout>
  </main-layout>`;

const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>TeanBlog | 后台管理</title>
  <meta http-equiv="content-type" content="text/html;charset=utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body>
  <div id="app">${content}</div>
</body>
</html>`;

export default {
  name: 'Layout',

  components: {
    'main-layout': MainLayout
  },

  template: EASY_ENV_IS_NODE ? template : content
};