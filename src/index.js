const CsrfReader = require('./CsrfReader');
const Csrf = require('./Csrf');

export default {
  install(app, options = {
    attribute: 'content',
    selector: 'meta[name="csrf-token"]',
  }) {
    let csrfReader = new CsrfReader(options.selector, options.attribute);
    let csrf = new Csrf(csrfReader.getToken());

    app.config.globalProperties.prototype.$csrf = csrf;

    Object.defineProperty(app.config.globalProperties, '$csrfToken', {get: () => csrf.get()});
  },
};
