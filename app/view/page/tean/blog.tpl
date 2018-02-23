{% import "../../layout/tean/meta.tpl" as metaTemp %}
{% import "../../layout/tean/header.tpl" as headerTemp %}
{% import "../../components/tean/banner.tpl" as bannerTemp %}

<!DOCTYPE html>
<html lang="zh-cn">
<head>
  {{ metaTemp.value(
      resourceData.config._name + " | 博客",
      "blog, " + resourceData.config._name,
      resourceData.config._desc)
  }}
</head>
<body>
  {{ headerTemp.set(2,
      resourceData.config._link.enable,
      resourceData.config._about.enable)
  }}
    <main class="content" role="main">
      <article>
        {{ bannerTemp.value("博客", resourceData.config._blog.desc) }}
        <div class="page-content">
          <section class="list">
            {% if resourceData.articles.length === 0 %}
              <h1>
                <a href="https://github.com/TeanBlog/TeanBlog">Hello World !</a>
              </h1>
            {% endif %}
            {% for article in resourceData.articles %}
              <h1>
                <a href="/articles/post/{{ article.id }}">{{ article.title }}</a>
              </h1>
            {% endfor %}
          </section>
        </div>
      </article>
    </main>
  {% include "../../layout/tean/footer.tpl" %}
  {% include "../../layout/script.tpl" %}
</body>
</html>
