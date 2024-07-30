let count = 0;
let totalCost = 0;
let coffeeList = [];
const modes = (type) => {
    let mode = type;
    document.getElementById("types").textContent = `Type = ${mode}`;
}

const addToCart = (name, cost) => {
    count += 100;  
    totalCost += cost;
    coffeeList.push(name);

    document.getElementById("amt").textContent = `Amount = ${count}mg`;
    document.getElementById("name").textContent = `Coffee purchased = ${coffeeList.join(', ')}`;
    document.getElementById("cost").textContent = `Cost = ₹${totalCost}`;
};

document.getElementById("fv").onclick = () => addToCart("French Vanilla", 450);
document.getElementById("ah").onclick = () => addToCart("American Hazelnut", 400);
document.getElementById("cf").onclick = () => addToCart("Chennai Filter", 400);
document.getElementById("ec").onclick = () => addToCart("English Classic", 350);
document.getElementById("jc").onclick = () => addToCart("Java Chip", 450);
document.getElementById("ml").onclick = () => addToCart("Mumbai Local", 450);
document.getElementById("bf").onclick = () => addToCart("Black Forest", 450);
document.getElementById("ap").onclick = () => addToCart("Arabic Palate", 450);
document.getElementById("hc").onclick = () => addToCart("Hot Chocolate", 450);
document.getElementById("gr").onclick = () => modes("Ground");
document.getElementById("wb").onclick = () => modes("Whole-Beans");
document.getElementById("in").onclick = () => modes("Instant");
document.getElementById("fi").onclick = () => modes("Filter");

document.getElementById("done").onclick = function() {
    count = 0;
    totalCost = 0;
    coffeeList = [];

    document.getElementById("amt").textContent = `Amount = `;
    document.getElementById("name").textContent = `Coffee purchased = `;
    document.getElementById("cost").textContent = `Cost = `;
    document.getElementById("types").textContent = `Type = `;
    document.getElementById("upiImage").style.display = "none";
    document.getElementById("contactImage").style.display = "none";
};

document.getElementById("upi").onclick = function() {
    document.getElementById("upiImage").style.display = "block";
    document.getElementById("contactImage").style.display = "none"; // Ensure contact image is hidden
};

document.getElementById("cont").onclick = function() {
    var contactImage = document.getElementById("contactImage");
    if (contactImage.style.display === "none" || contactImage.style.display === "") {
        contactImage.style.display = "block";
        document.getElementById("upiImage").style.display = "none"; // Ensure UPI image is hidden
    } else {
        contactImage.style.display = "none";
    }
};


document.getElementById("scrollToBill").onclick = function() {
    document.getElementById("bill").scrollIntoView({ behavior: 'smooth' });
};
