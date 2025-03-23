const body = document.getElementById("body");
const aboutMe = document.getElementById("aboutButton");
const projects = document.getElementById("projectsButton");
projects.onclick = function () { scrollTo("projects") }
aboutMe.onclick = function() { scrollTo("about") };

function scrollTo(section) {
    let targetDiv = document.getElementById(section);
    if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: "smooth", block: "start"});
    } else {
        console.error(`Element with ID "${section}" not found.`);
    }
}


// TYPING WORDS EFFECT
const words = ["Computer Science Student", "Cybersecurity Analyst", "Developer", "Penetration Tester", '"Speedcuber"'];

// word <p> tag 
let wordTag = document.getElementById("word");
let currentWord = 0; //index of word to be typed
const delay = 100; // delay between letters
function typeWord() {
    charArr = words[currentWord].split(""); // char array of the word
    var typeLetter = function() {
        if (charArr.length > 0) {
            wordTag.innerHTML += charArr.shift();
            setTimeout(typeLetter, delay); //"Call typeLetter again, with a _delay_ second delay"
        } 
        else {
            setTimeout(deleteWord, 1000); //wait a second, then delete the word :)
            return false;`  `
        }
    };

    typeLetter(); //kick off the recursive calling of typeLetter
}

function deleteWord() {
    charArr = wordTag.innerHTML.split(""); //current text
    var deleteLetter = function() {
        if (charArr.length > 0) {
            charArr.pop(); //pop off last letter
            wordTag.innerHTML = charArr.join(""); //rewrite the text
            setTimeout(deleteLetter, delay / 2);
        }
        else {
            currentWord = (currentWord + 1) % words.length; //increment currentWord
            setTimeout(typeWord, 1000); //wait a second, then call typeWord
            return false;
        }
    }
    deleteLetter(); //start deleting
    
}
typeWord(); //kick off the typing loop!

// PROJECT TEXT SWAPPING
const miningRigButton = document.getElementById("miningRig");
const linguisticsButton = document.getElementById("linguistics");
const piClusterButton = document.getElementById("piCluster");
const cardGameButton = document.getElementById("cardGame");

let activeButton = linguisticsButton;
let projectText = document.getElementById("projectText");
function swapProjectText(name) {
    //remove active class
    activeButton.classList.remove("active");
    switch (name) {
        case "linguistics":
            projectText.innerHTML = "In may of whatever i did this camp";
            linguisticsButton.classList.add("active");
            activeButton = linguisticsButton;
            break;
        case "miningRig":
            projectText.innerHTML = "In 2021 i built this big computer :3";
            miningRigButton.classList.add("active");
            activeButton = miningRigButton;
            break;
        case "piCluster":
            projectText.innerHTML = "WIP";
            piClusterButton.classList.add("active");
            activeButton = piClusterButton;
            break;
        case "cardGame":
            projectText.innerHTML = "Card Game";
            cardGameButton.classList.add("active");
            activeButton = cardGameButton;
            break;
        default:
            console.error(`Error finding project named ${name}`);
    }
}

body.onload = function() { swapProjectText("cardGame") }; //set default project text

miningRigButton.onclick = function() { swapProjectText("miningRig"); };
linguisticsButton.onclick = function() { swapProjectText("linguistics"); };
piClusterButton.onclick = function() { swapProjectText("piCluster"); };
cardGameButton.onclick  = function() { swapProjectText("cardGame"); };

// Open my resume when you click the resume button!

let resumeButton = document.getElementById("resume");
resumeButton.onclick = function() { window.open('https://url.com', '_blank').focus(); };

//add technologies and tools!
//image resolution should be 80px!
let techDiv = document.getElementById("techDiv");
function addTech(name, link, imageURL) {
    let cardDiv = document.createElement("div");
    techDiv.appendChild(cardDiv);
    cardDiv.setAttribute("class", "card");
    cardDiv.onclick = function() { window.open(link, '_blank').focus(); };

    let cardImg = document.createElement("img");
    cardImg.setAttribute("src", imageURL);
    cardDiv.appendChild(cardImg);

    let cardP = document.createElement("p");
    cardDiv.appendChild(cardP);
    cardP.innerHTML = name;
}

let size = 60;

addTech("C++", "https://isocpp.org/", `https://img.icons8.com/?size=${size}&id=mciovJOS9Auv&format=png&color=000000`);
addTech("Python", "https://python.org", `https://img.icons8.com/?size=${size}&id=pIJdjOoL6KfU&format=png&color=000000`);
addTech("BurpSuite", "https://portswigger.net/burp", `https://img.icons8.com/?size=${size}&id=25250&format=png&color=000000`)

// capture mouse movement (for card effect)

// let width = window.innerWidth; //yes these should be declared at the top but I havent used these until now soooo
// let height = window.innerHeight;

// let x, y;

// let cardToTilt;

// function captureMouse() {
//     document.addEventListener('mousemove', (event) => {
//         x = event.clientX - (width / 2);
//         y = event.clientY - (height / 2);
//         if (!cardToTilt){
//             return;
//         }
//         tilt(cardToTilt);
//     });
// }

// function tilt(card) {
//     let force = 150; //how much the card moves :) 
//     rx = (x / width) * force;
//     ry = (y / height) * -force;
    
//     card.setAttribute('style', `transform: rotateY(${rx}deg) rotateX(${ry}deg);`)
// }

// captureMouse();