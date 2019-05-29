"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var CsrfReader = require('./CsrfReader');

var Csrf = require('./Csrf');

var _default = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      attribute: 'content',
      selector: 'meta[name="csrf-token"]'
    };
    var csrfReader = new CsrfReader(options.selector, options.attribute);
    var csrf = new Csrf(csrfReader.getToken());
    Vue.prototype.$csrf = csrf;
    Vue.csrf = csrf;
    Object.defineProperty(Vue.prototype, '$csrfToken', {
      get: function get() {
        return csrf.get();
      }
    });
    Object.defineProperty(Vue, 'csrfToken', {
      get: function get() {
        return csrf.get();
      }
    });
  }
};
exports["default"] = _default;