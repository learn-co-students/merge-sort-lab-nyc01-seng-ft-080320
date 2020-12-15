function findMinAndRemoveSorted(array){
    return array.shift() //.shift() is a javascript method that destructively removes the FIRST element from an array 
}

function merge(firstSubarray, secondSubArray){
    let sorted = []
    while(firstSubarray.length != 0 && secondSubArray.length != 0){ //while BOTH subarrays are NOT empty 
        if(firstSubarray[0] < secondSubArray[0]){   //if the first element in firstSubarray is less than the first element in secondSubarray
            sorted.push(findMinAndRemoveSorted(firstSubarray))  //destructively push the first element in the array from firstSubarray to sorted
        } else {    
            sorted.push(findMinAndRemoveSorted(secondSubArray)) // if the condition on line 8 isn't met, destructively push the first element in secondSubarray to sorted
        }
    } //the loop ends when either the first or second Subarray are destructively modified to the point of being empty. 
    return sorted.concat(firstSubarray).concat(secondSubArray) //sorted is then appended with whatever is left of the two subarrays (which will either be nothing or whatever elements still remain)
    // function merge(x, y) effectivley returns a sorted merged array, given two sorted arrays. 
}   

function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    let sorted 
    if(array.length < 2){
        return array 
    }else{
        sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sorted 
}
