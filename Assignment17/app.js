var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var button = document.getElementById("add");
var numArray = [];
var stringArray = [];
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    var n1 = num1.value;
    var n2 = num2.value;
    var result = add(+n1, +n2);
    numArray.push(result);
    console.log(result, numArray);
});
