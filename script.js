window.alert("Probando javaScript");


// Iteration#1 -----------------------
// Completa la función que tomando dos números como argumento devuelva el más alto

function sum(numberOne , numberTwo) {
  
    if ((numberOne-numberTwo) < 0) {console.log(numberTwo, "es el mayor");}
    if ((numberOne-numberTwo) > 0) {console.log(numberOne, "es el mayor");}
    return;
  };

  let a = prompt ("Introduce el primer número: ");
  let b = prompt ("Introduce el segundo número: ");
  sum (a,b);

// Iteration#2: Buscar la palabra más larga ----------------------------
// Completa la función que tomando un array de strings como argumento devuelva el más 
//largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Ejemplogrande2', 'Spiderman', 'Captain M.'];

function findLongestWord() {
  
  let maxLength=0;
  let longest;

  for (i=0; i<avengers.length; i++) {
  
    let element = avengers[i];

    if (element.length > maxLength) {
      longest = avengers[i];
      maxLength = longest.length;
    }

  };

  console.log(`El elemento más largo es: ${longest}`);
}

findLongestWord(avengers);

// Iteration#3: Calcular la suma ----------------------------
// Implemente la función denominada sumNumbers que toma un 
// array de números como argumento y devuelve la suma de todos los números de la matriz.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  
  let total = 0;

  for (i=0; i<(param.length); i++) {
    
    sumNumbers = param[i] + total;
    total = sumNumbers;
  }

  console.log(total);
}

sumAll(numbers);


// Iteración #4: Calcular el promedio ----------------

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  
  let total = 0;

  for (i=0; i<(param.length); i++) {
    
    sumNumbers = param[i] + total;
    total = sumNumbers;
  }

  let calculatedAverage = (total/(param.length)).toFixed(2);
  console.log(`La media es ${calculatedAverage}`);

}

average(numbers2);

// Iteración #5: Calcular promedio de strings -------------------------------
//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
//y de lo contrario cuente la longitud del string y lo sume.

const mixedElements = [ 1, 'Rayo', 8,'vallecano', '10', 9, 'upgrade','hub'];

function averageWord(param) {
  
  let stringLength;
  let totalStrings = 0;
  let totalNumbers = 0;
  
  for (i=0; i<(param.length); i++) {
    
    
    if (typeof param[i] === 'string') {

      stringLength = param[i].length;
      sumTotal = stringLength + totalStrings;
      totalStrings = sumTotal;
    
    };

    if (typeof param[i] === 'number') {

      sumNumbers = param[i] + totalNumbers;
      totalNumbers = sumNumbers;

    }

  }

  result = sumNumbers + totalStrings;
  console.log("La suma total es:", result);

}

averageWord(mixedElements);

// Iteración #6: Valores únicos -----------------------------------
// Crea una función que reciba por parámetro un array y compruebe si existen elementos 
//duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados

const duplicates = [

  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];


function removeDuplicates(param) {
  
  let noDuplicates = [''];

  for (i=0; i<(param.length); i++) {
    
    if (noDuplicates.indexOf(param[i]) === -1) {

      noDuplicates.push(param[i]);
    } 

    else {

      console.log(param[i], `es un elemento duplicado, se eliminará y no se añade al nuevo array`);
    }

  };

  console.log('El nuevo array de elementos es: ' + noDuplicates);

};

removeDuplicates(duplicates);


// Iteración #7: Valores únicos -----------------------------------
// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe 
// dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve 
// un true y la posición de dicho elemento y por la contra un false.

const nameList = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

let nameToCheck = prompt('Escribe el nombre que quieres comprobar; ');

function nameFinder(array, name) {
  
  if (array.includes(name)) {

    console.log(name, 'ya existe en el array y su posición es', array.indexOf(name));
  } else {

    console.log(name, 'no existe en el array');
  }

};

nameFinder(nameList,nameToCheck);



