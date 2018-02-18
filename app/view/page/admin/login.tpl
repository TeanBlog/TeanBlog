{% import "../../layout/admin/meta.tpl" as metaTemp %}

<!DOCTYPE html>
<html lang="en">
<head>
  {{ metaTemp.value("TeanBlog | 登录", "Blog, TeanBlog", "A minimalist style blog based on Egg.js") }}
</head>
<body>
  <div class="container">
    <form class="form-login">
      <img class="form-login__logo" src="/public/img/logo-black.png" alt="teanblog-logo">
      <label for="email" class="sr-only">邮箱地址</label>
      <input type="email" id="email" class="form-control" placeholder="邮箱地址" required="" autofocus="">
      <label for="password" class="sr-only">密码</label>
      <input type="password" id="password" class="form-control" placeholder="密码" required="">
      <div class="form-login__checkbox">
        <label>
          <input type="checkbox" value="remember-me"> 记住我
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
    </form>
  </div>
  {% include "../../layout/script.tpl" %}
</body>
</html>