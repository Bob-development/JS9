'use strict'

//TASK1 (find nemo in the string)

// let str = "gvhbjnkmnemofvgbhunijmknemofvgbhjmenogbhnnemo";

// let nemo = 'nemo';
// let isRunning = true;
// let findNemoStr = 0;

// function findNemoStrFunc(str) {
//   for (let i = 4; i < str.length;){
//     if (str.indexOf(nemo) !== -1){
//       let sliceStr = str.indexOf(nemo) + nemo.length;
//       findNemoStr += 1;
//       str = str.slice(sliceStr);
//     }
//     else {
//       return findNemoStr;
//     }
//   }
// }

// findNemoStrFunc(str);

// console.log("In str -", str, findNemoStr, "nemo");


//TASK2(find nemo in the arr)

// let arr = ["not nemo" , "not nemo" , "nemo" , "not nemo", "not nemo" , "nemo"];
// let findNemoArr = 0;

// function findNemoArrFunc(arr) {
//   for (let arrI = 0; arrI < arr.length; arrI++){
//     if (arr[arrI] === "nemo"){
//       findNemoArr += 1;
//     }
//   }
// }

// findNemoArrFunc(arr);

// console.log("In arr -", arr, findNemoArr, "nemo");

//TSK3(find nemo in objects)
// let findNemoInObj = false;

// const nemoObj = {
//   name : {
//       firstName : {
//           fullName : {
//               realName : {
//                   name : "Nemo"
//               }
//           }
//       }
//   }
// }

// while (!findNemoInObj){
  
// }

// console.log(nemoObj.name);

//TASK4(function should take arr and arguments and swap it )

let userArr = [];
let newUserArr;
let isElementForArr = false;
let isSwap = false;
let elemI = -1;

takeAndSwap()
console.log(userArr);


function takeAndSwap() {
  let elementsForArr = prompt("Enter elements for array separated by commas:");

  while (!isElementForArr){
    elemI += 1;
    let elementsForArrI = elementsForArr[elemI];
    
    if (elemI > elementsForArr.length - 2){
      isElementForArr = true;
    }

    if (elementsForArrI !== ','){
      if (isNaN(elementsForArrI)){
        userArr.push(elementsForArrI)
      }
      else {
        elementsForArrI = parseInt(elementsForArrI);
        userArr.push(elementsForArrI);
      }
    }
  }

  let swapOrNo = prompt("Would u like to swap elements in arr?");

  if (swapOrNo[0].toLowerCase() === 'y'){
    while (!isSwap){
      let firstElemToSwap = parseInt(prompt("Enter index of first elem which u want to swap\n arr = ",userArr));
      
    }
  } else return;
}
