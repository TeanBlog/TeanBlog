{% import "../../layout/admin/meta.tpl" as metaTemp %}
{% import "../../layout/admin/header.tpl" as headerTemp %}
{% import "../../layout/admin/script.tpl" as scriptImport %}

<!DOCTYPE html>
<html lang="zh-cn">
<head>
  {{ metaTemp.value(
        resourceData.config._name + " | 文章管理",
        "Blog, TeanBlog",
        resourceData.config._desc)
  }}
  <link rel="stylesheet" href="/public/css/admin/manage.css">
</head>
<body>
  {{ headerTemp.current(2) }}
    <section class="container admin-panel">
      <div class="alert alert-danger" role="alert"></div>
      <div class="alert alert-info" role="alert"></div>
      <div class="alert alert-warning" role="alert"></div>
      <div class="alert alert-success" role="alert"></div>
      <div class="table-responsive">
        {% if resourceData.rows.length === 0 %}
          <h4 class="article-empty">暂无文章，<a href="/admin/article/new">立即添加</a></h4>
        {% else %}
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th>发布</th>
                <th>更新</th>
                <th>标题</th>
              </tr>
            </thead>
            <tbody>
              {% for article in resourceData.rows %}
                <tr>
                  <td>{{ article.created_at_beauty }}</td>
                  <td>{{ article.updated_at_beauty }}</td>
                  <td>{{ article.title | truncate(15) }}</td>
                  <td class="table-action-btn__wrapper">
                    <button type="button" data-id="{{ article.id }}" class="table-action-btn table-action-btn__edit btn btn-primary">
                      编辑
                    </button>
                  </td>
                  <td class="table-action-btn__wrapper">
                    <button type="button" data-id="{{ article.id }}" class="table-action-btn table-action-btn__delete btn btn-danger">
                      删除
                    </button>
                  </td>
                </tr>
              {% endfor %}
            </tbody>
          </table>
        {% endif %}
      </div>
      {% if resourceData.count > 10 and resourceData.rows.length %}
        <nav>
          <ul class="pagination">
            <li class="page-item {{ "disabled" if resourceData.current === 1 else "" }}">
              <a class="page-link" href="/admin/article/manage/{{ resourceData.current - 1 }}">
                上一页
              </a>
            </li>
            <li class="page-item active">
              <span class="page-link">{{ resourceData.current }}</span>
            </li>
            <li class="page-item {{ "disabled" if resourceData.current >= resourceData.count / 10 else "" }}">
              <a class="page-link" href="/admin/article/manage/{{ resourceData.current + 1 }}">
                下一页
              </a>
            </li>
          </ul>
        </nav>
      {% endif %}
    </section>
  {% include "../../layout/admin/footer.tpl" %}
  {% include "../../layout/script.tpl" %}
  {{ scriptImport.import("manage") }}
</body>
</html>
