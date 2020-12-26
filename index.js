// find and remove smallest element in array
function findMinAndRemoveSorted(array){
     return array.shift()
}

// merge function to combine two sorted arrays into larger array
function merge(arrOne, arrTwo) {
     let sorted = []
     while (arrOne.length != 0 && arrTwo.length != 0) {
          if (arrOne[0] < arrTwo[0]) {
               sorted.push(findMinAndRemoveSorted(arrOne)) 
          } else {
               sorted.push(findMinAndRemoveSorted(arrTwo))
          }
     }
     return sorted.concat(arrOne).concat(arrTwo)
}

// implement mergeSort algo using prev functions 

function mergeSort(arr){
     let midpoint = arr.length/2
     let firstHalf = arr.slice(0, midpoint)
     let secondHalf = arr.slice(midpoint, arr.length)
     let sorted;
     
     if(arr.length < 2){
          return arr
     } else {
          sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
     }
     return sorted 
}