var makeBlobDancer = function() {
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="blobDancer"></span>');

};

makeBlobDancer.prototype = Object.create(makeDancer.prototype);
makeBlobDancer.prototype.constructor = makeBlobDancer;
// var oldStep = makeBlobDancer.step;
makeBlobDancer.prototype.step = function() {
  this.$node.addClass('blobDancer');
  this.$node.addClass('lineUPStyle');

  // this.$node.toggle();
};
makeBlobDancer.prototype.lineup = function() {
  this.setPosition(100, 200);
  var lineUPStyle {
    left: 10;
  }
  this.$node.css('lineUPStyle')
}
