document.addEventListener("DOMContentLoaded", function () {
    const wrappers = document.querySelectorAll(".video_wrapper");

    wrappers.forEach(wrapper => {
        const video = wrapper.querySelector("video");
        const card = wrapper.querySelector(".card");

        if (video && card) {
            video.addEventListener("loadeddata", () => {
                card.style.visibility = "visible";
                card.style.opacity = "1";
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("carouselExampleCaptions").style.visibility = "visible";
    document.getElementById("carouselExampleCaptions").style.opacity = "1";
});

setTimeout(() => {
    alert("Welcome to my humble front-end project!");
}, 2000);

function btnClicked() {
    console.log("Button Clicked!");
}

var toggle = false;
var Interval = null
function helloEverySecond() {
    if (!toggle) {
        toggle = true;
        Interval = setInterval(() => {
            console.log("Hello!")
        }, 1000);
    } else {
        toggle = false;
        clearInterval(Interval);
        Interval = null;
    }
}

function changeBgColor() {
    document.querySelector("nav").style.backgroundColor = "aqua";
    document.querySelector("footer").style.backgroundColor = "aqua";
}