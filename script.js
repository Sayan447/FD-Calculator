// button

let div = document.querySelector("div")


let button = document.createElement("button")
button.innerText = "Calculate"
div.append(button)
button.style.fontSize = "15px"


// other part 
function calMaturityamount(){
    // get the value from the element

    const principle = parseFloat(document.getElementById("principle").value);

    const interestRate = parseFloat(document.getElementById("interestRate").value);

    const Tenure = parseFloat(document.getElementById("Tenure").value);


    // perform the calculation
    const maturityamount = principle * (principle * interestRate * Tenure) / 100;


    // display the result
    document.getElementById('result').innerText = `Maturity Amount ${maturityamount.toFixed(2)}`;
}


// attach the event lister to the button

document.querySelector('button').addEventListener('click',calMaturityamount); 