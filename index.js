class CsrfReader {
  constructor(selector, attribute) {
    this.attribute = attribute;
    this.selector = selector;
  }

  getToken() {
    let element = this._getCsrfElement();

    if (element) {
      return element.getAttribute(this.attribute);
    }

    return null;
  }

  _getCsrfElement() {
    return document.querySelector(this.selector);
  }
}

export default {
  install(Vue, options = {
    attribute: 'content',
    selector: 'meta[name="csrf-token"]',
  }) {
    let csrfReader = new CsrfReader(options.selector, options.attribute);
    let token = csrfReader.getToken();

    Vue.prototype.$csrfToken = token;
    Vue.csrfToken = token;
  },
};
