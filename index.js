
//Implement a function that first finds and removes the smallest element in a sorted array.

function findMinAndRemoveSorted(array) {
   return array.shift()
}


//Implement the merge function to combine two sorted arrays into one larger array.
// function findAndRemove(array1, array2) {
//     let minFirst = array1[0]
//     let minSecond = array2[0]

//     if (minFirst < minSecond) {
//         return findMinAndRemoveSorted(array1)
//     } else {
//         return findMinAndRemoveSorted(array2)
//     }
// }

// function merge(array1, array2) {
//     let array = [];

//     while(array1.length !== 0 && array2.length !== 0) {
//        let min = findAndRemove(array1, array2)
//        array.push(min)
//     }

//     return array.concat(array1).concat(array2)
// }


function merge(subArray1, subArray2){
    let sortedArray = []

    while(subArray1.length !== 0 && subArray2.length !== 0){
      if(subArray1[0] < subArray2[0]){
        sortedArray.push(findMinAndRemoveSorted(subArray1))
      } else {
        sortedArray.push(findMinAndRemoveSorted(subArray2))
      }
    }
    return sortedArray.concat(subArray1).concat(subArray2)
  }

//Implement the mergeSort algorithm using the previous functions that you wrote.
function mergeSort(array) {
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
     
    if (array.length < 2) {
        return array
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}