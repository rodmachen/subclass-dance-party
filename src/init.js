$(document).ready(function(){
  window.dancers = [];
  window.audioPlaying = false;
  window.audio = new Audio("audio.mp3");

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  
  $(".lineUpButton").on("click", function(event){
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    };
  });

   $(".goBackButton").on("click", function(event){
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(window.dancers[i].top, window.dancers[i].left);
    };
  });

   $('.danceTogether').on('click', function(event){
    // we have positions of dancers via the window.dancers array
// to get the closest dancer for any element
  //we can use reduce to pull out the closest dancer 
  //change their positions to be a lot closer;
      //pick a random dancer
      var comparedDancer = window.dancers.shift();
      var randomDancerIndex = Math.floor(window.dancers.length * Math.random());
      var randomDancer = window.dancers[randomDancerIndex];
      // get closest dancer to random Dancer
      var closestDancer = window.dancers.reduce(function(current, dancer){
        // get current distance with dancer from array
        var currentDistance = (randomDancer.top - dancer.top) * (randomDancer.top - dancer.top) + (randomDancer.left - dancer.left) * (randomDancer.left - dancer.left);
        // get current smallest distance with current dancer
        var currentClosest = (randomDancer.top - current.top) * (randomDancer.top - current.top) + (randomDancer.left - current.left) * (randomDancer.left - current.left);
        // if current dancer is itself, return previous
        if (currentDistance === 0){
          console.log("I am myself");
          return current;
        }
        // if closest dancer is closer
        if (currentClosest < currentDistance){
          // return the previous closest dancer
          console.log("The previous value was closer");
          return current;
        }
        // if current dancer is closer then, return new dancer
        if (currentClosest > currentDistance){
          console.log("The new value is closer");
          return dancer;
        }
      }, comparedDancer);
      var randomTop = $("body").height() * Math.random();
      var randomLeft = $("body").width() * Math.random();
      randomDancer.setPosition(randomTop, randomLeft);
      closestDancer.setPosition(randomTop, randomLeft + 50);
   });
});

