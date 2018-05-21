function toggleMenu(){
    var element = document.querySelector(".menu");
    element.classList.toggle("show");
    // element = document.querySelector(".fade");
    // element.classList.toggle("showFade");
}

function expandClassList(divId) {
    var element = document.getElementById("l" + divId[1]);
    element.classList.toggle("expand");
}
