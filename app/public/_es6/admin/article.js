'use strict';

$(() => {
	const _cookie = new Cookie();
	const _message = new Message();

  const articleForm = {
		title: $('#article-title')[0]
	}

  const validatorFunc = () => {
		const validator = new Validator();

    validator.add(articleForm.title, [{
      strategy: 'isNonEmpty',
      errorMsg: '标题不能为空',
    }, {
			strategy: 'max:100',
      errorMsg: '标题不能超过 100 个字',
    }]);
    const errorMsg = validator.start();
    return errorMsg;
  };

  const editor = editormd('editormd', {
    path: '/public/lib/editor.md-lib/',
    placeholder: '使用 TeanBlog 开启你的写作之旅吧~',
    toolbarIcons: () => {
      return [
        'undo',
        'redo',
        'bold',
        'del',
        'italic',
        'quote',
        'ucwords',
        'uppercase',
        'lowercase',
        'h1',
        'h2',
        'h3',
        'list-ul',
        'list-ol',
        'hr',
        'link',
        'reference-link',
        'image',
        'code',
        'code-block',
        'table',
        'datetime',
        'html-entities',
        'pagebreak',
        'watch',
        'preview',
        'clear',
        'search',
      ];
    },
    editorTheme: 'neo',
    previewTheme: 'neo',
    watch: false,
  });

  $('#article-save').click(() => {
		const errorMsg = validatorFunc();
    const newArticleModel = {
      title: $('#article-title').val(),
      content: editor.getMarkdown(),
    };

    if (errorMsg) {
			_message.warning(errorMsg);
      return false;
		}

		if (!newArticleModel.content.trim().length) {
			_message.warning('文章内容不能为空')
      return false;
		}

    $.ajax({
      type: 'POST',
      url: '/api/admin/article/add',
      headers: {
        Authorization: _cookie.get('TEAN_ADMIN'),
      },
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(newArticleModel),
      success: data => {
				window.location.href = '/admin/article/manage/1'
      },
      error: data => {
				if (data.status) {
					window.href = '/admin/login'
				}

        let errorMsg = '';

        data.responseJSON.msg
          ? errorMsg = data.responseJSON.msg
          : errorMsg = data.status + ': ' + data.statusText;

				_message.error(errorMsg)
      },
    });
  });
});
