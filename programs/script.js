// Converting Hours Into Seconds
function hoursInSeconds() {
    let hours = document.getElementById("hours").value;
    let result = parseInt(hours)*60*60;
    document.getElementById("hoursResult").value=result;
}
// Converting Age into Days
function ageInDays() {
    let age = document.getElementById("age").value;
    let result = parseInt(age)*365;
    document.getElementById("ageResult").value = result;
}
//Getting Input for Inverting Numbers in an Array
function invertArray() {
    let arrNum = [];
    let negArray=[];
    let output;
    let getNum = document.getElementById("invert").value;
    if(parseInt(getNum)== '0'){
        output = document.getElementById("invertResult").value = "Zero is not allowed"
    }
    else
    arrNum.push(parseInt(getNum));
        for (let index = 0; index < arrNum.length; index++) {
            negArray[index]=arrNum[index]*(-1);
            }
        for (let index = 0; index < negArray.length; index++) {
            
            output = document.getElementById("invertResult");
            output.value = negArray[index];
            console.log(output.value);
        }
     }
    //  Checking the Length of a string
    var strOne="";
    var strTwo="";
function inputString() {
let firstString = document.getElementById("String");
strOne = firstString.value;
firstString.value = "";
let secondString = document.getElementById("String");
strTwo = secondString.value;
console.log(strOne,strTwo);
console.log(strOne.length,strTwo.length);
checkString(strOne,strTwo);

}
function checkString(strOne,strTwo) {
    let result;
    if(strOne.length === strTwo.length){

      result=  document.getElementById("resultString").value = "Both Have Equal Length";
    }
    
    else{
       result = document.getElementById("resultString").value = "Both Have Different Length";
    }
}
// Converting Integers to string
function intToString() {
let result = document.getElementById("intResult");
let arrValue= document.getElementById("integers").value;
let arrIntString = [];
arrIntString.push(arrValue);
for (let index = 0; index < 5; index++) {
    toString(arrIntString[index]);
    
}
for (let index = 0; index < arrIntString.length; index++) {
    result.value = arrIntString[index];
    
}
}
// Checking Leap year
function leapCheck() {
    let leapYear = document.getElementById("leap").value;
    let result = document.getElementById("leapResult");
    let reminder = parseInt(leapYear)%4;
    if (reminder === 0) {
        result.value = "It is a Leap Year";
        }
    else{
        result.value = "It is Not a Leap Year";
    }
}
// Function to check ending of Covid-19 in days
function coronaCaseEval() {
    let calculate;
    let result = document.getElementById("coronaResult")
    let arc =parseInt(document.getElementById("recoveredCases").value);
    let anc = parseInt(document.getElementById("newCases").value);
    let ac =parseInt(document.getElementById("activeCases").value);
    if (arc<anc) {
        alert("New Cases Cannot Be More than Recovered Cases");
        }
        else{
            calculate =Math.ceil(ac/(arc-anc));
            result.value = `${calculate} Days to End Corona`;
            

            }
        }