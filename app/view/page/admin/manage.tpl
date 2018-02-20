{% import "../../layout/admin/meta.tpl" as metaTemp %}
{% import "../../layout/admin/header.tpl" as headerTemp %}
{% import "../../layout/admin/script.tpl" as scriptImport %}

<!DOCTYPE html>
<html lang="zh-cn">
<head>
  {{ metaTemp.value("TeanBlog | 管理文章", "Blog, TeanBlog", "A minimalist style blog based on Egg.js") }}
  <link rel="stylesheet" href="/public/css/admin/manage.css">
</head>
<body>
  {{ headerTemp.current(3) }}
    <section class="container admin-panel">
<div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>发布</th>
                  <th>更新</th>
                  <th>标题</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2018-02-18 17:30:08</td>
                  <td>2018-02-18 17:30:08</td>
                  <td>Nginx: 413 Request Entity Too Large 解决方案</td>
                  <td class="table-action-btn__wrapper">
                    <button type="button" class="table-action-btn btn btn-primary">编辑</button>
                  </td>
                  <td class="table-action-btn__wrapper">
                    <button type="button" class="table-action-btn btn btn-danger">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>2018-02-18 17:30:08</td>
                  <td>2018-02-18 17:30:08</td>
                  <td>Nginx: 413 Request Entity Too Large 解决方案</td>
                  <td class="table-action-btn__wrapper">
                    <button type="button" class="table-action-btn btn btn-primary">编辑</button>
                  </td>
                  <td class="table-action-btn__wrapper">
                    <button type="button" class="table-action-btn btn btn-danger">删除</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </section>
  {% include "../../layout/admin/footer.tpl" %}
  {% include "../../layout/script.tpl" %}
  {{ scriptImport.import("manage") }}
</body>
</html>
