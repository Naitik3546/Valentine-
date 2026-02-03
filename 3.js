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
function startFireworks() {
    for (let i = 0; i < 30; i++) {
        setTimeout(createFirework, i * 120);
    }
}

function createFirework() {
    for (let i = 0; i < 12; i++) {
        const spark = document.createElement("div");
        spark.className = "firework";

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight / 1.5;

        spark.style.left = x + "px";
        spark.style.top = y + "px";
        spark.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;

        document.body.appendChild(spark);

        setTimeout(() => spark.remove(), 1200);
    }
}

