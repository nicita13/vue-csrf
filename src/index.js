const CsrfReader = require('./CsrfReader');
const Csrf = require('./Csrf');

export default {
  install(Vue, options = {
    attribute: 'content',
    selector: 'meta[name="csrf-token"]',
  }) {
    let csrfReader = new CsrfReader(options.selector, options.attribute);
    let csrf = new Csrf(csrfReader.getToken());

    Vue.prototype.$csrf = csrf;
    Vue.csrf = csrf;

    Object.defineProperty(Vue.prototype, '$csrfToken', {get: () => csrf.get()});
    Object.defineProperty(Vue, 'csrfToken', {get: () => csrf.get()});
  },
};
