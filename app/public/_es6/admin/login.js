'use strict';

$(() => {
  const _message = new Message();
  const validatorFunc = () => {
    const validator = new Validator();

    validator.add(loginFrom.email, [{
      strategy: 'isNonEmpty',
      errorMsg: '邮箱不能为空',
    }, {
      strategy: 'isEmail',
      errorMsg: '邮箱地址不正确',
    }]);
    validator.add(loginFrom.password, [{
      strategy: 'isNonEmpty',
      errorMsg: '密码不能为空',
    }]);

    const errorMsg = validator.start();
    return errorMsg;
  };

  const loginFrom = document.querySelector('#login-form');

  $('.btn').click(e => {
    e.preventDefault();
    const errorMsg = validatorFunc();

    if (errorMsg) {
      _message.warning(errorMsg);
      return false;
    }

    $('.btn')
      .attr('disabled', true)
      .text('登录中...');

    const loginModel = {
      email: $('#email').val(),
      password: $('#password').val(),
      rememberMe: $('#rememberMe')[0].checked,
    };

    $.ajax({
      type: 'POST',
      url: '/api/login',
      contentType: 'application/json; charset=UTF-8',
      data: JSON.stringify(loginModel),
      success: () => {
        window.location.href = '/admin/article/new';
      },
      error: data => {
        let errorMsg = '';

        data.responseJSON.msg
          ? errorMsg = data.responseJSON.msg
          : errorMsg = data.status + ': ' + data.statusText;

        _message.error(errorMsg);
      },
      complete: () => {
        $('.btn')
          .attr('disabled', false)
          .text('登录');
      },
    });
  });
});
