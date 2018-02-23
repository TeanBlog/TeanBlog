{% import "../../layout/tean/meta.tpl" as metaTemp %}
{% import "../../layout/tean/header.tpl" as headerTemp %}
{% import "../../components/tean/banner.tpl" as bannerTemp %}

<!DOCTYPE html>
<html lang="zh-cn">
<head>
  {{ metaTemp.value(
      resourceData.config._name,
      "blog, " + resourceData.config._name,
      resourceData.config._desc)
  }}
</head>
<body>
  {{ headerTemp.set(1,
      resourceData.config._link.enable,
      resourceData.config._about.enable)
  }}
    <main class="content" role="main">
      <article>
        {{ bannerTemp.value(resourceData.config._name, resourceData.config._desc) }}
        <div class="page-content">
          <h2>最新文章</h2>
          <section class="list">
            {% if resourceData.articles.length === 0 %}
              <h1>
                <a href="https://github.com/TeanBlog/TeanBlog">Hi! TeanBlog</a>
              </h1>
            {% endif %}
            {% for article in resourceData.articles %}
              <h1>
                <a href="/articles/post/{{ article.id }}">{{ article.title }}</a>
              </h1>
            {% endfor %}
          </section>
          {% if resourceData.config._home.projects.enable %}
            <h2>项目展示</h2>
            <section class="list">
              {% for project in resourceData.config._home.projects.content %}
                <h1>
                  <a href="{{ project.url }}" target="_blank">{{ project.name }}</a>
                </h1>
              {% endfor %}
            </section>
          {% endif %}
        </div>
      </article>
    </main>
  {% include "../../layout/tean/footer.tpl" %}
  {% include "../../layout/script.tpl" %}
</body>
</html>
