{% import "../../layout/tean/meta.tpl" as metaTemp %}
{% import "../../layout/tean/header.tpl" as headerTemp %}
{% import "../../components/tean/banner.tpl" as bannerTemp %}
{% import "../../layout/tean/script.tpl" as scriptSet %}

<!DOCTYPE html>
<html lang="zh-cn">
<head>
  {{ metaTemp.value(
      resourceData.config._name + " | " + resourceData.title,
      resourceData.config._desc)
  }}
  <link href="https://cdn.bootcss.com/highlight.js/9.12.0/styles/github-gist.min.css" rel="stylesheet">
  <link href="https://unpkg.com/gitalk/dist/gitalk.css" rel="stylesheet">
</head>
<body>
  {{ headerTemp.set(2,
      resourceData.config._link.enable,
      resourceData.config._about.enable)
  }}
    <main class="content" role="main">
      <article>
        {{ bannerTemp.value(resourceData.title, resourceData.created_at_beauty) }}
        <div class="page-content">
          <div class="post-content">
            {{ resourceData.content | safe}}
            <footer class="post-modified-date">
              <p> Updated
                <time datetime="{{ resourceData.updated_at_beauty }}">
                  {{ resourceData.updated_at_beauty }}
                </time>
              </p>
            </footer>
          </div>
        </div>
      </article>
      {% include "../../components/tean/comment.tpl" %}
    </main>
  {% include "../../layout/tean/footer.tpl" %}
  {% include "../../layout/script.tpl" %}
  {{ scriptSet.set(resourceData.config._gitalk.enable,
      resourceData.config._gitalk.clientId,
      resourceData.config._gitalk.clientSecret,
      resourceData.config._gitalk.repo,
      resourceData.config._gitalk.owner,
      resourceData.config._gitalk.admin,
      resourceData.id)
  }}
</body>
</html>
