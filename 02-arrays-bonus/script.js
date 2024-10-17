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

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  let currentTeacher = teachers[i];
  console.log(currentTeacher)
  if(currentTeacher.length >= 5){
    longNames.push(currentTeacher)
  }
}
console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers