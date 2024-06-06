//creo un ciclo che aumenti la var "i" di 1 ad ogni ciclo finchè non raggiunge 100
for (let i=1; i<=100; i++) {
    //creo una condizione per cui al posto della variabile "i", il codice scriva in console la parola "fizzbuzz" per i numeri che sono multipli sia di 3 che di 5 usando l'm.c.m 15
    if ( i % 15 === 0) {
        console.log("fizzbuzz");
    }
    //creo una condizione per cui al posto della variabile "i", il codice scriva in console la parola "fizz" per i numeri che sono multipli di 3 
    else if ( i % 3 === 0) {
        console.log("fizz");
    }
    //creo una condizione per cui al posto della variabile "i", il codice scriva in console la parola "buzz" per i numeri che sono multipli di 5 
    else if ( i % 5 === 0) {
        console.log("buzz");
    }
    //creo una condizione per cui al posto della variabile "i", il codice scriva in console il valore della var "i" per tutti i numeri che non rientrano nelle condizioni precedente 
    else  {
        console.log(i);
    }
}