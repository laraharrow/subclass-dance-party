var makeTurtleDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="turtleDancer"></span>');
  this.setPosition(top, left);
};

makeTurtleDancer.prototype = Object.create(makeDancer.prototype);
makeTurtleDancer.prototype.constructor = makeTurtleDancer;

makeTurtleDancer.prototype.step = function() {
  
  makeDancer.prototype.step.call(this);
  
  this.$node.toggle();
};
