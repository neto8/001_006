/*

Ejercicio:

Completa las funciones siguientes para tener un conjunto de operaciones que 
traten nuestros arrays realizando diversas transformaciones sobre ellos.

Finalizado el ejercicio podrás probar que funciona correctamente con los tests del final.

Nota: puede que alguna de las siguientes funciones te sea de ayuda:

isFinite(), splice(), unshift(), push(), join(), sort(), Math.floor()

Puedes encontrar más en:

https://developer.mozilla.org/en-US/docs/Web/JavaScript
y
http://www.w3schools.com/js/default.asp

*/
function vaciarPapelera(array) {
    arregloNuevo = [];
    for (var indice = 0; indice < array.length; indice++) {
        if (array[indice] != "*") {
            console.log(array[indice]);
            arregloNuevo.push(array[indice]);
        }
    }
    return arregloNuevo;
    // Esta función debe recibir un array y devolverlo habiéndole quitado los elementos que sean un asterisco (*)

    // Por ejeplo:
    // vaciarPapelera(['a',1,'*',5]) 

    // debe devolver:
    // ['a',1,5]
}
//console.log(vaciarPapelera(['a', 1, '*', 5]));

function agruparElementos(array) {

    var arregloNuevo = array.sort();

    return arregloNuevo;
    // Esta función debbe recibir un array con números y letras y devolverlo habiendo agrupado los elementos
    // En primer lugar se deben encontrar números, depués letras. El orden dentro de cada grupo no importa.

    // Por ejemplo: 
    // agruparElementos(['B', 'a', 4 , 23, 'J']) 

    // debe devolver:
    // [23, 4, 'B', 'a', 'J']
}
//console.log(agruparElementos(['B', 'a', 4, 23, 'J']));

function ponerBonitasLasLetras(array) {
    arregloNuevo = [];
    for (var indice = 0; indice < array.length; indice++) {

        if (typeof(array[indice]) == "string") {

            if (array[indice].charCodeAt(0) < 96) {
                console.log(array[indice].charCodeAt(0));
                arregloNuevo.push(array[indice].toLowerCase());
            } else {
                arregloNuevo.push(array[indice].toUpperCase());
            }

        } else
            arregloNuevo.push(array[indice]);
    }
    return arregloNuevo;
    // Esta función debe recinbir un array de números y letras y devolverlo con las letras vocales en mayúsculas 
    // y las consonantes en minúsculas. Los números no deben ser tratados.

    // Por ejemplo:
    // ponerBonitasLasLetras([1,5,7,'a','J',p,'E'])

    // debe devolver:
    // [1,5,7,'A','j',p,'E']
}
//console.log(ponerBonitasLasLetras([1, 5, 7, 'a', 'A', 'p', 'E']));

function ponerBonitosLosNumeros(array) {

    var arregloNuevo = [];
    var valor = [];

    sumaArreglo = function(numero, nn) {
        sumaNumArreglo = 0;
        for (var sumNum = 0; sumNum < nn; sumNum++) {
            arrTemp = numero.toString().split("");
            sumaNumArreglo = sumaNumArreglo.valueOf() + arrTemp[sumNum].valueOf() * 1;
        }
        if (sumaNumArreglo.toString().length > 1) {
             return sumaArreglo(sumaNumArreglo, sumaNumArreglo.toString().length);

        } else {
        	debugger;
        	console.log(sumaNumArreglo);
            return sumaNumArreglo;
        }
    }

    for (var indice = 0; indice < array.length; indice++) {
        if (typeof(array[indice]) != "string") {
        	val=sumaArreglo(array[indice], array[indice].toString().length);
        	console.log(val);
            arregloNuevo.push(val);
        } else {
            valor = ponerBonitasLasLetras(array[indice]);
            arregloNuevo.push(valor[0]);
        }
    }
    return arregloNuevo;
}

//It receives an array with numbers and letters and returns it with its numbers beautified. Letters remain unchanged
//Beautify process is to reduce a number into a single digit number by adding all its digits together: 
// 123 = 6 because 1+2+3 = 6
// 9 = 9
// 9956 = 2 because 9+9+5+6 = 29 -> 2+9 = 11 -> 1+1 = 2
// 793 = 1 because 7+9+3 = 19 -> 1+9 = 10 -> 1+0 = 1

// Esta función debe recibbir un array de números y letras, y devolverlo con los números "bonitos". 
// Las letras no deben cambiar. 
// Para poner bonito número debemos sumar todas sus cifras.
// en caso de que el número resultante tenga más de una cifra, se petirá el proceso con este.
// 123 se convertirá en 6 porque 1+2+3 = 6
// 9 se convertirá en 9
// 9956 se convertirá en 2 porque 9+9+5+6 = 29, 2+9 = 11 y 1+1 = 2
// 793 se convertirá en 1 porque 7+9+3 = 19, 1+9 = 10 y 1+0 = 1

// Este proceso debemos realizarlo sobre un array de elementos y aplicarlo solo a los números.

// Por ejemplo: 
// ponerBonitosLosNumeros([23,59, 4,'A','b'])

// debe devolver
// [5, 5, 4, 'A', 'b']

//console.log(ponerBonitosLosNumeros([23, 59, 4, 'A', 'b']));

function ordenarArray(array) {
	return array.sort();
    //It receives an array with numbers and letters and returns it with its items sorted. Numbers on one side and letters on the other.
    //Example: ordenarArray([5,5, 4, 1, 'j', A','b', 'E']) returns [1, 4, 5, 5, 'A', 'b', 'E', 'j']
}
console.log(ordenarArray([5,5, 4, 1, 'j', 'A','b', 'E']));

function arrayToString(array) {
	return array.join();
    //It receives an array and returns a string with all its elements.
    //Example: arrayToString([1, 4, 5, 5, 'A', 'b', 'E', 'j']) returns "1455AbEj"
}

// Tests

function transformacionCompletaDelArray(array) {
    array = vaciarPapelera(array);
    array = agruparElementos(array);
    array = ponerBonitasLasLetras(array);
    array = ponerBonitosLosNumeros(array);
    array = ordenarArray(array);
    array = arrayToString(array);

    return array;
}

//console.log(transformacionCompletaDelArray(["a", 6, "B", "F", "*", 8, 78, "J"]) === "668Abfj");
//console.log(transformacionCompletaDelArray(["*", "j", 6, "A", "F", "*", 8, "C", "b", "a", 78, "J", 43523, 1111, "r", "q", "y"]) === "46688AAbcfjjqry");
