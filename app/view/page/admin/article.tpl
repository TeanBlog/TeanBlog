{% import "../../layout/admin/meta.tpl" as metaTemp %}
{% import "../../layout/admin/header.tpl" as headerTemp %}
{% import "../../layout/admin/script.tpl" as scriptImport %}

<!DOCTYPE html>
<html lang="zh-cn">
<head>
  {{ metaTemp.value("TeanBlog | 撰写编辑", "Blog, TeanBlog", "A minimalist style blog based on Egg.js") }}
  <link rel="stylesheet" href="/public/lib/editormd.min.css">
  <link rel="stylesheet" href="/public/css/admin/article.css">
</head>
<body>
  {{ headerTemp.current(2) }}
    <section class="container admin-panel">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="文章标题">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">保存</button>
        </div>
      </div>
      <div id="editormd">
        <textarea style="display:none;"></textarea>
      </div>
    </section>
  {% include "../../layout/admin/footer.tpl" %}
  {% include "../../layout/script.tpl" %}
  {{ scriptImport.import("article") }}
</body>
</html>