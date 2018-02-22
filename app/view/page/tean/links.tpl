{% import "../../layout/tean/meta.tpl" as metaTemp %}
{% import "../../layout/tean/header.tpl" as headerTemp %}
{% import "../../components/tean/banner.tpl" as bannerTemp %}

<!DOCTYPE html>
<html lang="zh-cn">
<head>
  {{ metaTemp.value(
      resourceData.config._name + " | 友链",
      resourceData.config._desc)
  }}
</head>
<body>
  {{ headerTemp.set(3,
      resourceData.config._link.enable,
      resourceData.config._about.enable)
  }}
    <main class="content" role="main">
      <article>
        {{ bannerTemp.value("友链", resourceData.config._link.desc) }}
        <div class="page-content">
          {% if resourceData.config._link.content.length %}
            <section class="list">
              {% for link in resourceData.config._link.content %}
                <h1>
                  <a href="{{ link.url }}" target="_blank">{{ link.name }}</a>
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
