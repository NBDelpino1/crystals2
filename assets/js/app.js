$(document).ready(function(){

    // Hide the reults section for clean look when the page loads (also set to display none in CSS - found it took care of brief showing issue, dont need this bit of code but why not)
    $(".resultsWrapper").hide();

    // initialize modals - user may want to click on instructions
    $('.modal').modal();

    // Once the user clicks the start button, hide the button and show the results div slowly (Game has officially started)
    $("#startButton").on("click", function(){
        $("#startButton").hide();
        $(".resultsWrapper").fadeIn(1500);

    });

// GLOBAL VARIABLES
// =================================================================
    var crystals = {
        blue:
            {
                name: "blueMagic",
                value: 0
            },
        purple:
            {
                name: "purpleChurple",
                value: 0
            },
        red:
            {
                name: "redTastic",
                value: 0
            },
        yellow:
            {
                name: "yellowJelloYuk",
                value: 0
            }
    };

    var currentScore = 0;
    var targetNum = 0;
    var numWin = 0;
    var numLoss	= 0;


// FUNCTIONS
// =================================================================

// Helper Function for getting random numbers
    var getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

// Start game
    var startGame = function() {

        // Get a random number between 19 and 80 that user must get to win the game
        targetNum = getRandom(19, 80);
        // Set different random values for each of the crystals the user will click on
        crystals.blue.value = getRandom(1, 12);
        crystals.red.value 	= getRandom(1, 12);
        crystals.purple.value = getRandom(1, 12);
        crystals.yellow.value = getRandom(1, 12);
        // Display the target num needed to win the game so the user knows what they need to work towards
        $("#targetNum").html(targetNum);
        // Store the user score
        currentScore = 0;
        // Show user their score
        $("#yourScore").html(currentScore);
        // Quick to make sure values are being recorded accurately
        // console.log("-----------------------------------")
        // console.log("Target Score: " + targetNum);
        // console.log("blueMagic: " + crystals.blue.value + " | purpleChurple: " + crystals.purple.value +  " | redTastic: " + crystals.red.value + " | yellowJelloYuk: " + crystals.yellow.value);
        // console.log("-----------------------------------")
    }

// Add the value of the crystal the user clicked on to their total score and check to see if they achieved the target score - in other words won the game
    var addValues = function(crystal) {

        // add the value to the crystal the user clicked on to their total score
        currentScore = currentScore + crystal.value;
        // Update the HTML to show the updated score
        $("#yourScore").html(currentScore);
        // Check to see if the user won after each click
        checkWin();
        // Qucik test to make sure values are being recorded correctly
        // console.log("Your Score: " + currentScore);

    }


// Check if User Won or Lost and Reset the Game if so
    var checkWin = function() {

        // Check if currentScore is larger than targetNum
        if(currentScore > targetNum) {

            // console.log("You Lost");
            $('#modal2').modal('open');
            $("#magicNum").html(targetNum);
            $("#yourNum").html(currentScore);
            // Add to Loss Counter
            numLoss++;
            // Change Loss Count HTML
            $("#numLoss").html(numLoss);
            // Restart the game
            startGame();

        }

        else if (currentScore == targetNum) {

            // console.log("You Won!");
            $('#modal3').modal('open');
            // Add to the Win Counter
            numWin++;
            // Change Win Count HTML
            $("#numWin").html(numWin);
            // Restart the game
            startGame();

        }

    }

// MAIN PROCESS
// =================================================================

// Starts the Game the First Time.
    startGame();



// Gets and add values to the crystals clicked
    $("#blue").on("click", function(){

        addValues(crystals.blue);

    });

    $("#red").on("click", function(){
        addValues(crystals.red);
    });

    $("#purple").on("click", function(){
        addValues(crystals.purple);
    });

    $("#yellow").on("click", function(){
        addValues(crystals.yellow);
    });


});





