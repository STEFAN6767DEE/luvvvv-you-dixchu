function checkAnswer(answer) {

    const result = document.getElementById("result");

    if (answer === "potta") {

        result.textContent = "✅ CORRECT!";

        result.style.color = "limegreen";

        // Open the classified photo page in a new tab
        window.open("kumar.html", "_blank");

    } else {

        result.textContent = "❌ WRONG ANSWER! TRY AGAIN.";

        result.style.color = "red";

    }

}