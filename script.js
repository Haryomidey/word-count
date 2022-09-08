
const wordCount = document.querySelector(".count-word");
const textField = document.getElementById("word");
const btn = document.querySelector("button");

function countWord() {
    let text = textField.value;
    text = text.trim()
    let splitted = text.split(" ");
    if (splitted[0] === "") {
        wordCount.innerText = 0;
    }
    else {
        wordCount.innerText = splitted.length;
    }
}

btn.addEventListener("click", function(){
    textField.value = "";
    wordCount.innerText = 0;
})