const titleText = "🎉 Happy Birthday, Brother 💙";
const subtitleText = "You’re not my blood, but you’re family.";

let titleIndex = 0;
let subtitleIndex = 0;

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const button = document.querySelector(".btn");

function typeTitle() {
    if (titleIndex < titleText.length) {
        title.innerHTML += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 80);
    } else {
        setTimeout(typeSubtitle, 600);
    }
}

function typeSubtitle() {
    if (subtitleIndex < subtitleText.length) {
        subtitle.innerHTML += subtitleText.charAt(subtitleIndex);
        subtitleIndex++;
        setTimeout(typeSubtitle, 50);
    } else {
        setTimeout(() => {
            button.style.display = "inline-block";
        }, 800);
    }
}

typeTitle();
