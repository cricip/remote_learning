function run() {

    firstCol = document.getElementById("first").value;
    secondCol = document.getElementById("second").value;
    thirdCol = document.getElementById("third").value;
    fourthCol = document.getElementById("fourth").value;

    displayError = document.querySelectorAll('span')[0];
    displayResult = document.querySelectorAll('span')[1];

    if (isInt(firstCol) && isInt(secondCol) && isInt(thirdCol) && isInt(fourthCol)) {
		result = parseInt(firstCol) + parseInt(secondCol) + parseInt(thirdCol)  * parseInt(fourthCol);
        displayResult.innerHTML = parseInt(result);
        displayError.innerHTML = 'No error';
    } else {
        displayResult.innerHTML = 'No result';
        displayError.innerHTML = 'Please insert only integer numbers!';
    }

    if (firstCol==null || firstCol=="", secondCol==null || secondCol=="", thirdCol==null || thirdCol=="", fourthCol==null || fourthCol=="")
    {
        displayError.innerHTML = 'Please fill all the fields!';
    }
}

function isInt(number) {
    /* NaN=Not-a-Number */
    return !isNaN(number) && (function(x) { return (x | 0) === x; }) (parseFloat(number));
}


