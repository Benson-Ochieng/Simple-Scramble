const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
confirmBtn = document.querySelector(".confirm-word");

let correctWord, timer;

const initTimer = maxTime =>{
    clearInterval(timer);
    timer = setInterval(() =>{
        if(maxTime > 0) {
            maxTime--;//maxTime decreament by -1
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Time off! ${userWord.toUpperCase()} was the correct word`);
        initGame();//calling initGame function,so the game restarts
    },1000)
}

const initGame = () => {
    initTimer(30);//calling initTimer func with passing 30 as maxTime value
    let randomObj = words[Math.floor(Math.random() * words.length)]; //getting random objects from words.
    let wordArray = randomObj.word.split(""); //splitting each letter of random word.
    for (let i = wordArray.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1)); //getting random number.
        //shuffling and swiping wordArray letters randomly.
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");//passing shuffled word as text
    hintText.innerText = randomObj.hint //passing random object hint as hint text
    correctWord = randomObj.word.toLocaleLowerCase();//passing random word to correct word
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);//setting input maxlength attribute value to word length
}
initGame();

const checkWord = () =>{
    let userWord = inputField.value.toLocaleLowerCase();//getting user value
    if(!userWord) return alert("Please enter a word and confirm"); //if user did not enter anything

    //if userword is not correct
    if(userWord !== correctWord) return alert(`Oops ${userWord} is not a correct word`);

    //if userword is correct
    alert(`Hurray! ${userWord.toUpperCase()} is the correct word`);
    initGame();
}

refreshBtn.addEventListener("click", initGame);
confirmBtn.addEventListener("click", checkWord);


//extensive code for the "for" shorthand code above

// for (let i = wordArray.length - 1; i > 0; i--){
//     let j = Math.floor(Math.random() * (i + 1));
//     let temp = wordArray[i];
//     wordArray[i] = wordArray[j];
//     wordArray[j] = temp;
// }