const commands = [

    // EASY
    "5 SQUATS!",
    "HIGH KNEES!",
    "CLAP 5 TIMES!",
    "TOUCH YOUR TOES!",
    "TOUCH YOUR KNEES!",
    "JUMP 5 TIMES!",
    "MARCH IN PLACE!",
    "WAVE YOUR HANDS!",

    // FUNNY
    "DANCE!",
    "ACT LIKE A CHICKEN!",
    "WALK LIKE A ROBOT!",
    "POSE LIKE A SUPERHERO!",
    "MAKE A HEART WITH YOUR HANDS!",
    "SHAKE YOUR SHOULDERS!",
    "FREEZE!",

    // FITNESS
    "5 LUNGES!",
    "3 BURPEES!",
    "FROG JUMP!",
    "CRAB WALK!",
    "RUN IN PLACE!",
    "STAND ON ONE LEG!",
    "DO 3 JUMPING JACKS!",
    "DO 5 ARM CIRCLES!",

    // TRICKY
    "SPIN AROUND!",
    "TOUCH YOUR HEAD!",
    "TOUCH YOUR LEFT EAR!",
    "TOUCH YOUR RIGHT KNEE!",
    "RAISE BOTH HANDS!",
    "CROUCH DOWN!",
    "STAND STILL!",

    // CHAOS
    "DO 2 SQUATS!",
    "JUMP ONCE!",
    "CLAP 3 TIMES!",
    "TURN AROUND!",
    "WIGGLE YOUR ARMS!",
    "PRETEND TO BE A FROG!"

];


let players = 53;

let round = 1;

let lastCommand = "";



/* =========================
   START GAME
   ========================= */

function startGame() {

    document.getElementById("mainMenu").style.display = "none";

    document.getElementById("gameScreen").style.display = "block";

    nextCommand();
}



/* =========================
   RANDOM COMMAND
   ========================= */

function nextCommand() {

    const commandElement =
        document.getElementById("command");

    const prefixElement =
        document.getElementById("commandPrefix");


    commandElement.style.opacity = "0";

    prefixElement.style.opacity = "0";


    setTimeout(function() {

        let randomCommand;

        do {

            randomCommand =
                commands[
                    Math.floor(
                        Math.random() * commands.length
                    )
                ];

        } while (randomCommand === lastCommand);


        lastCommand = randomCommand;


        let pathfitSays =
            Math.random() < 0.5;


        if (pathfitSays) {

            prefixElement.innerHTML =
                "PATHFIT SAYS";

        } else {

            prefixElement.innerHTML =
                "";

        }


        commandElement.innerHTML =
            randomCommand;


        commandElement.style.opacity = "1";

        prefixElement.style.opacity = "1";


    }, 300);

}

    let randomCommand;

    // Prevent the same command twice in a row
    do {

        randomCommand =
            commands[Math.floor(Math.random() * commands.length)];

    } while (randomCommand === lastCommand);


    lastCommand = randomCommand;


    // 50% chance of saying PATHFIT SAYS
    let pathfitSays = Math.random() < 0.5;


    if (pathfitSays) {

        document.getElementById("commandPrefix").innerHTML =
            "PATHFIT SAYS";

    } else {

        document.getElementById("commandPrefix").innerHTML =
            "";

    }


    document.getElementById("command").innerHTML =
        randomCommand;





/* =========================
   HOW TO PLAY
   ========================= */

function showInstructions() {

    alert(
        "RULES:\n\n" +
        "If you hear 'PATHFIT SAYS', DO IT.\n\n" +
        "If 'PATHFIT SAYS' is NOT said, DON'T DO IT!"
    );

}

/* =========================
   PRESENTER MODE
   ========================= */

function openPresenter() {

    document.getElementById("presenterPanel")
        .style.display = "flex";

}


function closePresenter() {

    document.getElementById("presenterPanel")
        .style.display = "none";

}



/* =========================
   PLAYER COUNT
   ========================= */

function removePlayer() {

    if (players > 0) {

        players--;

        document.getElementById("players").innerHTML =
            players;

    }

}


function addPlayer() {

    if (players < 53) {

        players++;

        document.getElementById("players").innerHTML =
            players;

    }

}



/* =========================
   NEXT ROUND
   ========================= */

function nextRound() {

    round++;

    document.getElementById("round").innerHTML =
        round;

    nextCommand();

}