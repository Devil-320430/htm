let homeSection = document.getElementById("home");
let homeButton = document.getElementById("homeBtn");

let aboutSection = document.getElementById("about");
let aboutButton = document.getElementById("aboutBtn");

let contentSection = document.getElementById("content");
let contentButton = document.getElementById("contentBtn");

const hideAll  = () => {
    homeSection.classList.add("display-off");
    aboutSection.classList.add("display-off");
    contentSection.classList.add("display-off");
}

homeButton.onclick = () => {
    hideAll();
    homeSection.classList.remove("display-off");
};

aboutButton.onclick = () => {
    hideAll();
    aboutSection.classList.remove("display-off");
};

// contentButton.onclick = () => {
//     hideAll();
//     contentSection.classList.remove("display-off");
// };
