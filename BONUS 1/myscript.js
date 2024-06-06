const fizzbuzz = document.querySelector(".container");

for (let i=1; i <= 100; i++) {
    //creo costante che quando chiamata crei un elemento div dove richiesto
    const elementBox = document.createElement("div");
    //aggiungo all'elemento "elementBox" la variabile "i"
    elementBox.append(i);
    // aggiungo all'interno dell'elemento "fizzbuzz" la variabile "elementBox"
    fizzbuzz.appendChild(elementBox);

}