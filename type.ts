// Simple Types
let num: number = 10;
let str: string = "Hello";
let isActive: boolean = true;

// Array
let arr: number[] = [1, 2, 3];

// Tuple
let tuple: [string, number] = ["Age", 21];

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;

// Any (special type)
let value: any = "Hello";
value = 100;

// Unknown (special type)
let data: unknown = "Test";

// Void
function show(): void {
    console.log("No return");
}

// Never
function error(): never {
    throw new Error("Error occurred");
}

console.log(num, str, isActive, arr, tuple, c, value);