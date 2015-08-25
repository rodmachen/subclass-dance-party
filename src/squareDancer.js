var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="square dancer"></span>');
  this.setPosition(top, left);
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;
SquareDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
}
