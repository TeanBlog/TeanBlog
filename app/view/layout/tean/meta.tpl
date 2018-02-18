{% macro value(title, keywords, description) %}
  <meta name="keywords" content="{{ keywords }}">
  <meta name="description" content="{{ description }}">
  <meta http-equiv="content-type" content="text/html;charset=utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  <title>{{ title }}</title>
  <link rel="stylesheet" href="/public/css/tean/app-b2e40bb57b.css">
{% endmacro %}
