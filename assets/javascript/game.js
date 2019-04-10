$(document).ready(function() {
    var Random=Math.floor(Math.random()*101+19)
// Select Random Number
//
$('#randomNumber').text(Random);
// random number id from html doc
//
var num1=Math.floor(Math.random()*11+1)
var num2=Math.floor(Math.random()*11+1)
var num3=Math.floor(Math.random()*11+1)
var num4=Math.floor(Math.random()*11+1)
// Random number has to be between 1-12
//
var userTotal=0;
var wins=0;
var losses=0;
// Declairing variables
//
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//resets the game
function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
var num1=Math.floor(Math.random()*11+1)
var num2=Math.floor(Math.random()*11+1)
var num3=Math.floor(Math.random()*11+1)
var num4=Math.florr(Math.random()*11+1)
userTotal=0;
$('#finalTotal').text(userTotal);
}
// adding wins to the users total
//

function yay(){
    alert("You won!");
    wins++;
    $('#numberWins').text(wins);
    reset();
}
// adding loses to the user total
//
function loser() {
    alert ("You lose !");
    losses++;
    $('#numberLosses').text(losses);
    reset();
}
// setting up click for gem
//
$('#1').on ('click', function(){
    userTotal=userTotal+num1;
    console.log("New userTotal=" + userTotal);
    $('#finalTotal').text(userTotal);

    //setting win and lose conditions
    //
    if (userTotal == Random){
        yay();
    }
    else if (userTotal>Random){
        loser();
    }
})
$('#2').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal=" + userTotal);
    $('#finalTotal').text(userTotal);
    if (userTotal == Random){
        yay();
    }
    else if ( userTotal > Random){
        loser();
    }
})
$('#3').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal=" + userTotal);
    $('#finalTotal').text(userTotal);
    if (userTotal == Random){
        yay();
    }
    else if ( userTotal > Random){
        loser();
    }
})
$('#4').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal=" + userTotal);
    $('#finalTotal').text(userTotal);
    if (userTotal == Random){
        yay();
    }
    else if ( userTotal > Random){
        loser();
    }
});
});
