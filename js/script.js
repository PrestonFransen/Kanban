var makePiggysRain = function() {
  //clear out everything
  $('.rain').empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";
  while (increment < 100) {

    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%;"></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%;"></div>';
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
}
makePiggysRain();
