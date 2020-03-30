// Jonathan Witting Jakhammer
// 18/3 - 2020

// ------------------------------------------------------------------------------------------------------------------------

//#region Checker-Functions
function isOddNumber(pOddNum) { return (pOddNum % 2) == 1; } // Om Modulus 2 av (Possible-Odd-Number) == 1: return True
//#endregion Checker-Functions

// ------------------------------------------------------------------------------------------------------------------------

function calcResult(a, b, operatorType) {
    var cResult = 0;

    if (operatorType == "+") {
        cResult = a + b;
    }
    else if (operatorType == "-") {
        cResult = a - b;
    }
    else if (operatorType == "*") {
        cResult = a * b;
    }
    else if (operatorType == "/") {
        cResult = a / b;
    }
    else if (operatorType == "%") {
        cResult = b / a;
        cResult *= 100;
    }


    return cResult;
}

function getResult(resetData=false) {
    finalResult = null;
    var curOpType = document.getElementById("calcOperator").innerText;
    var curA = document.getElementById("calcA").innerText;
    var curB = document.getElementById("calcB").innerText;

    finalResult = calcResult(parseFloat(curA), parseFloat(curB), curOpType);

    if (resetData) {
        if (document.getElementById("calcA").innerText.length > 0 && document.getElementById("calcB").innerText.length > 0) {
            var newValue = getResult();
            document.getElementById("cWindowValue").innerText = newValue;
            // Resetar datan för framtida uträkningar
            document.getElementById("calcA").innerText = newValue;
            document.getElementById("calcOperator").innerText = "";
            document.getElementById("calcB").innerText = "";
        }
    }
    else {
        return finalResult;
    }
}

function updateCalcField(paramList, operation="Add_Item") {
    var pLen = paramList.length;
    var cCalcWindow = document.getElementById("cWindowValue").innerText;

    if (operation == "Add_Item") {
        if (cCalcWindow == "0") {
            // Tar bort nollan om fönstret bara innehåller en nolla
            // Det finns en nolla som default i fönstret eftersom att jag inte ville lämna det tomt innan beräkningarna
            document.getElementById("cWindowValue").innerText = paramList[0];
        }
        else {
            var newItemToAdd = null;

            if (paramList[1] == "Parenthesis") {
                var parenAmount = document.getElementById("parenthesisAmount").innerText;
                parenAmount = parseInt(parenAmount);
                alert(parenAmount);

                if (isOddNumber(parenAmount)) { newItemToAdd = ")"; }
                else { newItemToAdd = "("; }

                var newParenAmount = parenAmount + 1;
                document.getElementById("parenthesisAmount").innerText = newParenAmount;
            }
            else { newItemToAdd = paramList[0]; }

            // Lägger till det som finns i param till fönstret
            document.getElementById("cWindowValue").innerText = cCalcWindow + newItemToAdd;
        }

        // Spara värdet för framtida uträkning
        if (paramList[1] == "Number") {
            if (document.getElementById("calcOperator").innerText.length > 0) {
                document.getElementById("calcB").innerText += paramList[0];
            }
            else {
                document.getElementById("calcA").innerText += paramList[0];
            }
        }
        else if (paramList[1] == "Operator") {
            if (document.getElementById("calcOperator").innerText == "") {
                document.getElementById("calcOperator").innerText = paramList[0];
            }
            else {
                // Uppdaterar fönstrets värde då det finns tillräckligt med info för en uträkning
                if (document.getElementById("calcA").innerText.length > 0 && document.getElementById("calcB").innerText.length > 0) {
                    var newValue = getResult();
                    document.getElementById("cWindowValue").innerText = newValue + paramList[0];
                    // Resetar datan för framtida uträkningar
                    document.getElementById("calcA").innerText = newValue;
                    document.getElementById("calcOperator").innerText = paramList[0];
                    document.getElementById("calcB").innerText = "";
                }
            }
        }
        else if (paramList[1] == "Dot") {
            // Lägger till en punkt (comma-tecken) i datan för den framtida uträkningen
            if (document.getElementById("calcA").innerText.length > 0 && document.getElementById("calcOperator").innerText.length > 0) {
                document.getElementById("calcB").innerText += ".";
            }
            else {
                document.getElementById("calcA").innerText += ".";
            }
        }
    }
    else if (operation == "Del_Item") {

        // Tog bort detta för tillfället då jag kanske inte vill ha kvar det
        // if (document.getElementById("cWindowValue").innerText.length == 1 || document.getElementById("cWindowValue").innerText.length <= 0) {
        //     // Lägger till en nolla om fönstret är tomt
        //     document.getElementById("cWindowValie").innerText = 0;
        //     alert("here");
        // }

        // Tar bort den sista karaktären i fönstret
        document.getElementById("cWindowValue").innerText = cCalcWindow.substring(0, cCalcWindow.length - 1);
    }
    else if (operation == "Reset") {
        document.getElementById("cWindowValue").innerText = 0;
        // Resetar datan för framtida uträkningar
        document.getElementById("calcA").innerText = "";
        document.getElementById("calcOperator").innerText = "";
        document.getElementById("calcB").innerText = "";
        document.getElementById("parenthesisAmount").innerText = "0";
    }
}

