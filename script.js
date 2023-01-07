"use strict";

function checkCashRegister(price, cash, cid) {
  let changeDue = +(cash - price).toFixed(2);
  //   console.log(changeDue);
  //CREATE A COPY OF cid AND SORT IT FROM HIGHEST TO LOWEST
  const cidCopy = [];
  const sortFunction = function (val) {
    cid.forEach((element) => {
      if (element.includes(val)) {
        cidCopy.push(element);
      }
    });
  };
  sortFunction("ONE HUNDRED");
  sortFunction("TWENTY");
  sortFunction("TEN");
  sortFunction("FIVE");
  sortFunction("ONE");
  sortFunction("QUARTER");
  sortFunction("DIME");
  sortFunction("NICKEL");
  sortFunction("PENNY");
  //   console.log(cidCopy);

  //   const cidCopy = [...cid].reverse();

  // I)   IF THE EXACT CHANGE DUE CANNOT BE RETURNED

  let currNum = 0; //WILL BE USED TO CALCULATE THE NUMBER OF CURRENCY AVAILABLE FOR EACH TYPE CURRENCY;
  let numOfCurrInCid = []; //WILL BE USED TO STORE THE NUMBER OF CURRENCY AVAILABLE FOR EACH TYPE OF CURRENCY;
  for (let i = 0; i < cid.length; i++) {
    // CALCULATE THE NUMBER OF CURRENCY AVAILABLE FOR EACH TYPE CURRENCY
    if (cidCopy[i].includes("PENNY")) {
      currNum = cidCopy[i][1] / 0.01;
      numOfCurrInCid.push("PENNY", Math.round(currNum)); // STORE IN numOfCurrInCid THE NUMBER OF PENNY AVAILABLE IN numOfCurrInCid
    }
    if (cidCopy[i].includes("NICKEL")) {
      currNum = cidCopy[i][1] / 0.05;
      numOfCurrInCid.push("NICKEL", Math.round(currNum)); // STORE THE NUMBER OF NICKEL AVAILABLE
    }
    if (cidCopy[i].includes("DIME")) {
      currNum = cidCopy[i][1] / 0.1;
      numOfCurrInCid.push("DIME", Math.round(currNum)); // STORE IN numOfCurrInCid THE NUMBER OF DIME AVAILABLE
    }
    if (cidCopy[i].includes("QUARTER")) {
      currNum = cidCopy[i][1] / 0.25;
      numOfCurrInCid.push("QUARTER", Math.round(currNum)); // STORE IN numOfCurrInCid THE NUMBER OF QUARTER AVAILABLE
    }
    if (cidCopy[i].includes("ONE")) {
      currNum = cidCopy[i][1] / 1;
      numOfCurrInCid.push("ONE", Math.round(currNum)); // STORE IN numOfCurrInCid THE NUMBER OF ONE AVAILABLE
    }
    if (cidCopy[i].includes("FIVE")) {
      currNum = cidCopy[i][1] / 5;
      numOfCurrInCid.push("FIVE", Math.round(currNum)); // STORE IN numOfCurrInCid THE NUMBER OF FIVE AVAILABLE
    }
    if (cidCopy[i].includes("TEN")) {
      currNum = cidCopy[i][1] / 10;
      numOfCurrInCid.push("TEN", Math.round(currNum)); // STORE IN numOfCurrInCid THE NUMBER OF TEN AVAILABLE
    }
    if (cidCopy[i].includes("TWENTY")) {
      currNum = cidCopy[i][1] / 20;
      numOfCurrInCid.push("TWENTY", Math.round(currNum)); // STORE IN numOfCurrInCid THE NUMBER OF TWENTY AVAILABLE
    }
    if (cidCopy[i].includes("ONE HUNDRED")) {
      currNum = cidCopy[i][1] / 100;
      numOfCurrInCid.push("ONE HUNDRED", Math.round(currNum)); // STORE IN numOfCurrInCid THE NUMBER OF ONE HUNDRED AVAILABLE
    }
  }
  //   console.log(cidCopy);
  //   console.log(numOfCurrInCid);
  //   CREATE A COPY OF numOfCurrInCid THAT WILL BE USED IN (IV)
  const numOfCurrInCid2 = [...numOfCurrInCid];

  // CREATE A FUNCTION THAT WILL DETERMINE IF THE EXACT CHANGE DUE CAN BE RETURNED.
  const balanceAfterDeductionFunction = function () {
    let balance = changeDue; //WILL BE USED TO CALCULATE THE REMAINING AMOUNT OF CHANGE DUE AFTER DEDUCTING THE HIGHEST AVAILABLE CURRENCY
    //   DEDUCT ONE HUNDRED AS LONG AS IT IS POSSIBLE
    // console.log(numOfCurrInCid);
    while (
      balance / 100 >= 1 &&
      numOfCurrInCid[numOfCurrInCid.indexOf("ONE HUNDRED") + 1] > 0
    ) {
      balance = +(balance - 100).toFixed(2);
      numOfCurrInCid[numOfCurrInCid.indexOf("ONE HUNDRED") + 1]--;
      //   console.log(balance);
      //   console.log(numOfCurrInCid);
    }
    //   DEDUCT TWENTY AS LONG AS IT IS POSSIBLE
    while (
      balance / 20 >= 1 &&
      numOfCurrInCid[numOfCurrInCid.indexOf("TWENTY") + 1] > 0
    ) {
      balance = +(balance - 20).toFixed(2);
      numOfCurrInCid[numOfCurrInCid.indexOf("TWENTY") + 1]--;
      //   console.log(balance);
      //   console.log(numOfCurrInCid);
    }
    //   DEDUCT TEN AS LONG AS IT IS POSSIBLE
    while (
      balance / 10 >= 1 &&
      numOfCurrInCid[numOfCurrInCid.indexOf("TEN") + 1] > 0
    ) {
      balance = +(balance - 10).toFixed(2);
      numOfCurrInCid[numOfCurrInCid.indexOf("TEN") + 1]--;
      //   console.log(balance);
      //   console.log(numOfCurrInCid);
    }
    //   DEDUCT FIVE AS LONG AS IT IS POSSIBLE
    while (
      balance / 5 >= 1 &&
      numOfCurrInCid[numOfCurrInCid.indexOf("FIVE") + 1] > 0
    ) {
      balance = +(balance - 5).toFixed(2);
      numOfCurrInCid[numOfCurrInCid.indexOf("FIVE") + 1]--;
      //   console.log(balance);
      //   console.log(numOfCurrInCid);
    }
    //   DEDUCT ONE AS LONG AS IT IS POSSIBLE
    while (
      balance / 1 >= 1 &&
      numOfCurrInCid[numOfCurrInCid.indexOf("ONE") + 1] > 0
    ) {
      balance = +(balance - 1).toFixed(2);
      numOfCurrInCid[numOfCurrInCid.indexOf("ONE") + 1]--;
      //   console.log(balance);
      //   console.log(numOfCurrInCid);
    }
    //   DEDUCT QUARTER AS LONG AS IT IS POSSIBLE
    while (
      balance / 0.25 >= 1 &&
      numOfCurrInCid[numOfCurrInCid.indexOf("QUARTER") + 1] > 0
    ) {
      balance = +(balance - 0.25).toFixed(2);
      numOfCurrInCid[numOfCurrInCid.indexOf("QUARTER") + 1]--;
      //   console.log(balance);
      //   console.log(numOfCurrInCid);
    }
    //   DEDUCT DIME AS LONG AS IT IS POSSIBLE
    while (
      balance / 0.1 >= 1 &&
      numOfCurrInCid[numOfCurrInCid.indexOf("DIME") + 1] > 0
    ) {
      balance = +(balance - 0.1).toFixed(2);
      numOfCurrInCid[numOfCurrInCid.indexOf("DIME") + 1]--;
      //   console.log(balance);
      //   console.log(numOfCurrInCid);
    }
    //   DEDUCT NICKEL AS LONG AS IT IS POSSIBLE
    while (
      balance / 0.05 >= 1 &&
      numOfCurrInCid[numOfCurrInCid.indexOf("NICKEL") + 1] > 0
    ) {
      balance = +(balance - 0.05).toFixed(2);
      numOfCurrInCid[numOfCurrInCid.indexOf("NICKEL") + 1]--;
      //   console.log(balance);
      //   console.log(numOfCurrInCid);
    }
    //   DEDUCT PENNY AS LONG AS IT IS POSSIBLE
    while (
      balance / 0.01 >= 1 &&
      numOfCurrInCid[numOfCurrInCid.indexOf("PENNY") + 1] > 0
    ) {
      balance = +(balance - 0.01).toFixed(2);
      numOfCurrInCid[numOfCurrInCid.indexOf("PENNY") + 1]--;
      //   console.log(balance);
      //   console.log(numOfCurrInCid);
    }
    return +balance.toFixed(2);
  };
  // DETERMINE IF THE EXACT CHANGE DUE CAN BE RETURNED.
  const balanceAfterDeduction = balanceAfterDeductionFunction();
  if (balanceAfterDeduction !== 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // II)    IF CASH IN DRAWER IS LESS THAN THE CHANGE DUE
  //   CALCULTATE TOTAL AMOUNT OF CASH IN DRAWER
  let cashInDrawer = 0;
  for (let i = 0; i < cid.length; i++) {
    cashInDrawer += cid[i][1];
  }
  //   console.log(cashInDrawer);
  if (cashInDrawer < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // III)   IF CASH IN DRAWER IS EQUAL TO CHANGE DUE
  if (cashInDrawer === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  // IV IF CASH IN DRAWER IS MORE THAN THE CHANGE DUE AND CAN BE USED TO RETURNED THAT ENTIRE AMOUNT

  if (cashInDrawer > changeDue && balanceAfterDeduction === 0) {
    // console.log(numOfCurrInCid2);
    // console.log(numOfCurrInCid);
    let changeGiven = [];
    for (let i = 1; i < numOfCurrInCid.length; i += 2) {
      if (numOfCurrInCid[i] !== numOfCurrInCid2[i]) {
        let difference = numOfCurrInCid2[i] - numOfCurrInCid[i];
        switch (numOfCurrInCid[i - 1]) {
          case "ONE HUNDRED":
            changeGiven.push([numOfCurrInCid2[i - 1], difference * 100]);
            break;
          case "TWENTY":
            changeGiven.push([numOfCurrInCid2[i - 1], difference * 20]);
            break;
          case "TEN":
            changeGiven.push([numOfCurrInCid2[i - 1], difference * 10]);
            break;
          case "FIVE":
            changeGiven.push([numOfCurrInCid2[i - 1], difference * 5]);
            break;
          case "ONE":
            changeGiven.push([numOfCurrInCid2[i - 1], difference * 1]);
            break;
          case "QUARTER":
            changeGiven.push([numOfCurrInCid2[i - 1], difference * 0.25]);
            break;
          case "DIME":
            changeGiven.push([numOfCurrInCid2[i - 1], difference * 0.1]);
            break;
          case "NICKEL":
            changeGiven.push([numOfCurrInCid2[i - 1], difference * 0.05]);
            break;
          case "PENNY":
            changeGiven.push([numOfCurrInCid2[i - 1], difference * 0.01]);
            break;
        }
      }
    }
    // console.log(changeGiven);

    return { status: "OPEN", change: changeGiven };
  }
}
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
