'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CsrfReader = function () {
  function CsrfReader(selector, attribute) {
    _classCallCheck(this, CsrfReader);

    this.attribute = attribute;
    this.selector = selector;
  }

  _createClass(CsrfReader, [{
    key: 'getToken',
    value: function getToken() {
      var element = this._getCsrfElement();

      if (element) {
        return element.getAttribute(this.attribute);
      }

      return null;
    }
  }, {
    key: '_getCsrfElement',
    value: function _getCsrfElement() {
      return document.querySelector(this.selector);
    }
  }]);

  return CsrfReader;
}();

exports.default = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      attribute: 'content',
      selector: 'meta[name="csrf-token"]'
    };

    var csrfReader = new CsrfReader(options.selector, options.attribute);
    var token = csrfReader.getToken();

    Vue.prototype.$csrfToken = token;
    Vue.csrfToken = token;
  }
};
