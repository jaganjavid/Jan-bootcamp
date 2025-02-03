

// For loop

// Loop can execute a block of code number of times

// for(let i = 0; i <= 10; i++){

//     if(i === 2){
//         console.log(`${i} is a good number`);
//         continue;
//     }

//     if(i === 5){
//         console.log(`${i} stop i hits 5`);
//         break;
//     }


//     console.log(i);
// }

const arr = ["Hello", 1, 2, 3, true];

// console.log(arr.length);

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

arr.forEach(function(el, index, arr){
    console.log(`${index} - ${el}`);

    console.log(arr);
})