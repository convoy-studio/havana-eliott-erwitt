const lang = {};

export default lang;

/**
 * This works like PHP's empty() function. Behaviors:
 *  - return true if value is falsy
 *  - return true if the value is the integer zero
 *  - return true if the value has a length property that is zero
 *  - return true if the value is an object that does not own any properties
 *  - return false for everything else
 * @param mixed value
 * @return {Boolean}
 */
lang.empty = (value) => {

  // falsy value is always empty
  if (!value) {
    return true;
  }

  // number zero is empty
  if (typeof value === 'number') {
    return value === 0;
  }

  // zero-length is empty
  if (typeof value.length === 'number') {
    return !!value.length;
  }

  // iterate over object's own properties; return false on first iteration
  if (typeof value === 'object') {
    for (let p in value) {
      if (value.hasOwnProperty(p)) {
        return false;
      }
    }

    return true;
  }

  // default to false
  return false;
};
