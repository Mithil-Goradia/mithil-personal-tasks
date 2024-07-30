document.addEventListener("DOMContentLoaded", function() {
    const tasks = 8; // Number of tasks

    for (let i = 1; i <= tasks; i++) {
        let rad = document.getElementById(`rad${i}`);
        let text = document.getElementById(`text${i}`);
        rad.addEventListener("change", function() {
            if (rad.checked) {
                text.style.textDecoration = "line-through";
            } else {
                text.style.textDecoration = "none";
            }
        });
    }

    document.getElementById("resetButton").addEventListener("click", function() {
        for (let i = 1; i <= tasks; i++) {
            document.getElementById(`rad${i}`).checked = false;
            let text = document.getElementById(`text${i}`);
            text.value = "";
            text.style.textDecoration = "none";
        }
    });
});
