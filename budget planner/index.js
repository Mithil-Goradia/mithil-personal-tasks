let travel = document.getElementById("trav");
let food = document.getElementById("fo");
let edu = document.getElementById("edu");
let medical = document.getElementById("med");
let entertainment = document.getElementById("ent");
let shopping = document.getElementById("sho");
let unex = document.getElementById("une");

// Function to calculate the expenses
function calculate() {
    
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));

    let totalExpenses = parseFloat(travel.value) + parseFloat(food.value) + parseFloat(edu.value) +
                        parseFloat(medical.value) + parseFloat(entertainment.value) + parseFloat(shopping.value) +
                        parseFloat(unex.value) + parseFloat(userInfo.rent);

    
    let savedAmount = parseFloat(userInfo.income) - totalExpenses;
    let highestExpense = Math.max(parseFloat(travel.value), parseFloat(food.value), parseFloat(edu.value),
                                  parseFloat(medical.value), parseFloat(entertainment.value), parseFloat(shopping.value),
                                  parseFloat(unex.value));
    let minSavings = (parseFloat(userInfo.income) * 0.2).toFixed(2);
    let finalSavings = (savedAmount - parseFloat(userInfo.loans)).toFixed(2);
    let safeInvestment = (finalSavings * 0.5).toFixed(2);

    // Display the results
    document.getElementById('savedAmount').textContent = savedAmount.toFixed(2);
    document.getElementById('expenditureAmount').textContent = totalExpenses.toFixed(2);
    document.getElementById('highestExpense').textContent = highestExpense.toFixed(2);
    document.getElementById('minSavings').textContent = minSavings;
    document.getElementById('finalSavings').textContent = finalSavings;
    document.getElementById('safeInvestment').textContent = safeInvestment;
}


document.getElementById("calc").onclick = calculate;
