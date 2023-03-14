import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'super-rentals/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = config.rootURL + 'api';

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}