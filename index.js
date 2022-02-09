var masterContainer = document.querySelector("#master-container");
window.addEventListener("resize", onWindowResize);
window.addEventListener("load", onLoad);

//general resize logic
function onWindowResize() {
    resposiveLogic();
}

function onLoad() {
    resposiveLogic();
}

function resposiveLogic() {
    if (window.innerWidth <= 1366 && window.innerWidth > 760) {
        
    }
    else if (window.innerWidth <= 760) {
    }
}