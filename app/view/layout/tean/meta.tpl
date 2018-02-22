{% macro value(title, keywords, description) %}
  <meta name="keywords" content="{{ keywords }}">
  <meta name="description" content="{{ description }}">
  <meta http-equiv="content-type" content="text/html;charset=utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  <meta name="screen-orientation" content="portrait">
  <meta name="x5-orientation" content="portrait">
  <meta http-equiv="Cache-Control" content="no-siteapp">
  <meta name="author" content="Trevor, xizhouh@gmail.com">
  <meta name="robots" content="index,follow">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="#3090e4">
  <meta name="theme-color" content="#3090e4">
  <title>{{ title }}</title>
  <link rel="shortcut icon" type="image/png" href="/public/images/favicon/favicon.png">
  <link rel="stylesheet" href="/public/css/tean/app.css">
{% endmacro %}
