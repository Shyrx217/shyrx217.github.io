const biggerButton = document.getElementById("bigger");
const fancyButton = document.getElementById("fancy");
const boringButton = document.getElementById("boring");
const mooButton = document.getElementById("moo");

function bigger() {
    document.getElementById("insert").style.fontSize = "24pt";
}

function fancy() { //makes the text bold, underlined, and blue
    document.getElementById("insert").style.fontWeight = "bold";
    document.getElementById("insert").style.textDecoration = "underline";
    document.getElementById("insert").style.color = "blue";
}

function boring() { //makes the text normal
    document.getElementById("insert").style.fontWeight = "normal";
    document.getElementById("insert").style.textDecoration = "none";
    document.getElementById("insert").style.color = "black";
}

function moo() { //uppercases the text and adds "-Moo" to the end of each sentence
    var add = "-Moo";
    var textArea = document.getElementById("insert");
    var text = textArea.value;
    var sentences = text.split(".");

    text = (sentences.map(function(sentence) { //mini function that performs the desired edits
        return sentence.trim().toUpperCase() + add;
    })).join(". ");

    textArea.value = text;
    
}

//event listeners
biggerButton.addEventListener("click", bigger);
mooButton.addEventListener("click", moo);
fancyButton.addEventListener("change", fancy);
boringButton.addEventListener("change", boring);