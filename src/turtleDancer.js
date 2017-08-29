var makeTurtleDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
};

makeTurtleDancer.prototype = Object.create(makeDancer.prototype);
makeTurtleDancer.prototype.constructor = makeTurtleDancer;

var oldStep = makeTurtleDancer.step;

makeTurtleDancer.prototype.step = function() {
  this.$node.toggle();
  makeDancer.prototype.step.call(this);
};