// ------------------------------------------------------------------------------------------------------------------------
// Det nedan är för en möjlig framtida uppdatering med mera funktioner (Fortsätter med den om jag hinner)
//#region Possible Future-Update

// function calcResult(a, b, operatorType) {
//     var cResult = 0;

//     if (operatorType == "+") {
//         cResult = a + b;
//     }
//     else if (operatorType == "-") {
//         cResult = a - b;
//     }
//     else if (operatorType == "*") {
//         cResult = a * b;
//     }
//     else if (operatorType == "/") {
//         cResult = a / b;
//     }

//     return cResult;
// }

// function getResult() {
//     finalResult = null;
//     var curOpType = document.getElementById("calcOperator").value;
//     var curA = document.getElementById("calcA").value;
//     var curB = document.getElementById("calcB").value;

//     finalResult = calcResult(parseFloat(curA), parseFloat(curB), curOpType);

//     alert(finalResult);
// }

// function getResult() {
//     var calcString = document.getElementById("UserCalcString").value;

//     var operatorList = ["+", "-", "*", "/"];
//     var variableList = ["x", "y", "z", "a"];
//     var numberList   = ["0"]

//     var tokenTypeList = [];
//     var calculatedResultsList = [];
//     var finalResult = 0;

//     var tokenList = calcString.split(" ");

//     for (posTok in tokenList) {
//         var curTokType = null;

//         if (posTok in operatorList) {
//             curTokType = ["Operator", posTok];
//         }
//         else if (posTok in variableList) {
//             curTokType = ["Variable", posTok];
//         }
//         else if (!(isNaN(posTok))) {
//             curTokType = ["Number", posTok]
//         }

//         if (curTokType != null) {
//             tokenTypeList.push(curTokType);
//         }
//     }

//     for (let i = 0; i < tokenTypeList.length; i++) {
//         const tok = tokenTypeList[i];
//         var curResult = null;
        
//         if (tok[0] == "Operator") {
//             var opType = tok[1];
            
//             var curA = parseFloat(tokenTypeList[i - 1]);
//             var curB = parseFloat(tokenTypeList[i + 1]);
//             curResult = calcResult(curA, curB, opType);
            
//         }

//         if (curResult != null) {
//             calculatedResultsList.push(curResult);
//         }
//     }

//     for (let c_i = 0; c_i < calculatedResultsList.length; c_i++) {
//         const cR = calculatedResultsList[c_i];
//         finalResult = finalResult + cR;
//     }

//     alert(calculatedResultsList[0]);

//     // alert(finalResult);
//     // return finalResult;
// }

//#endregion Possible Future-Update