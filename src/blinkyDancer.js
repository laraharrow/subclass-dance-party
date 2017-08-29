var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

var oldStep = makeBlinkyDancer.step;

makeBlinkyDancer.prototype.step = function() {
  this.$node.toggle();
  makeDancer.prototype.step.call(this);
};
