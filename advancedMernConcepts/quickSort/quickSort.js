const testArray = [31 , 21 , 28 , 72 , 41 , 73 , 93 , 68 , 43 , 45 , 78 , 5 , 17 , 97 , 71 , 69 , 61 , 88 ]


// TO END 
function quickSortToEnd(arr, start, end){
    if(end <= start){
        return arr
    }

    let pivot = placePivot(arr, start, end)

    quickSortToEnd(arr, start, pivot - 1)
    quickSortToEnd(arr, pivot+1, end)

}

function placePivot(arr, start, end){
    let pivot = arr[end]

    let i = start -1

    for(let j = start; j<= end - 1; j++){
        if(arr[j] < pivot){

            i++

            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
    }
    i++ 
    let temp = arr[i]
    arr[i] = arr[end]
    arr[end] = temp
    
    return i
}

quickSortToEnd(testArray,0,testArray.length-1)
console.log(testArray)

// TO MIDDLE
function quickSortToMiddle(arr, left, right) {
    if(left >= right){
        return
    }

    const pivot = placePivot2(arr, left, right)

    quickSortToMiddle(arr, left, pivot-1)
    quickSortToMiddle(arr, pivot , right)
}


function placePivot2(arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)];

    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}

quickSortToMiddle(testArray, 0, testArray.length-1)
console.log(testArray)