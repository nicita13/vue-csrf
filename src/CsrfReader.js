module.exports = class CsrfReader {
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