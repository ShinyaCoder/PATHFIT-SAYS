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


// ===============================
// START GAME
// ===============================

function startGame() {

    const menu = document.getElementById("mainMenu");
    const game = document.getElementById("gameScreen");

    if (menu) {
        menu.style.display = "none";
    }

    if (game) {
        game.style.display = "block";
    }

}


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
// FIREBASE LISTENER
// ===============================

onValue(gameRef, (snapshot) => {

    const data = snapshot.val();

    console.log("Firebase data:", data);

    if (!data) {
        return;
    }


    const commandElement =
        document.getElementById("command");

    const prefixElement =
        document.getElementById("commandPrefix");


    if (!commandElement || !prefixElement) {
        return;
    }


    // Show the game when a controller
    // sends a command

    document.getElementById("mainMenu").style.display = "none";

    document.getElementById("gameScreen").style.display = "block";


    commandElement.style.opacity = "0";
    prefixElement.style.opacity = "0";


    setTimeout(() => {

        if (data.pathfitSays === true) {

            prefixElement.innerHTML =
                "PATHFIT SAYS";

        } else {

            prefixElement.innerHTML =
                "";

        }


        commandElement.innerHTML =
            data.command || "READY?";


        commandElement.style.opacity = "1";
        prefixElement.style.opacity = "1";

    }, 300);

});


// ===============================
// MAKE FUNCTIONS AVAILABLE
// ===============================

window.startGame = startGame;

window.showInstructions = showInstructions;


console.log("SQUIDFIT GAME CONNECTED!");
