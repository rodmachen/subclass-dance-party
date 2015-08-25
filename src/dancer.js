var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timer = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
};

Dancer.prototype.step = function() {
  // for this.step.bind(this) the bind(this) allows the first this to be used
  // and then, this.step just refers to the function definition of makeDancer.prototype.step
  setTimeout(this.step.bind(this), this.timer);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  this.setPosition(40, this.left);
}