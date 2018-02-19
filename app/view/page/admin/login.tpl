{% import "../../layout/admin/meta.tpl" as metaTemp %}
{% import "../../layout/admin/script.tpl" as scriptImport %}

<!DOCTYPE html>
<html lang="en">
<head>
  {{ metaTemp.value("TeanBlog | 登录", "Blog, TeanBlog", "A minimalist style blog based on Egg.js") }}
</head>
<body>
  <div class="container">
    <form id="login-form" class="form-login" novalidate>
      <img class="form-login__logo" src="/public/img/logo-black.png" alt="teanblog-logo">
      <label for="email" class="sr-only">邮箱地址</label>
      <input type="email" id="email" class="form-control" placeholder="邮箱地址">
      <label for="password" class="sr-only">密码</label>
      <input type="password" id="password" class="form-control" placeholder="密码">
      <div class="form-login__checkbox">
        <label>
          <input type="checkbox" value="remember-me"> 记住我
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" onsubmit="return false;">登录</button>
    </form>
  </div>
  <div class="alert alert-danger" data-dismiss="alert" role="alert">
    This is a primary alert—check it out!
  </div>
  {% include "../../layout/script.tpl" %}
  {{ scriptImport.import("login") }}
</body>
</html>