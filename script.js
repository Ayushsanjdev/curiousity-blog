// creating function for mobile navigation to work

function toggleMobileNavigation() {
    var element = document.getElementById("mobile-nav");

    if (element.classList.contains("mobile-nav-open")) {

        element.classList.remove("mobile-nav-open");
    } else {
        element.classList.add("mobile-nav-open");
    }
}

// for navbar after media query



function dummyNotification() {
    alert("Its a dummy blog");
}
var click = document.getElementById("dummy").addEventListener("click", dummyNotification());