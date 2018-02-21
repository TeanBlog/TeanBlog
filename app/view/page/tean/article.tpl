{% import "../../layout/tean/meta.tpl" as metaTemp %}
{% import "../../layout/tean/header.tpl" as headerTemp %}
{% import "../../components/tean/banner.tpl" as bannerTemp %}

<!DOCTYPE html>
<html lang="zh-cn">
<head>
  {{ metaTemp.value("TeanBlog | " + resourceData.title, "Blog, TeanBlog", "A minimalist style blog based on Egg.js") }}
  <link href="https://cdn.bootcss.com/highlight.js/9.12.0/styles/github-gist.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
</head>
<body>
  {{ headerTemp.current(2) }}
    <main class="content" role="main">
      <article>
        {{ bannerTemp.value(title if resourceData.bannerTitle else "文章示例", title if resourceData.bannerSecTitle else "基于 Egg.js 的简约博客系统") }}
        <div class="page-content">
          <div class="post-content">
            {{ resourceData.content | safe}}
          </div>
        </div>
      </article>
      <section id="gitalk-container"></section>
    </main>
  {% include "../../layout/tean/footer.tpl" %}
  {% include "../../layout/script.tpl" %}
  <script src="https://cdn.bootcss.com/highlight.js/9.12.0/highlight.min.js"></script>
  <script>hljs.initHighlightingOnLoad();</script>
  <script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js"></script>
  <script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>
  <script>
    var gitalk = new Gitalk({
      clientID: '1918f30b0e5955c3895d',
      clientSecret: 'aafcf204fa93defdde2bb9cabbb31faddbccda4a',
      repo: 'TeanBlog',
      owner: 'TeanLee',
      admin: ['TeanLee', 'HuangXiZhou'],
      distractionFreeMode: false,
      id: md5(location.href)
    })

    gitalk.render('gitalk-container')
  </script>
</body>
</html>
