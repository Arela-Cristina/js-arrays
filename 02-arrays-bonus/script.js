const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
for (let i = 0; i < teachers.length; i++) {
  const negativeIndex = -i - 1;
  const reversedTeachers = teachers.at(negativeIndex);
  console.log(reversedTeachers);
}
//Possiamo anche uttilizzare il metodo *toReversed()*, non moddifica il ordine del array originale, ma ci cambia il riferimento del array, creandone uno nuevo. 

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  let currentTeacher = teachers[i];
  console.log(currentTeacher)
  if (currentTeacher.length >= 5) {
    longNames.push(currentTeacher)
  }
}
console.log(longNames)

//oppure const longNames = teachers.filter((name) => name.lenght>+5) // console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers
let newIndex = teachers.indexOf('Ed')
console.log(newIndex);
if (newIndex >= 0) { //controllo prima di, attraverso una condizione che verifica che il indice sia diverso di -1, solo dopo fare la verifica, procediamo a cancellare 'ED' dall'array.
  teachers.splice(newIndex, 1);// A partire dalla posizzione di 'Ed', cancella 1 elemento. (cioe cancella 'Ed')
}
console.log(teachers)

//SPLICE ESSEMPIO
//4. Aggiungere Maria tra Phil e Carlo
//a partire dalla posizione 3 cancella 0 elementi e aggiunge Maria
//teachers.splice(3,0,'MARIA')