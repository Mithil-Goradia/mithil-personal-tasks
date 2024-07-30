let count = 0; // To keep track of the number of clicks
let selectedCards = []; // To store the selected card values

// Function to handle the GO button click event
document.getElementById("go").onclick = function() {
    if (selectedCards.length !== 3) {
        alert("You must select exactly 3 cards before proceeding.");
        return;
    }

    // Generate random numbers for the three cards for the computer
    let num1 = Math.floor(Math.random() * 6) + 1;
    let show1 = "card" + num1 + ".png";
    document.querySelectorAll(".computer .pile2 img")[0].setAttribute("src", show1);

    let num2 = Math.floor(Math.random() * 6) + 1;
    let show2 = "card" + num2 + ".png";
    document.querySelectorAll(".computer .pile2 img")[1].setAttribute("src", show2);

    let num3 = Math.floor(Math.random() * 6) + 1;
    let show3 = "card" + num3 + ".png";
    document.querySelectorAll(".computer .pile2 img")[2].setAttribute("src", show3);
    
    var N = num1+num2+num3;

    // Calculate and display the sum of the selected card values
    let sum = selectedCards.reduce((acc, curr) => acc + curr, 0);
    if(sum>N){
        document.getElementById("ans").textContent = `Player Wins`
    } else {
        document.getElementById("ans").textContent = `Computer Wins`
    }
};

let cardButtons = document.querySelectorAll(".add");

// Add event listeners to all card buttons
cardButtons.forEach(button => {
    button.onclick = function() {
        if (count < 3) {
            count++;
            let cardValue = parseInt(this.id.substring(1)); // Get the card value from the button id
            selectedCards.push(cardValue);
            this.disabled = true; // Disable the button after it's clicked
        }
    };
});

// Clear the selections and reset everything
document.getElementById("clear").onclick = function() {
    count = 0;
    selectedCards = [];
    document.getElementById("ans").textContent = '';
    cardButtons.forEach(button => {
        button.disabled = false;
    });

    // Reset the computer's cards to default
    document.querySelectorAll(".computer .pile2 img").forEach(img => {
        img.setAttribute("src", "card0.png");
    });
};
