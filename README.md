# vue-csrf
A Vue.js plugin for getting CSRF-token

## Installation

``` bash
yarn add vue-csrf
```

or

```bash
npm install vue-csrf --save
```

### Usage

Import package

```javascript
import VueCsrf from 'vue-csrf';

Vue.use(VueCsrf);
```

or with options

```javascript
import VueCsrf from 'vue-csrf';

Vue.use(VueCsrf, {
    selector: 'meta[name="csrf-token"]', // selector of csrf element with csrf-token value
    attribute: 'content', //attribute of csrf-token element
});
```

then you can get csrf-token by next commands

```javascript

this.$csrfToken;
Vue.csrfToken;
```
