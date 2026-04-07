// Simple Types
let num = 10;
let str = "Hello";
let isActive = true;
// Array
let arr = [1, 2, 3];
// Tuple
let tuple = ["Age", 21];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
// Any (special type)
let value = "Hello";
value = 100;
// Unknown (special type)
let data = "Test";
// Void
function show() {
    console.log("No return");
}
// Never
function error() {
    throw new Error("Error occurred");
}
console.log(num, str, isActive, arr, tuple, c, value);
