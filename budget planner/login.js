let confirm = document.getElementById("confirm");
let income = document.getElementById("inc");
let rent = document.getElementById("ren");
let savings = document.getElementById("sav");
let lao = document.getElementById("lao");

confirm.onclick = function() {
    let user = document.getElementById("usr").value;
    document.querySelector(".log + h3").textContent = `Hi ${user}! Enter your personal details`;
};

function GetInfo(income, rent, savings, loans) {
    this.income = income;
    this.rent = rent;
    this.savings = savings;
    this.loans = loans;
}

function enterButton() {
    let info = new GetInfo(income.value, rent.value, savings.value, lao.value);
    localStorage.setItem('userInfo', JSON.stringify(info));
    window.location.href = 'index.html';
}
