{% import "../../layout/tean/meta.tpl" as metaTemp %}
{% import "../../layout/tean/header.tpl" as headerTemp %}
{% import "../../components/tean/banner.tpl" as bannerTemp %}

<!DOCTYPE html>
<html lang="zh-cn">
<head>
  {{ metaTemp.value("TeanBlog | 博客", "Blog, TeanBlog", "A minimalist style blog based on Egg.js") }}
</head>
<body>
  {{ headerTemp.current(2) }}
    <main class="content" role="main">
      <article>
        {{ bannerTemp.value(title if resourceData.bannerTitle else "博客", title if resourceData.bannerSecTitle else "基于 Egg.js 的简约博客系统") }}
        <div class="page-content">
          <section class="list">
            {% if resourceData.articles.length === 0 %}
              <h1>
                <a href="https://github.com/TeanLee/TeanBlog">Hello World !</a>
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
