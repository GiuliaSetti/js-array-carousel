// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal (ad esempio).
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


/* 

- preparo un array di immagini
- preparo gli elementi Html in js
- preparo una varaibile index

Premo il pulsante giù:
    °l'indice aumenta
Premo il pulsante su:
    °l'indice diminuisce.

*/

// array

const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

// console.log(images);


// variabili

const upArrowEl = document.getElementById("up_arrow");

const downArrowEl = document.getElementById("down_arrow");

const activeImageEl = document.getElementById("active_image");

// index

let index = 0;

activeImageEl.src = images[index];


upArrowEl.addEventListener("click", function(){


    // prova ciclo

    if (index > 0){

        index--;

        console.log(index);

        activeImageEl.src = images[index]; 

    } else {


        index = images.length - 1;

        
        console.log(index);

        activeImageEl.src = images[index]; 
    }



});


downArrowEl.addEventListener("click", function(){


    if (index < images.length - 1){


        index++;

        console.log(index);
    
        activeImageEl.src = images[index];

    } else {

        index = 0;

        console.log(index);
    
        activeImageEl.src = images[index];

    }

});