function convert() {
    let temp = document.getElementById("temp").value;
    let result;

    if (document.getElementById("cetk").checked) {
        temp = Number(temp);
        result = temp + 273.15;
        result = Math.floor(result);
        document.getElementById("show").textContent = `${result} K`;
    } 
    else if (document.getElementById("ktce").checked) {
        temp = Number(temp);
        result = temp - 273.15;
        result = Math.floor(result);
        document.getElementById("show").textContent = `${result} °C`;
    } 
    else if (document.getElementById("cetf").checked) {
        temp = Number(temp);
        result = (temp*(9/5))+32;
        result = Math.floor(result);
        document.getElementById("show").textContent = `${result} °F`;
    } 
    else if (document.getElementById("ftce").checked) {
        temp = Number(temp);
        result = (temp-32)*(5/9);
        result = Math.floor(result);
        document.getElementById("show").textContent = `${result} °C`;
    } 
}
function resetFields() {
    document.getElementById("temp").value = '';
    document.getElementById("show").textContent = '';
    document.getElementById("cetf").checked = false;
    document.getElementById("ftce").checked = false;
}


