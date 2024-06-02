// Given an array nums with n objects colored red, white, or blue, sort them in -place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.
// Example 1:                                                   // Example 2:
// Input: nums = [2, 0, 2, 1, 1, 0]                             // Input: nums = [2, 0, 1]
// Output: [0, 0, 1, 1, 2, 2]                                   // Output: [0, 1, 2]

// const nums = [2, 0, 2, 1, 1, 0]

// void sortColors(int[] nums) {

//     int start = 0;
//     int middle = 0;
//     int end = nums.length - 1;

//     while (middle <= end) {

//         switch (nums[middle]) {
//             case 0:  // swap w/start index
//                 swap(nums, start, middle);
//                 middle++;
//                 start++;
//                 break;

//             case 1:
//                 middle++;
//                 break;

//             case 2: //Swap w/ end index
//                 swap(nums, middle, end);
//                 end--;
//                 break;
//         }
//     }
// }

// private void swap(int[] arr, int pos1, int pos2) {
//     int temp = arr[pos1];
//     arr[pos1] = arr[pos2];
//     arr[pos2] = temp;
// }


// those 2 function will return the same result  NOOO afer return js will add ; if the {} or () isn't present
// function foo1() 
// {
//     return {
//         bar: "hello"
//     };
// }
//https://www.youtube.com/watch?v=zBaLx8g5qNw
// function foo2() 
// {
//     return  // here the parser will add the ; and is the end of the logical statement so is wrong 
//     {
//         bar: "hello"
//     };
// }  // this is undefine w/0 showing any errors engine won't bother invoking the rest of the function that's why it's still good practice to add in semicolons at the end of your

// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();
// HOISTING X is define Twice first on line one and again on line four the variable defined on line one is available globally because it's not in a function and the variable X defined on line 4 is only available inside the girl function we know that inside the girl function we also have access access to the global scope if you remember the scope chain resolution rules of JavaScript but it's not going to bother checking the global scope if it's already found an instance of the variable defined locally so you're thinking the answer is probably going to be 20 right but wait not so fast you can see here that we're using the X variable on line 3 before it's being declared on line four by the time we're actually using the variable on line three we haven't actually initialized it yet so at the time that we're console logging X the value of x is still undefined due to JavaScript hoisting so the answer to this question isn't 20 or 21 it's undefined alright

// for (var i = 0; i < 5; i++) {   //chx var for let is a block scope
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }
// timeout instead what actually happens here is that the console is going to print out the number five five times why is that so this is because set timeout actually waits for the for Loop to finish looping before it runs whatever
// is in the Callback function which is
// just logging I to the console by the
// time the loop has finished looping bar I
// will equal five the reason set timeout
// Waits For The Loop to finish looping is
// because set timeout is an asynchronous
// function provided to you by the browser
// some asynchronous functions can take a
// long time to finish for example like an
// API call that downloads a resource from
// a remote server and we don't want the
// rest of the code to be blocked while
// waiting for that to complete right one
// way to fix this problem is to use the
// let keyword which was introduced in es6

// a closure remembers the variables and scope of the outer function even after the outer function has finished running
function urlFormatter(url) {  //each function create its own scope
    const protocol = 'http';

    return function () {
        console.log(protocol);
        console.log(`${protocol}://${url}`);
    };
}
console.log(protocol); //Reference error
