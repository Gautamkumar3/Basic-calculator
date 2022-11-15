var key = document.querySelectorAll(".button>div");

for (var i = 0; i < key.length; i++) {
    key[i].addEventListener("click", getValue)
}

var bag = "";
function getValue() {
    var targetNum = event.target.innerText;
    if (targetNum == "c") {
        bag = ""
        document.querySelector(".display").innerText = "";
    } else if (targetNum == "=") {
        if (bag == "") {
            document.querySelector(".display").innerText = ""
        } else {
            document.querySelector(".display").innerText = eval(bag);
        }

    }
    else {
        bag = bag + targetNum;
        document.querySelector(".display").innerText = bag
    }
}