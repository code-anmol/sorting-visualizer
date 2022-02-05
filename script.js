let list = document.getElementById("list");
let length = 100;

let nums = generateRandomNumbers(length);

let listItems = [];
addListItems();



function addListItems(){

    for(let i = 0; i < length; i++){
        listItems[i] = document.createElement("li");
        listItems[i].innerHTML = "a";
        listItems[i].style.height = nums[i]+"px";
        list.append(listItems[i]);
    }

}


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