{% import "../../layout/admin/meta.tpl" as metaTemp %}
{% import "../../layout/admin/header.tpl" as headerTemp %}
{% import "../../layout/admin/script.tpl" as scriptImport %}

<!DOCTYPE html>
<html lang="zh-cn">
<head>
  {{ metaTemp.value("TeanBlog | 主页管理", "Blog, TeanBlog", "A minimalist style blog based on Egg.js & Vue.js") }}
  <link rel="stylesheet" href="/public/css/admin/home.css">
</head>
<body>
  <section class="container admin-panel">
    <form class="home-item home-item-project">
      <div class="form-group">
        <h2>项目/著作展示</h2>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="名称">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="URL(http://example.com)">
      </div>
      <button type="button" class="btn btn-light">取消</button>
      <button type="button" class="btn btn-primary">保存</button>
    </form>
    <form class="home-item home-item-blogs">
      <div class="form-group">
        <h2>博客展示配置</h2>
      </div>
      <div class="btn-group mr-2" role="group" aria-label="First group">
        <button type="button" class="btn btn-secondary">-</button>
        <button type="button" class="btn btn-secondary">5</button>
        <button type="button" class="btn btn-secondary">+</button>
      </div>
      <button type="button" class="btn btn-light">取消</button>
      <button type="button" class="btn btn-primary">保存</button>
    </form>
  </section>
  {% include "../../layout/admin/footer.tpl" %}
  {{ headerTemp.current(1) }}
  {% include "../../layout/script.tpl" %}
  {{ scriptImport.import("home") }}
</body>
</html>
