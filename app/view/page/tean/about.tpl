{% import "../../layout/tean/meta.tpl" as metaTemp %}
{% import "../../layout/tean/header.tpl" as headerTemp %}
{% import "../../components/tean/banner.tpl" as bannerTemp %}

<!DOCTYPE html>
<html lang="zh-cn">
<head>
  {{ metaTemp.value(
      resourceData.config._name + " | 关于",
      "blog, about, " + resourceData.config._about.nickname,
      resourceData.config._desc)
  }}
</head>
<body>
  {{ headerTemp.set(4,
      resourceData.config._link.enable,
      resourceData.config._about.enable)
  }}
    <main class="content" role="main">
      <article>
        {{ bannerTemp.value(resourceData.config._about.nickname, resourceData.config._about.desc) }}
        <div class="page-content">
          {% if resourceData.config._about.introduction %}
            <h2>简介</h2>
            <section class="post-content">
              <blockquote>
                <p>{{ resourceData.config._about.introduction }}</p>
              </blockquote>
            </section>
          {% endif %}
          {% if resourceData.config._about.skill.content.length %}
            <h2>技能</h2>
            <section class="list">
              {% for skill in resourceData.config._about.skill.content %}
                <ul>
                  <li>
                    <h1>
                      {{ skill.name }}
                    </h1>
                  </li>
                </ul>
              {% endfor %}
            </section>
          {% endif %}
          {% if resourceData.config._about.contact.content.length %}
            <h2>联系我</h2>
            <section class="list">
              {% for contact in resourceData.config._about.contact.content %}
                <h1>
                  <a href="{{ contact.url }}" target="_blank">{{ contact.name }}</a>
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
