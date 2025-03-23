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
//image resolution should be _____

function addTech(name, link, imageURL) {
    
}