const containerElem = document.querySelector(".card-section");
const sectionElem = document.querySelector(".card-section");
const btnElem = document.getElementById("button");

// CREO UN ARRAY VUOTO, DOVE POI ANDRO' A INSERIRE LE FOTO ESTRATTE DALL'API
let photo = [];
        // CHIAMIAMO API
        axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=6`).then((resp) => {
            // ASSEGNO LE RISPOSTE DELL'API ALLA VARIABILE CREATA
            photo = resp.data;
        });

        
// CREO UNA FUNZIONE PER AGGIUNGERE LE FOTO ALL'ARRAY
function addPhoto(photoArray) {
    photoArray.forEach((curPhoto) => {
        // USO DESTRUCTURING E PRENDO SOLO I PARAMETRI NECESSARI DALLA RISPOSTA DELL'API
        const {title, url} = curPhoto;
        // AGGIUNGO LE INFO OTTENUTE NELL'ARRAY VUOTO
        photo.push(title, url)
        // STAMPO L'ARRAY NELLA PAGINA
        sectionElem.innerHTML(photo);
    })
}