var score = 15

function answerA() {
    score = score + 2;
    console.log(score);
}

function answerB() {
    score = score + 1;
    console.log(score);
}

function answerC() {
    score = score + 3;
    console.log(score);
}

function answerD() {
    score = score + 5
    console.log(score)
}

function sortingHat(){
    if(score >= 33){
        console.log("Score:" + score + ". Congrats! You are a Slytherin!")
    }
    else if(score >= 21 && score < 33) {
        console.log("Score:" + score + ". Sorry, you are a Ravenclaw.")
    }
    else if(score >= 14 && score < 21) {
        console.log("Score:" + score + ". Sorry, you are a Hufflepuff.")
    }
    else {
        console.log("Score:" + score + ". Sorry, you are a Gryffindor.")
    }
}

sortingHat()