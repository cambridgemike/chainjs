var assert = require("assert"),
    c = require("../lib/chain");

describe("Chaining library", function() {
  it("should be able to chain built in functions", function() {
    var value = c(5).add(4).subtract(3).value();
    assert.equal(value, 6);
  });

  describe("should be able to mixin functions", function() {
    beforeEach(function() {
      c.mixin('tripple', function(a) {
        return a * 3;
      });
    });
    
    it("should add mixin to prototype", function() {
      var temp = c(1);
      assert.equal(typeof(temp.tripple), "function");
    });

    it("should be able to be chained", function() {
      var value = c(5).add(1).tripple().subtract(1).value();
      assert.equal(value, 17);
    });
  });
});