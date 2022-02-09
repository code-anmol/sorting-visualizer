let list = document.getElementById("list");
let length = parseInt(document.getElementById("array-length").value);

let nums = generateRandomNumbers(length);

let swappingIndexesQuickSort = [];
let swappingIndexes = [];

let listItems = [];
addListItems();

function mergeSortAnimation(array, indices){
 let intervalId = setInterval(animate, 20);

    let i = 0;
    let length = indices.length * 3;
    let index = 0;


    function animate(){
        index = Math.floor(i/3);

        if(i == length){
            clearInterval(intervalId);
            return;
            
        }else if(i % 3 == 0){

            changeColor(array, indices[index][0], "red");
                        
        }else if(i % 3 == 1){
                
            listItems[indices[index][0]].style.height = indices[index][1] + "px";
            
        }else{
            changeColor(array, indices[index][0], "steelblue");
            
        }
        
        i++;

    }

}


function merge(array, aux, low, mid, high){
    for(let k = 0; k<= high; k++){
        aux[k] = array[k];
    }

    let i = low;
    let j = mid + 1;

    for(let k = low; k <= high; k++){
        if(i > mid){
            swappingIndexes.push([k, aux[j]]);
            array[k] = aux[j++];
            
        }else if( j > high) {
            
            swappingIndexes.push([k, aux[i]]);
            array[k] = aux[i++];
            
        }else if(less(aux[j], aux[i])){
            
            swappingIndexes.push([k, aux[j]]);
            array[k] = aux[j++];
        }
        else {
            
            swappingIndexes.push([k, aux[i]]);
            array[k] = aux[i++];
        }  
    }
}

function mergeSort(array, aux, low, high){
    if(high <= low) return;
    let mid = Math.floor(low + (high - low) / 2);
    mergeSort( array, aux, low, mid);
    mergeSort(array, aux, mid + 1, high);
    merge(array, aux, low, mid, high);
}

function mergeSortHelper(array){
    let aux = new Array(array.length);
    mergeSort(array, aux, 0, array.length -1);
}

function animateQuickSort(array , indices){
    let intervalId = setInterval(animate, 20);

    let i = 0;
    let length = indices.length * 3;
    let index = 0;


    function animate(){
        index = Math.floor(i/3);

        if(i == length){
            clearInterval(intervalId);
            return;
            
        }else if(i % 3 == 0){

            changeColor(array, indices[index][0], "red");
            changeColor(array, indices[index][1], "red");
            
        }else if(i % 3 == 1){
             
            
            animateSwap(array, indices[index][0], indices[index][1]);
            
        }else{
            changeColor(array, indices[index][0], "steelblue");
            changeColor(array, indices[index][1], "steelblue");
        }
        
        i++;

    }

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
    quicksortHelper(nums);
    animateQuickSort(listItems, swappingIndexesQuickSort);
}
function sort2(){
    mergeSortHelper(nums);
    mergeSortAnimation(listItems, swappingIndexes);
    
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

        swappingIndexesQuickSort.push([i , j]);

        swap(array, i , j);


    }
    swappingIndexesQuickSort.push([low , j]);
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
        listItems[i].innerHTML = ".";
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