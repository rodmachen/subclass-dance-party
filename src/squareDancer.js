var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="square dancer"></span>');
  this.setPosition(top, left);
  this.rotate(0);
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;
SquareDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
}


SquareDancer.prototype.rotate = function(degree){
  // For webkit browsers: e.g. Chrome
  this.$node.css({ '-webkit-transform': 'rotate(' + degree + 'deg)'});
  // For Mozilla browser: e.g. Firefox
  this.$node.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
  // Animate
  setTimeout(this.rotate.bind(this, ++degree), 5);
}