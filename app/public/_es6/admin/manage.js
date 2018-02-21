'use strict';

$(() => {
  const _cookie = new Cookie();
  const _message = new Message();

  $('.table-action-btn__delete').click(e => {
    const id = e.target.attributes['data-id'].value;

    $.ajax({
      type: 'DELETE',
      url: `/api/admin/article?id=${id}`,
      headers: {
        Authorization: _cookie.get('TEAN_ADMIN'),
      },
      contentType: 'application/json',
      dataType: 'json',
      success: data => {
        _message.error(data.msg);

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      error: data => {
        if (data.status > 400) {
          window.href = '/admin/login';
        }

        let errorMsg = '';

        data.responseJSON.msg
          ? errorMsg = data.responseJSON.msg
          : errorMsg = data.status + ': ' + data.statusText;

        _message.error(errorMsg);
      },
    });
  });

  $('.table-action-btn__edit').click(e => {
    const id = e.target.attributes['data-id'].value;

    window.location.href = `/admin/article/edit/${id}`;
  });
});
