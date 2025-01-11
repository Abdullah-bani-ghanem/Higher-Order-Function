//q1

//for
// function For(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(Math.pow(2, arr[i]));
//     }
//     return result;
// }

// //foreach
// function forEach(arr) {
//     let result = [];
//     arr.forEach(num => {
//         result.push(Math.pow(2, num));
//     });
//     return result;
// }

// //map
// function Map0(arr) {
//     return arr.map(num => Math.pow(2, num));
// }


// const input = [1, 2, 3];
// console.log("Using for loop:", For(input));
// console.log("Using forEach:", forEach(input));
// console.log("Using map:", Map0(input));


//////////////////////////////////////////////////////////////////////

//q2
// function numbers(arr) {
//     return arr.map(item => {
//         if (typeof item !== 'number') {
//             return "N/A";
//         }
//         return item % 2 === 0 ? "even" : "odd";
//     });
// }

// const input = [13, 8, 5, "ghawanmeh"];
// console.log(numbers(input));


/////////////////////////////////////////////

//q3
// function name(arr) {
//     let names = [];
//     arr.forEach(name => {
//         names.push(name);
//     });
//     return names;
// }

// const input = ["abood", "ahmad", "Hind", "Muhammad", "lena"];
// console.log(name(input)); 


//////////////////////////////////////////////////

//q4
function fizzBuzz(arr) {
    let output = [];
    arr.forEach(num => {
        if (num % 3 === 0 && num % 5 === 0) {
            output.push("Fizz Buzz");
        } else if (num % 3 === 0) {
            output.push("Fizz");
        } else if (num % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(num);
        }
    });
    return output;

}

const input = [1, 3, 5, 15, 4, 9, 10];
console.log(fizzBuzz(input)); 
