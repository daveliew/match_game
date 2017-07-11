$(function() {
  var MatchGame ={};
    /*
      Sets up a new game after HTML document has loaded.
      Renders a 4x4 board of cards.
    */

    /*
      Generates and returns an array of matching card values.
     */
    MatchGame.generateCardValues = function() {
      var card_array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
      var cardValues = [];
      while (card_array.length > 0) {
          var random_value = Math.floor(Math.random()*card_array.length);
          cardValues.push(card_array[random_value]);
          card_array.splice(random_value,1);
      }
      return cardValues;
    };

    /*
      Converts card values to jQuery card objects and adds them to the supplied game
      object.
    */
    MatchGame.renderCards = function(cardValues, $game) {
      /* create CSS styles for each number in cardValues */
      var cardColors = ["hsl(25,85%,65%)", "hsl(55,85%,65%)", "hsl(90,85%,65%)", "hsl(160,85%,65%)", "hsl(220,85%,65%)", "hsl(265,85%,65%)", "hsl(310,85%,65%)", "hsl(360,85%,65%)"];
      $game.empty(); /* empty HTML */
      /* loop through cardValues array to create card object */
      cardValues.forEach(function(value){
        var card = $('<div class="col-xs-3 card"></div>');
        card.data('value', value);
        card.data('isFlipped', false);
        card.css('background-color', cardColors[value - 1]);
        $game.append(card);
      });
    };

    MatchGame.renderCards(MatchGame.generateCardValues(),$('#game'));

    /*
      Flips over a given card and checks to see if two cards are flipped over.
      Updates styles on flipped cards depending whether they are a match or not.
     */

    MatchGame.flipCard = function($card, $game) {

    };

});
