const startBtnEl = document.querySelector(".my-btn");

// quando clicco il bottone prendo il valore della difficoltà inserita e faccio partire la funzione gridCreate
startBtnEl.addEventListener ("click" , function(){

    const difficultyEl = document.querySelector("[name='difficulty']")

    const difficulty = difficultyEl.value;

    console.log(difficulty);

    gridCreate(parseInt(difficulty));
})

// funzione per creare la griglia
//passo il valore difficulty come numCell
function gridCreate (numCell){

    const gridContainerEl = document.querySelector(".grid-container");

    gridContainerEl.innerHTML = "";

    // Calcolo il numero di celle totali, poi le "appendo" in un ciclo, così che ognuna 
    // sia "diversa" dall'altra e possa avere interazioni proprie

    const celleTotali=Math.pow(numCell, 2);

    for (let i=0; i<celleTotali; i++){

        const cella = document.createElement("div");

        cella.style.border = `1px solid black`
        cella.style.flexBasis = 100 / numCell + "%";
        cella.style.aspectRatio = 1 / 1;

        gridContainerEl.append( cella );
    }
}