{% import "../layout/meta.tpl" as metaTemp %}
{% import "../layout/header.tpl" as headerTemp %}
{% import "../components/banner.tpl" as bannerTemp %}

<!DOCTYPE html>
<html lang="en">
<head>
  {{ metaTemp.value("主页", "233", "2333") }}
</head>
<body>
  {{ headerTemp.current(1) }}
    <main class="content" role="main">
      <article>
        {{ bannerTemp.value(banner.title, "主页副标题") }}
        <div class="page-content">
          <h2>管理</h2>
          <section class="list">
            <h1>
              <a href="/vacation.html">休假制度</a>
            </h1>
          </section>
        </div>
      </article>
    </main>
  {% include "../layout/footer.tpl" %}
  {% include "../layout/script.tpl" %}
</body>
</html>