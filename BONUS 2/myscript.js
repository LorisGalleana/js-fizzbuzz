const fizzbuzz = document.querySelector(".container");

for (let i=1; i <= 100; i++) {
    //creo costante che quando chiamata crei un elemento div dove richiesto
    const elementBox = document.createElement("div");
    //aggiungo all'elemento "elementBox" la variabile "i"
    elementBox.append(i);
    //aggiungo a tutti gli "elementBox" la classe box
    elementBox.classList.add("box")

    if ( i % 15 === 0) {
        elementBox.innerHTML = "fizzbuzz";
        elementBox.classList.add("fizzbuzz")
        console.log("fizzbuzz");
    }
    //creo una condizione per cui al posto della variabile "i", il codice scriva in console la parola "fizz" per i numeri che sono multipli di 3 
    else if ( i % 3 === 0) {
        elementBox.innerHTML = "fizz";
        elementBox.classList.add("fizz")
        console.log("fizz");
    }
    //creo una condizione per cui al posto della variabile "i", il codice scriva in console la parola "buzz" per i numeri che sono multipli di 5 
    else if ( i % 5 === 0) {
        elementBox.innerHTML = "buzz";
        elementBox.classList.add("buzz")
        console.log("buzz");
    }
    //creo una condizione per cui al posto della variabile "i", il codice scriva in console il valore della var "i" per tutti i numeri che non rientrano nelle condizioni precedente 
    else  {
        elementBox.append(i)
        console.log(i);
    }





    // aggiungo all'interno dell'elemento "fizzbuzz" la variabile "elementBox"
    fizzbuzz.appendChild(elementBox);

}