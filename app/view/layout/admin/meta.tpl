{% macro value(title, keywords, description) %}
  <meta name="keywords" content="{{ keywords }}">
  <meta name="description" content="{{ description }}">
  <meta http-equiv="content-type" content="text/html;charset=utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  <title>{{ title }}</title>
  <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="/public/css/admin/common-b5bbf2388a.css">
  <link rel="stylesheet" href="/public/css/admin/login-90f9712011.css">
{% endmacro %}
