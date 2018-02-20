{% import "../../layout/admin/meta.tpl" as metaTemp %}
{% import "../../layout/admin/header.tpl" as headerTemp %}
{% import "../../layout/admin/script.tpl" as scriptImport %}

<!DOCTYPE html>
<html lang="zh-cn">
<head>
  {{ metaTemp.value("TeanBlog | 主页管理", "Blog, TeanBlog", "A minimalist style blog based on Egg.js & Vue.js") }}
  <link rel="stylesheet"href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="/public/css/admin/home.css">
</head>
<body>
  {{ headerTemp.current(1) }}
  <section class="container admin-panel">
    <div class="row no-gutters home justify-content-around">
      <form class="home-item home-item-project col-sm-12 col-md-6">
        <div class="form-group">
          <h3>项目/著作展示</h3>
          <small id="passwordHelpBlock" class="form-text text-muted">
            选填 · 不添加将不在首页展示项目/作品
          </small>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="名称">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="URL(http://example.com)">
        </div>
        <button type="button" class="btn btn-light">取消</button>
        <button type="button" class="btn btn-primary">保存</button>
      </form>
      <form class="home-item home-item-links col-sm-12 col-md-6">
        <div class="form-group">
          <h3>友链添加</h3>
          <small id="passwordHelpBlock" class="form-text text-muted">
            选填 · 不添加将只做默认展示
          </small>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="昵称">
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-link"></i>
              </span>
            </div>
            <input type="text" class="form-control" placeholder="URL(http://)">
          </div>
        </div>
        <button type="button" class="btn btn-light">取消</button>
        <button type="button" class="btn btn-primary">保存</button>
      </form>
      <form class="home-item home-item-about col-sm-12 col-md-6">
        <div class="form-group">
          <h3>个人信息</h3>
          <small id="passwordHelpBlock" class="form-text text-muted">
            选填 · 不填写将不展示关于页面
          </small>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="姓名昵称">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="简介">
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-github"></i>
              </span>
            </div>
            <input type="text" class="form-control" placeholder="GitHub">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-facebook"></i>
              </span>
            </div>
            <input type="text" class="form-control" placeholder="FaceBook">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-linkedin"></i>
              </span>
            </div>
            <input type="text" class="form-control" placeholder="Linkedin">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-at"></i>
              </span>
            </div>
            <input type="text" class="form-control" placeholder="Email">
          </div>
        </div>
        <button type="button" class="btn btn-light">取消</button>
        <button type="button" class="btn btn-primary">保存</button>
      </form>
      <form class="home-item home-item-about col-sm-12 col-md-6">
        <div class="form-group">
          <h3>站点展示</h3>
          <small id="passwordHelpBlock" class="form-text text-muted">
            选填 · 不填写将使用默认值
          </small>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="站点标题">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="主页副标题">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="博客页副标题">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="归档页副标题">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="关于页副标题">
        </div>
        <button type="button" class="btn btn-light">取消</button>
        <button type="button" class="btn btn-primary">保存</button>
      </form>
      <form class="home-item home-item-about col-sm-12 col-md-6">
        <div class="form-group">
          <h3>技能管理</h3>
          <small id="passwordHelpBlock" class="form-text text-muted">
            选填 · 与个人信息同步
          </small>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="技能标签">
        </div>
        <button type="button" class="btn btn-light">取消</button>
        <button type="button" class="btn btn-primary">保存</button>
      </form>
      <form class="home-item home-item-about col-sm-12 col-md-6">
        <div class="form-group">
          <h3>SEO 配置</h3>
          <small id="passwordHelpBlock" class="form-text text-muted">
            选填 · 不填写将使用默认值
          </small>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="站点描述">
        </div>
        <button type="button" class="btn btn-light">取消</button>
        <button type="button" class="btn btn-primary">保存</button>
      </form>
    </div>
  </section>
  {% include "../../layout/admin/footer.tpl" %}
  {% include "../../layout/script.tpl" %}
  {{ scriptImport.import("home") }}
</body>
</html>
