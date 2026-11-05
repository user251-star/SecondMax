function SecondMax(arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    let secondMax = null; 
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < max && arr[j] > secondMax) {
            secondMax = arr[j];
        }
    }
    return secondMax;
}

 console.log(SecondMax([-6,7,8,7]))


 

