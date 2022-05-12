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

function findLongestWord(param) {
  
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

