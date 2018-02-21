'use strict';

const strategies = {
  isNonEmpty(value, errorMsg) {
    return value === ''
      ? errorMsg
      : void 0;
  },
  isEmail(value, errorMsg) {
    return !/^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)
      ? errorMsg
      : void 0;
  },
  min(value, length, errorMsg) {
    return value.length < length
      ? errorMsg
      : void 0;
  },
  max(value, length, errorMsg) {
    return value.length > length
      ? errorMsg
      : void 0;
  },
};

class Cookie {
  remove(cname) {
    const date = new Date();
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
    const expires = '; expires=' + date.toGMTString();
    document.cookie = cname + '=' + '' + expires + '; path=/';
  }

  get(cname) {
    const name = cname + '=';
    const ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
      const c = ca[i].trim();
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }

    return '';
  }
}

class Message {
  success(msg) {
    $('.alert-success')
      .text(msg)
      .fadeIn();
    setTimeout(() => {
      $('.alert-success')
        .fadeOut();
    }, 1500);
  }

  error(msg) {
    $('.alert-danger')
      .text(msg)
      .fadeIn();
    setTimeout(() => {
      $('.alert-danger')
        .fadeOut();
    }, 1500);
  }

  info(msg) {
    $('.alert-info')
      .text(msg)
      .fadeIn();
    setTimeout(() => {
      $('.alert-info')
        .fadeOut();
    }, 1500);
  }

  warning(msg) {
    $('.alert-warning')
      .text(msg)
      .fadeIn();
    setTimeout(() => {
      $('.alert-warning')
        .fadeOut();
    }, 1500);
  }
}

class Validator {
  constructor() {
    this.strategiesCache = [];
  }

  add(dom, rules) {
    for (const rule of rules) {
      const strategyAry = rule.strategy.split(':');
      const errorMsg = rule.errorMsg;
      this.strategiesCache.push(() => {
        const strategy = strategyAry.shift();
        strategyAry.unshift(dom.value);
        strategyAry.push(errorMsg);
        return strategies[strategy].apply(dom, strategyAry);
      });
    }
  }

  start() {
    for (const validatorFunc of this.strategiesCache) {
      const errorMsg = validatorFunc();
      if (errorMsg) return errorMsg;
    }
  }
}

$('.logout-btn').click(() => {
  const _cookie = new Cookie();

  _cookie.remove('TEAN_ADMIN');
  window.location.href = '/admin/login';
});
