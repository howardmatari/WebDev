window.onload = function () {
    let images = document.querySelectorAll("img");
    let keys = document.querySelectorAll("input[type=checkbox]");
    

    for (let image of images) {
        image.addEventListener("click", imageClicked);
    }
    for (let key of keys) {
        document.addEventListener("onkeypress", keyPress);
    }
    
}
//object.onkeypress = function(){myScript};
//object.addEventListener("keypress", myScript);
// Best practices when manipulating element styles is to only manipulate their classes
function imageClicked(event) {
    let target = event.currentTarget;

    // We can stop all event propagation with the stopPropagation() method
    event.stopPropagation();
    if (target.classList.contains("expanded")) {
        target.classList.remove("expanded");
    }
    else {
        target.classList.add("expanded");
    }
}

function keyPress(event) {
    let key = event.target;
    

   
}


