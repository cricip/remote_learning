function run() {

    firstCol = document.getElementById("first").value;
    secondCol = document.getElementById("second").value;
    thirdCol = document.getElementById("third").value;
    fourthCol = document.getElementById("fourth").value;

    displayError = document.querySelectorAll('span')[0];
    displayResult = document.querySelectorAll('span')[1];

    if (isNaN(firstCol) && isNaN(secondCol) && isNaN(thirdCol) && isNaN(fourthCol)) {
        displayResult.innerHTML = 'No result';
        displayError.innerHTML = 'Please insert only integer numbers!';
    } else {
        result = parseInt(firstCol) + parseInt(secondCol) + parseInt(thirdCol) * parseInt(fourthCol);
        displayResult.innerHTML = parseInt(result);
        displayError.innerHTML = 'No error';
    }
}