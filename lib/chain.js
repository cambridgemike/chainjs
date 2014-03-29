_inner = function(val) {
  this.val = val;
};

_inner.prototype = {
  value: function() {
    return this.val;
  },

  add: function(b) {
    this.val += b;
    return this;
  },

  subtract: function(b) {
    this.val -= b;
    return this;
  },

  multiply: function(b) {
    this.val *= b;
    return this;
  }
};

_ = function(val) {
  return new _inner(val);
};

_.mixin = function(name, fn) {
    _inner.prototype[name] = function(){
      argumentsArray = [].slice.apply(arguments);
      argumentsArray.unshift(this.val);
      this.val = fn.apply(this, argumentsArray);
      return this;
    };
};

module.exports = _;