const titleText = "🎉 Happy Birthday, Brother 💙";
const subtitleText = "Not by blood, but by heart. Always family.";

let i = 0;
let j = 0;

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const btn = document.getElementById("startBtn");

function typeTitle() {
    if (i < titleText.length) {
        title.innerHTML += titleText.charAt(i);
        i++;
        setTimeout(typeTitle, 90);
    } else {
        setTimeout(typeSubtitle, 700);
    }
}

function typeSubtitle() {
    if (j < subtitleText.length) {
        subtitle.innerHTML += subtitleText.charAt(j);
        j++;
        setTimeout(typeSubtitle, 45);
    } else {
        setTimeout(() => {
            btn.style.display = "inline-block";
        }, 1000);
    }
}

typeTitle();
