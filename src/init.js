$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log('dancerMakerFunctionName', dancerMakerFunctionName);

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log('dancerMakerFunction', dancerMakerFunction);
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
  
  $('.lineup').on('click', function(event) {
    var horizontal = 150;
    window.dancers.forEach(dancer => {
      var a = dancer.top = 650;
      var b = dancer.left = horizontal += 150;
      
      dancer.setPosition(a, b);
      setTimeout(function() {
        $('.blobDancer').slideUp();
      }, 2000);
      setTimeout(function() {
        $('.turtleDancer').slideUp();
      }, 3000);
      setTimeout(function() {
        $('.blinkyDancer').slideUp();
      }, 4000);
      
    });
  });
  
  
});