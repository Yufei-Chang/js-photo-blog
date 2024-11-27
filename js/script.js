const rowElem = document.querySelector(".card-section");
const overlayElem = document.getElementById("overlay-div");
const imgElem = document.getElementById("img-in-modal");
const btnCloseElem = document.getElementById("btnCloseOverlay");

// CHIAMIAMO API
axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=6`).then((resp) => {
    // RICHIAMO LA FUNZIONE SOTTOSTANTE, PER POTERLA ESEGUIRE
    addPhoto(resp.data);
    // PRENDO TUTTE LE IMMAGINI DELLE CARDS stringHTML E LE METTO IN UN NUOVO ARRAY, DOPO DEVO AGGIUNGERE LA FUNZIONE OVERLAY
    const imgArray = document.querySelectorAll(".card img");
    // FACCIO IL CICLO FOR PER CICLARE UN IMMAGINE ALLA VOLTA
    for (let i = 0; i < imgArray.length; i++) {
        const curImg = imgArray[i];
        // AGGIUNGO UN EVENTO CLICK PER OGNI INTERAZIONE AVVENUTA CON LE IMMAGINI IN HTML
        curImg.addEventListener("click", () => {
            // SCRIVO LE ISTRUZIONI DA ESEGUIRE AL CLICK
            overlayElem.classList.remove("d-none");
            // MODIFICO IL PERCORSO DELL'IMMAGINE MODALE, SICRONIZZANDOLO CON QUELLO DELL'IMMAGINE CLICCATA
            imgElem.src = curImg.src;
        })
    }
});


// CREO UNA FUNZIONE PER AGGIUNGERE LE FOTO ALL'ARRAY
function addPhoto(photoArray) {
    photoArray.forEach((curPhoto) => {
        // USO DESTRUCTURING E PRENDO SOLO I PARAMETRI NECESSARI DALLA RISPOSTA DELL'API
        const { title, url } = curPhoto;
        // FACCIO UNA STRINGA HTML E SOSTITUISCO I VALORI CON I PARAMETRI OTTENUTI SOPRA
        const stringHTML = `
        <div class="col-4 mb-4 d-flex align-items-stretch">
          <div class="card h-100">
            <img src="${url}" class="card-img-top" alt="">
            <div class="card-body">
              <p class="card-text">${title}</p>
            </div>
          </div>
        </div>`;
        // ADESSO DEVO INSERIRE LA STRINGA NELLA ROW (SEZIONE APPOSITA DELLE CARDS)
        rowElem.innerHTML += stringHTML;
    })
}

// AGGIUNGO UN EVENTO AL BOTTONE CHE AL CLICK, MI RIPRISTINA LA CLASSE CANCELLATA
btnCloseElem.addEventListener("click", () => {
    overlayElem.classList.add("d-none");
})