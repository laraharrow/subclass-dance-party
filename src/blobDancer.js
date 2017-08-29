var makeBlobDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
};

makeBlobDancer.prototype = Object.create(makeDancer.prototype);
makeBlobDancer.prototype.constructor = makeBlobDancer;

var oldStep = makeBlobDancer.step;

makeBlobDancer.prototype.step = function() {
  this.$node.toggle();
  makeDancer.prototype.step.call(this);
};
