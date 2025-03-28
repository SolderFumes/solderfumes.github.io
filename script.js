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

//check user agent for mobile/desktop
let userAgent = navigator.userAgent;
let regexp = /andriod|iphone|kindle|ipad/i;
// if youre on mobile pls switch :)
if (regexp.test(userAgent)) {
    alert("This website has been optimized for dekstop, and the mobile experience is suboptimal. Please switch to desktop for the best experience :D");
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
            projectText.innerHTML = "<h2>Computation Linguistics Camp</h2>In the summer of 2023 I attended a computational linguistics camp at the University of North Texas. The camp consisted of 40 hours of study under Ph. D students concerning AI/ML and it’s application to linguistics. We got to configure and train an instance of the Tensorflow Keras model using the Natural Language Toolkit to predict one’s gender based on their name.<br><p class='caption'>See the code <a href=https://colab.research.google.com/drive/12692mQ5zB1QLhyEJ7whEcaH4Vs-cy5On?usp=sharing target='_blank'>here!</a> I was very early in my Computer Science career at the time, so the code may not be beautiful.</p> Thanks to this opportunity, I was able to get some great experience in Jupyter, Tensorflow, and Python in general :D";
            linguisticsButton.classList.add("active");
            activeButton = linguisticsButton;
            break;
        case "miningRig":
            projectText.innerHTML = "<h2>Mining Rig</h2>To preface, I don’t believe that for-profit crypto mining is an ethical business. That being said, I totally ran up my fossil fuel powered electricity bill in 2021 (Eighth grade for me! Wow!) running a 6-GPU Ethereum mining rig. Being above the age of thirteen now, I would likely not recreate this project, but I did learn a lot! Heres a little bit about the rig:<br><br>The rig is powered by a 1200W server power supply, an old refurbished ASUS Prime Z390-P motherboard with six PCIe slots, an Intel i3-9100F, and some cheap 8gig RAM stick from aliexpress. Doing the actual mining is three RTX 3060tis, two RTX 3060s, and an RTX 3070 Super, which were all purchased for EXORBITANT $800 or higher price tags (each GPU lost about $500 in resale value after 1 year). The rig ran HiveOS (hiveon.com), which is a custom closed-source Linux distribution that allowed very easy web-based remote access and performance monitoring.<br><br><video width='270px' height='480px' controls><source src='/images/video.mp4' type='video/mp4'></video><p class='caption'>An early version of the mining rig featuring 13 year old Luka</p><br><br>Let’s talk about a hardware-related oddity that came with this rig: The motherboard has two PCIe X16 slots, which are the full size ones that you likely have in your desktop, and four PCIe X1 slots, which are about a quarter of the size and cannot fit a standard GPU without our first odd item: PCIe risers! As you can see in the video, the GPUs are not actually sitting on the motherboard, but on a bar. This is achieved through PCIe risers that act as adapters between the X16 and X1 slots and are powered via USB 3.0 or a 4-pin power connector from the server PSU.<br><br>One of the biggest concerns with any big computer is cooling. One of the biggest concerns for a sweaty person living in North Texas during the summer is also cooling. Unlike a real data center, I do not have multiple air conditioning units meticulously cooling all of my components. However! I did have my family’s shared office with one <a href='https://www.homedepot.com/p/RYOBI-ONE-18V-Cordless-Hybrid-WHISPER-SERIES-7-1-2-in-Fan-Tool-Only-PCL811B/318754250' target='_blank'>Ryobi cordless fan</a> and a <b>huge</b> and <b>very loud</b> fan fitted to the window to allow for better ventilation. This did help enough to prevent thermal bottlenecking, but I definitely recommend against putting your torturously hot 1200W mining rig right next to your everyday workstation in one of the hottest states in the US.<br><br>In the end, I gained a ton of valuable knowledge from this project and am super grateful to have gotten this opportunity in middle school! <br><br>P.S: Don’t trust a middle schooler when they give you a business idea, this project lost at least four figures.";
            miningRigButton.classList.add("active");
            activeButton = miningRigButton;
            break;
        case "piCluster":
            projectText.innerHTML = "<h2>Pi Cluster</h2>Note: This project is still a work-in-progress, but stay tuned for updates!<br><br>Starting in late March 2025, I’ve been building a Raspberry Pi computing cluster! The cluster is comprised of four Raspberry Pi 4b’s: One head/control node, and three compute nodes. The network topology is shown below.<br><br><img src='/images/picluster.drawio.png'><p class='caption'>The network topology of the cluster</p><br><br>The head node acts as the DHCP, DNS, and NFS server for the network. Network boot using TFTP is currently a WIP and currently the Pis all boot off of microSD cards. This project has given me some much needed practical networking experience with the protocols above, and once it’s done, my goal is to learn about running Kubernetes on the cluster!"
            piClusterButton.classList.add("active");
            activeButton = piClusterButton;
            break;
        case "cardGame":
            projectText.innerHTML = "<h2>C++ Card Game</h2>In December of 2024, I made a card game in C++ for my Computer Science Foundations II course at Cal Poly Humboldt. If you want to know how to play the game, there are instructions in the <a href=https://github.com/SolderFumes/InfoSec-Card-Game-GUI/>github repo!</a> The game uses the SDL2 library to handle all of the graphics. All of the programming was done over a period of about one week.<br><br>The visuals could use a bit of an overhaul although I think there’s a bit of a charm to the pixel art that I drew using a trackpad at an ungodly hour of the night/morning 😁. ";
            cardGameButton.classList.add("active");
            activeButton = cardGameButton;
            break;
        default:
            console.error(`Error finding project named ${name}`);
    }
}

body.onload = function() { swapProjectText("miningRig") }; //set default project text

miningRigButton.onclick = function() { swapProjectText("miningRig"); };
linguisticsButton.onclick = function() { swapProjectText("linguistics"); };
piClusterButton.onclick = function() { swapProjectText("piCluster"); };
cardGameButton.onclick  = function() { swapProjectText("cardGame"); };

// Open my resume when you click the resume button!

let resumeButton = document.getElementById("resume");
resumeButton.onclick = function() { window.open('/images/luka_schuller_resume.pdf', '_blank').focus(); };

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
addTech("BurpSuite", "https://portswigger.net/burp", `https://img.icons8.com/?size=${size}&id=25250&format=png&color=000000`);
addTech("Java", "https://java.com", `https://img.icons8.com/?size=${size}&id=FBycNmdwUQz1&format=png&color=000000`);
addTech("Linux", "https://linux.org", `https://img.icons8.com/?size=${size}&id=104289&format=png&color=000000`)
addTech("Metasploit", "https://metasploit.com", `https://img.icons8.com/?size=${size}&id=PW0ChfedZvTh&format=png&color=000000`);
addTech("Vim", "https://www.vim.org", `https://img.icons8.com/?size=${size}&id=7XSgvKh878Kn&format=png&color=000000`)
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