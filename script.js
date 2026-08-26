import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getDatabase,
    ref,
    onValue
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";


// ===============================
// FIREBASE
// ===============================

const firebaseConfig = {
    apiKey: "AIzaSyAPAyfpSbN8RhHgenMIxFqZTQds1hjCofE",
    authDomain: "pathfit-says.firebaseapp.com",
    databaseURL: "https://pathfit-says-default-rtdb.firebaseio.com",
    projectId: "pathfit-says",
    storageBucket: "pathfit-says.firebasestorage.app",
    messagingSenderId: "369392989206",
    appId: "1:369392989206:web:ef2a369b78afb59a0bb137"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const gameRef = ref(db, "game");

const playersRef = ref(db, "game/players");


// ===============================
// COMMANDS
// ===============================

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


// ===============================
// VARIABLES
// ===============================

let lastCommand = "";


// ===============================
// START GAME
// ===============================

function startGame() {

    const menu =
        document.getElementById("mainMenu");

    const game =
        document.getElementById("gameScreen");


    if (menu) {

        menu.style.display = "none";

    }


    if (game) {

        game.style.display = "block";

    }

}


// ===============================
// FIREBASE GAME LISTENER
// ===============================

onValue(gameRef, (snapshot) => {

    const data = snapshot.val();


    if (!data) {

        return;

    }


    console.log(
        "Firebase command received:",
        data
    );


    const commandElement =
        document.getElementById("command");

    const prefixElement =
        document.getElementById("commandPrefix");


    if (!commandElement ||
        !prefixElement) {

        return;

    }


    // Fade out

    commandElement.style.opacity = "0";

    prefixElement.style.opacity = "0";


    setTimeout(() => {


        // PATHFIT SAYS

        if (data.pathfitSays === true) {

            prefixElement.innerHTML =
                "PATHFIT SAYS";

        }

        else {

            prefixElement.innerHTML =
                "";

        }


        // COMMAND

        commandElement.innerHTML =
            data.command || "READY?";


        // Fade in

        commandElement.style.opacity = "1";

        prefixElement.style.opacity = "1";


    }, 300);

});


// ===============================
// PLAYER COUNT LISTENER
// ===============================

onValue(playersRef, (snapshot) => {

    const players =
        snapshot.val();


    const playerElement =
        document.getElementById("players");


    if (
        playerElement &&
        players !== null
    ) {

        playerElement.innerHTML =
            players;

    }

});


// ===============================
// HOW TO PLAY
// ===============================

function showInstructions() {

    alert(

        "HOW TO PLAY\n\n" +

        "If you hear 'PATHFIT SAYS' → DO IT!\n\n" +

        "If you DON'T hear 'PATHFIT SAYS' → DON'T DO IT!"

    );

}


// ===============================
// MAKE BUTTONS WORK
// ===============================

// ===============================
// MAIN MENU BUTTONS
// ===============================

const startButton =
    document.getElementById("startButton");

const instructionsButton =
    document.getElementById("instructionsButton");


if (startButton) {

    startButton.addEventListener(
        "click",
        startGame
    );

}


if (instructionsButton) {

    instructionsButton.addEventListener(
        "click",
        showInstructions
    );

}


console.log(
    "SQUIDFIT GAME CONNECTED!"
);


console.log(
    "SQUIDFIT GAME CONNECTED TO FIREBASE!"
);
