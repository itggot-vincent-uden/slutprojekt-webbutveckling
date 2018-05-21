function toggleMenu(){
    var element = document.querySelector(".menu");
    element.classList.toggle("show");
    // element = document.querySelector(".fade");
    // element.classList.toggle("showFade");
}

function expandClassList(divId) {
    var classList = document.getElementById("l" + divId[1]);
    classList.classList.toggle("expand");

    var button = document.getElementById(divId);
    if (button.children[1].style.transform === "rotate(180deg)") {
        button.children[1].style.transform = "";
    } else {
        button.children[1].style.transform += "rotate(180deg)";
    }
}
