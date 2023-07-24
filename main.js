'use strict'
let main = true;

while (main){
  let userChoice = prompt("What task u wanna to check?\n1)Task1;     2)Task2;     3)Task3;     4)Task4     5)Quit;");

  switch (userChoice) {
    case '1':
      alert("TASK1 (find nemo in the string)");
      task1();
      break;
  
    case '2':
      alert("TASK2(find nemo in the arr)");
      task2();
      break;


    case '3':
      alert("TASK3(find nemo in objects)");
      task3();
      break;
    
    case '4':
      alert("TASK4(function should take arr and arguments and swap it)");
      task4();
      break;
    
      case '5':
      main = false;
      break;
      
    default:
      break;
  }
}


function task1() {
  //TASK1 (find nemo in the string)
  
  let str = "gvhbjnkmnemofvgbhunijmknemofvgbhjmenogbhnnemo";
  
  let nemo = 'nemo';
  let isRunning = true;
  let findNemoStr = 0;
  
  function findNemoStrFunc(str) {
    for (let i = 4; i < str.length;){
      if (str.indexOf(nemo) !== -1){
        let sliceStr = str.indexOf(nemo) + nemo.length;
        findNemoStr += 1;
        str = str.slice(sliceStr);
      }
      else {
        return findNemoStr;
      }
    }
  }
  
  findNemoStrFunc(str);
  
  console.log("In str -", str, findNemoStr, "nemo");  
}

function task2() {
  //TASK2(find nemo in the arr)
  
  let arr = ["not nemo" , "not nemo" , "nemo" , "not nemo", "not nemo" , "nemo"];
  let findNemoArr = 0;
  
  function findNemoArrFunc(arr) {
    for (let arrI = 0; arrI < arr.length; arrI++){
      if (arr[arrI] === "nemo"){
        findNemoArr += 1;
      }
    }
  }
  
  findNemoArrFunc(arr);
  
  console.log("In arr -", arr, findNemoArr, "nemo");
}

function task3() {
  //TASK3(find nemo in objects)
  
  const nemoObj = {
    name : {
        firstName : {
            fullName : {
                realName : {
                    name : "Nemo"
                }
            }
        }
    }
  }
  
  findNemoInObj(nemoObj)
  
  function findNemoInObj(obj) {
    for (let key in obj){
      if (typeof(obj[key]) === 'object'){
        console.log(obj[key]);
        findNemoInObj(obj[key]);
      }
      else {
        console.log('Here is nemo ' + obj[key]);
      }
    }
  }
}

function task4() {
  //TASK4(function should take arr and arguments and swap it)
  
  let userArr = [];
  let newUserArr;
  let isElementForArr = false;
  let isSwap = true;
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
  
    while (isSwap){
    let swapOrNo = prompt("Would u like to swap elements in arr?");
  
    if (swapOrNo[0].toLowerCase() === 'y'){
        let firstElemToSwap = parseInt(prompt("Enter index of first elem which u want to swap\n arr = "+ userArr));
        let secondElemToSwap = parseInt(prompt("Enter index of second elem which u want to swap\n arr = " + userArr));
        
        [userArr[firstElemToSwap], userArr[secondElemToSwap]] = [userArr[secondElemToSwap], userArr[firstElemToSwap]];
        console.log(userArr);
  
      } else isSwap = false;
    }
  }
}
