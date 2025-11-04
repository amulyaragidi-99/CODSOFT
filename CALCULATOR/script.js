function append(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function deleteChar() {
    let text = document.getElementById("display").value;
    document.getElementById("display").value = text.slice(0, -1);
}
function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("dispaly").value = "Error";
    }
}