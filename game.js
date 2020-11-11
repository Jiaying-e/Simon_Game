// alert("working");
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).on("click", function() {
        $("." + randomChosenColour).fadeOut(100).fadeIn(100);
        makesound(randomChosenColour);



        function makesound(key) {

          $("#" + key).click(function() {

            var sound = new Audio("sounds/" + key + ".mp3");

            return sound.play();})}; $(".btn").click(nextSequence);
