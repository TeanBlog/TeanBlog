{% macro set(enable, clientId, clientSecret, repo, owner, admin, id) %}
  <script src="https://cdn.bootcss.com/highlight.js/9.12.0/highlight.min.js"></script>
  <script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>
  <script>
    hljs.initHighlightingOnLoad();
    {% if enable %}
      var gitalk = new Gitalk({
        clientID: "{{ clientId }}",
        clientSecret: "{{ clientSecret }}",
        repo: "{{ repo }}",
        owner: "{{ owner }}",
        admin: ["{{ admin }}"],
        distractionFreeMode: false,
        id: "{{ id }}"
      });
      gitalk.render("gitalk-container");
    {% endif %}
  </script>
{% endmacro %}
