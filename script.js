let list = document.getElementById("list");
let length = 10;

let nums = generateRandomNumbers(length);

let swappingIndexes = [];

let listItems = [];
addListItems();

console.log(nums);


function quicksortAnimation(){



}

function changeColor(array , i, color){
    array[i].style.backgroundColor = color;
}

function animateSwap(array , i, j){
    let temp = array[i].style.height;
    array[i].style.height = array[j].style.height;
    array[j].style.height = temp;
}


function isSorted(nums){
    let isSorted = true;

    for(let i = 1; i < nums.length ; i++)
        if(nums[i - 1] > nums[i])
            return false;

    return isSorted;

}


function quicksort(array, low , high){
    if(high <= low) return;
    let j = partition(array, low, high);
    quicksort(array, low, j-1);
    quicksort(array, j+1, high);
    
    
}

function sort(){
    return quicksortHelper(nums);
}


function quicksortHelper(array){
    return quicksort(array, 0, array.length-1);
}

function partition(array, low, high){
    let pivot = array[low];
    let i = low;
    let j = high+1;

    while(true){

        while(less( array[++i], pivot ))
            if(i == high ) break;

        while(less(pivot, array[--j]))
            if(j == low) break;

        if(i >= j) break;

        swappingIndexes.push([i , j]);

        swap(array, i , j);


    }
    swappingIndexes.push([low , j]);
    swap(array, low, j);

    return j;
    


}

function swap(array, i , j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function less(a,b){
    return a < b;
}

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