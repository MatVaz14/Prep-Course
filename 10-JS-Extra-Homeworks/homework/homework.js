// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = [];
  //key = propiedad = clave
  for(let key in objeto){
    matriz.push([key, objeto[key]]);
  }
  return matriz;
  //TAMBIEN PODEMOS USAR
  //return Object.entries(matriz);
  //O TAMBIEN
  /*
    return Object.keys(objeto).map(key) => {
      return [key, objeto[key]];
    }
  */
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let cantCaracteres = [];
  for(let i=0; i < string.length; i++){
    // Si tiene la propiedad (key) con el nombre del valor que esta almacenado en esa posicion
    if(cantCaracteres.hasOwnProperty(string[i])){
      cantCaracteres(string[i])++;
    }else{
      cantCaracteres(string[i]) = 1;
    }
    //OTRA ALTERNATIVA
    /*
    if(string[i] in cantCaracteres){ DEVUELVE UN TRUE O UN FALSE
      cantCaracteres(string[i])++;
    }else{
      cantCaracteres(string[i]) = 1;
    }
    */
  }
  return cantCaracteres;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayusc = '';
  let minusc = '';

  for(let i=0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase()){
      mayusc += s[i];
    }else{
      minusc += s[i];
    }
  }
  return mayusc+minusc;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let frasePorPalabras = frase.split(" ");
  let fraseADevolver = [];

  for(let i=0; i < str.frasePorPalabras.length; i++){
    fraseADevolver.push(frasePorPalabras[i].split("").reverse().join(""));
  }
  return fraseADevolver.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let num = numero.toString();
  let numComparar = '';
  for(let i = (num.length)-1; i>=0; i--){
    numComparar += num[i];
  }
  if(numComparar !== num){
    return "No es capicua";
  }else{
    return "Es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let nuevaCadena = '';
  for(let i=0; i < cadena.length; i++){
    if(cadena[i] != 'a' && cadena[i] != 'b' && cadena[i] != 'c'){
      nuevaCadena += cadena[i];
    }else{
      nuevaCadena += '';
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

