{% macro current(tab) %}
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
      <a class="navbar-brand header-logo" href="/admin/home">
        <img src="/public/images/logo-white.png" alt="logo">
      </a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item {{ "active" if tab === 1 else "" }}">
            <a class="nav-link" href="/admin/home">个性化</a>
          </li>
          <li class="nav-item {{ "active" if tab === 2 else "" }}">
            <a class="nav-link" href="/admin/article/new">撰写文章</a>
          </li>
          <li class="nav-item {{ "active" if tab === 3 else "" }}">
            <a class="nav-link" href="#">文章管理</a>
          </li>
        </ul>
        <a class="nav-link logout-btn" href="#">登出</a>
      </div>
    </nav>
  </header>
{% endmacro %}