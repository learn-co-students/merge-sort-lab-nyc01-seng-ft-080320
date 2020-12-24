//1. find and remove smallest element

function findMinAndRemoveSorted(array){
  let min = array[0],
      minIndex = 0;
  for(let i = 1; i < array.length; i++ ){
    if(array[i] < min){
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex,1);
  return min;
}

//2. merge two sorted arrays
function merge(arr1, arr2){
  // console.log('merge', arr1, arr2)
  let i = 0,
      j = 0,
      k = 0;
  const sol = [];
  while(i < arr1.length && j < arr2.length){
    // console.log('in first while')
    if( arr1[i] < arr2[j] ){
      // console.log(arr1[i],'is smaller');
      sol[k++] = arr1[i++];
    }else{
      // console.log(arr2[i],'is smaller');
      sol[k++] = arr2[j++];
    }
  }
  while(i < arr1.length){
    sol[k++] = arr1[i++];
  }
  while(j < arr2.length){
    sol[k++] = arr2[j++];
  }
  // console.log('merge Solution', sol);
  return sol;
}

//3. merge sort algo
function mergeSort(arr){
  console.log(arr);
  if(arr.length < 2)
    return arr;
  else{
    let mid = arr.length/2;
    let midLeft = arr.slice(0, mid);
    let midRight = arr.slice(mid, arr.length)
    
    // console.log(midLeft, midRight);
    
    return merge(mergeSort(midLeft), mergeSort(midRight));
  }
}