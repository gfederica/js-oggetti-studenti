
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var studente = {
    nome: "Federica",
    cognome: "Giudice",
    eta: 27
}

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente) {
    var indice = key + " = " + studente[key];
    console.log(indice);
}


// Creare un array di oggetti di studenti.
var studenti = [
{   
    nome: "Francesca",
    cognome: "Rossi",
    eta: 27 
},
{   
    nome: "Guido",
    cognome: "De Luca",
    eta: 24 
},
{   
    nome: "Alberto",
    cognome: "Tomasi",
    eta: 22 
},
{   
    nome: "Maria",
    cognome: "Fiore",
    eta: 36
},
{   
    nome: "Andrea",
    cognome: "Cervi",
    eta: 20
},
]


// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
var infoStudenti;

for (var i = 0; i<studenti.length; i++) {
    // richiamo il singolo oggetto in array
    var studenteSingolo = studenti[i];
    // del singolo oggetto estraggo le info che voglio stampare
    var infoStudenti = studenteSingolo.nome + " " + studenteSingolo.cognome;
    // stampo in console ad ogni ciclo
    console.log(infoStudenti);
}

// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

// creo un oggetto vuoto che raccoglierà i dati del nuovo studente
var newStudent = {};

// chiedo i dati del nuovo studente e li pusho nell'oggetto appena creato
newStudent.nome = prompt("Inserisci nome studente");
newStudent.cognome = prompt("Inserisci cognome studente");
newStudent.eta =  prompt("Inserisci età studente");
console.log(newStudent);


// pusho l'oggetto nell'array di oggetti di studenti
studenti.push(newStudent);
console.log(studenti);



