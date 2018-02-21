'use strict';

$(() => {
  const _cookie = new Cookie();

  $.ajax({
    type: 'POST',
    url: '/api/admin/auth',
    contentType: 'application/json; charset=UTF-8',
    headers: {
      Authorization: _cookie.get('TEAN_ADMIN'),
    },
    error: () => {
      window.location.href = '/admin/login';
    },
  });
});
