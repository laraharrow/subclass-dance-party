var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="blinkyDancer"></span>');
  this.setPosition(top, left);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  this.$node.animate({left: '250px'});
  // this.$node.toggle();
};
