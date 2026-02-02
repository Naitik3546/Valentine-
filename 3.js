const noBtn = document.getElementById("noBtn");
const main = document.getElementById("main");
const yesPage = document.getElementById("yesPage");

function moveNo() {
    const x = Math.random() * 250;
    const y = Math.random() * 200;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

function yesClick() {
    main.classList.add("hidden");
    yesPage.classList.remove("hidden");
    startFireworks();
    startRoses();   // 🌹 ADD THIS LINE
}


function startRoses() {
    for (let i = 0; i < 15; i++) {
        setTimeout(createRose, i * 300);
    }
}

function createRose() {
    const rose = document.createElement("div");
    rose.className = "rose";
    rose.innerHTML = "🌹";

    rose.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(rose);

    setTimeout(() => rose.remove(), 4000);
}
