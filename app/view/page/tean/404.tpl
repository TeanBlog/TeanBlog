{% import "../../layout/tean/meta.tpl" as metaTemp %}
{% import "../../components/tean/banner.tpl" as bannerTemp %}

<!DOCTYPE html>
<html lang="zh-cn">
<head>
  {{ metaTemp.value(
      "404 Not Found",
      "404 Not Found")
  }}
</head>
<body>
    <main class="content" role="main">
      <article>
        {{ bannerTemp.value("404 Not Found") }}
        <div class="page-content">
          <section class="list">
            <h1>
              {{ errorCode }}
              <a href="/">返回首页</a>
            </h1>
          </section>
        </div>
      </article>
    </main>
  {% include "../../layout/tean/footer.tpl" %}
  {% include "../../layout/script.tpl" %}
</body>
</html>
