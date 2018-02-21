{% macro import(value) %}
  <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <script src="/public/js/admin/common.js"></script>
  {% if value === "login" %}
    <script src="/public/js/admin/login.js"></script>
  {% endif %}

  {% if value === "home" %}
    <script src="/public/js/admin/auth.js"></script>
  {% endif %}

  {% if value === "article" %}
    <script src="/public/js/admin/auth.js"></script>
    <script src="/public/lib/editormd.min.js"></script>
    <script src="/public/js/admin/article.js"></script>
  {% endif %}

  {% if value === "manage" %}
    <script src="/public/js/admin/auth.js"></script>
    <script src="/public/js/admin/manage.js"></script>
  {% endif %}
{% endmacro %}
