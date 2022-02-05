let list = document.getElementById("list");
let length = 20;

let nums = generateRandomNumbers(length);
console.log(nums);



function generateRandomNumbers(length){
    let nums = [];

    for(let i = 0; i < length ; i++){
        nums[i] = Math.floor(Math.random() * (300 - 20 + 1)) + 20;
    }

    return nums;
}