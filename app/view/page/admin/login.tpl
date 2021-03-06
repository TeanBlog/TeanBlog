{% import "../../layout/admin/meta.tpl" as metaTemp %}
{% import "../../layout/admin/script.tpl" as scriptImport %}

<!DOCTYPE html>
<html lang="zh-cn">
<head>
  {{ metaTemp.value(
        resourceData.config._name + " | 登录",
        "Blog, TeanBlog",
        resourceData.config._desc)
  }}
  <link rel="stylesheet" href="/public/css/admin/login.css">
</head>
<body>
  <div class="container">
    <form id="login-form" class="form-login" novalidate>
      <img class="form-login__logo" src="/public/images/logo-black.png" alt="teanblog-logo">
      <label for="email" class="sr-only">邮箱地址</label>
      <input type="email" id="email" class="form-control" placeholder="邮箱地址">
      <label for="password" class="sr-only">密码</label>
      <input type="password" id="password" class="form-control" placeholder="密码">
      <div class="form-login__checkbox">
        <label>
          <input type="checkbox" id="rememberMe"> 记住我
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block">登录</button>
    </form>
  </div>
  <div class="alert alert-danger alert-top" role="alert"></div>
  <div class="alert alert-info alert-top" role="alert"></div>
  <div class="alert alert-warning alert-top" role="alert"></div>
  <div class="alert alert-success alert-top" role="alert"></div>
  {% include "../../layout/script.tpl" %}
  {{ scriptImport.import("login") }}
</body>
</html>