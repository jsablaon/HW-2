// definitions
let userInputs = [];
let startButton;
let shuffleButton;
let shuffledLetters = [];



// event listeners DOM contents
startButton = document.querySelector("#start");
startButton.addEventListener("click", PromtUser, false);

shuffleButton = document.querySelector("#shuffleButton");
shuffleButton.addEventListener("click", SwapLetters, false);


// functions
function LoadWordsTwo(){
    console.log("in LoadWordsTwo()...");
    let ul = document.createElement('ul');
    document.getElementById('initialScreen').appendChild(ul);
    for(let i=0; i< userInputs.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = userInputs[i];
    };
}

function PromtUser(){
    while(userInputs.length < 3){
        userInputs.push(prompt("Enter a word..."));
        console.log("userInputs.length = " + userInputs.length);
    }

    LoadWordsTwo();
    // hides start swapping button and displays the second screen
    initialButton.style.display = "none";
    shuffleButton.style.display = "block";
}

function SwapLetters(){
    console.log("in SwapLetters()...");
    shuffledLetters = userInputs.map(function(oneWord) {
        return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); 
    });

    console.log("shuffledLetters array count = " + shuffledLetters.length);
    shuffledLetters.forEach(element => {
        console.log(element);
    });

    // hides initial screen and shuffle letter button
    initialScreen.style.display = "none";
    shuffleButton.style.display = "none";
    secondScreen.style.display = "block";

    let ul = document.createElement('ul');
    ul.setAttribute("id","secondUl");
    document.getElementById('secondScreen').appendChild(ul);
    for(let i=0; i< shuffledLetters.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = shuffledLetters[i];
    };

}

// usage/entry point
//LoadWordsTwo();


