{% macro current(tab) %}
  <nav class="navigation">
    <ul>
      <li class="{{ "current" if tab === 1 else "" }}">
        <a href="/">主页</a>
      </li>
      <li class="{{ "current" if tab === 2 else "" }}">
        <a href="/blog">博客</a>
      </li>
      <li class="{{ "current" if tab === 3 else "" }}">
        <a href="/links">友链</a>
      </li>
      <li class="{{ "current" if tab === 4 else "" }}">
        <a href="/about">关于</a>
      </li>
    </ul>
  </nav>
{% endmacro %}
