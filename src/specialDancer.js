var SpecialDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="http://www.zangief.net/images/zangief4.gif">');
  this.setPosition(top, left);
  if (!window.audioPlaying) {
    window.audio.play();
    window.audioPlaying = true;
    $('body').css({
      'margin': 0,
      'font-size': '18px',
      'background': 'url(http://slateman.net/images/gaming/backgrounds/sf2ww-blanka.gif) no-repeat center center fixed',
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover'
    });
  }
};

SpecialDancer.prototype = Object.create(Dancer.prototype);
SpecialDancer.prototype.constructor = SpecialDancer;
SpecialDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
};
