var makeBlobDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="blobDancer"></span>');
  this.setPosition(top, left);

};

makeBlobDancer.prototype = Object.create(makeDancer.prototype);
makeBlobDancer.prototype.constructor = makeBlobDancer;

makeBlobDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // slideUP on cli
  // this.$node.slideUp();
  //console.log('this.$node on step: ', this.$node);
  
  // $('.blobDancer').animate({left: 100}, 1000);
  $('.blobDancer').on('click', function(event) {
    // this.$node.slideUp();
    console.log(this);
    // $('.blobDancer').slideUp();
  });
};



