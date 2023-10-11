const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);  
/*
El primer parametro es el tipo de evento, y el segundo es el nombre de la funcion SIN PARENTESIS!!!!
*/

function btnOnClick() {
    let result = Number(input1.value) + Number(input2.value);
    pResult.append(result);
}


