import React from 'react';

function App() {

    let numberToFix = prompt("Please give a number you want to fix");
    let decimalPlaces = prompt("Please give me the number of decimal places you want:");

    function fix(number1,number2) {
        let divideBy = Math.pow(10,number2);
        number1 = Math.round(number1 * divideBy) / divideBy;
        return "" + number1;
    }

    let finalNumber = fix(numberToFix,decimalPlaces);

    let indexOfDot = finalNumber.indexOf(".");

    if (indexOfDot===-1) {
        finalNumber = finalNumber + ".";
        indexOfDot = finalNumber.indexOf(".");
    }

    if ((finalNumber.length - indexOfDot - 1) < decimalPlaces && finalNumber.indexOf(".")===finalNumber.length-1) {
        finalNumber = finalNumber + "0".repeat(decimalPlaces);
    } else {
        finalNumber = finalNumber + "0".repeat(decimalPlaces - (finalNumber.length - indexOfDot - 1));
    }

    /*

     */

    document.write(numberToFix + " fixed to " + decimalPlaces + " decimal places is ");
    document.write(finalNumber + ".");

    return (
        <div>
        </div>
    );
}

export default App;
