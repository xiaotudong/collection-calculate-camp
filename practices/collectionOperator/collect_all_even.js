'use strict';

function collect_all_even(collection) {
  return collection.filter(a => a % 2 === 0);
}
module.exports = collect_all_even;
