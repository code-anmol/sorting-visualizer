let list = document.getElementById("list");
let length = 20;

let nums = generateRandomNumbers(length);

let listItem = document.createElement("li");
let listItem2 = document.createElement("li");
listItem.innerHTML = "a";
listItem2.innerHTML = "a";
listItem.style.height = nums[0]+"px";
listItem2.style.height = nums[1]+"px";

list.appendChild(listItem);
list.appendChild(listItem2);






function generateRandomNumbers(length){
    let nums = [];

    for(let i = 0; i < length ; i++){
        nums[i] = Math.floor(Math.random() * (300 - 20 + 1)) + 20;
    }

    return nums;
}

function reloadPage(){
    location.reload();
}