import Computed, { not, alias } from '@ember/object/computed';
let obj = {
  test: alias('this.app'),
};