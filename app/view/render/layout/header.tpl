{% macro current(tab) %}
  <nav class="navigation">
    <ul>
      <li class="{{ "current" if tab === 1 else "" }}">
        <a href="/">LeanCloud 开放资源</a>
      </li>
      <li class="{{ "current" if tab === 2 else "" }}">
        <a href="/about/">About</a>
      </li>
    </ul>
  </nav>
{% endmacro %}
