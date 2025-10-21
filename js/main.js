/*Ejercicio 1: Suma del 1 al 100
Escribe un programa en JavaScript que calcule la suma de todos los números enteros del 1 al 100. El resultado debe imprimirse en la consola.*/

function suma(){

    let resultado=0;

    for (let i = 1; i <= 100; i++) {
        resultado+=i;
        //console.log(resultado)
    }

    return resultado;
}

//console.log("El resultado de la suma de todos los numeros del 1 al 100 es "+suma());


/*Ejercicio 2: Números pares del 1 al 50
Escribe un programa que imprima en consola todos los números pares comprendidos entre 1 y 50 (inclusive). Recuerda que un número es par si el resto de dividirlo por 2 es 0.*/

function pares(){
    for (let i = 1; i <= 100; i++) {
        
        if(i%2==0){
            console.log(i+" es par")
        }
    }
}

//console.log(pares());

/*Ejercicio 3: Tabla de multiplicar
Pide al usuario un número mediante prompt(). Luego, imprime su tabla de multiplicar del 1 al 10. Ejemplo de salida si el usuario ingresa 5:*/

function tablaMultiplicar(){
    
    let esNumero;
    do{
        let num=prompt("Por favor introduce un número");

        if(isNaN(num)==false){
            for (let i = 1; i <= 10; i++) {
                
                console.log(num+"x"+i+"="+num*i);
                
            }
            esNumero=true;
        }

    }while(!esNumero);
    
}

//console.log(tablaMultiplicar())

/*Ejercicio 4: Cuenta regresiva
Escribe un programa que imprima una cuenta regresiva desde 10 hasta 1. Cada número debe mostrarse en una línea diferente en la consola. */

function cuentaRegresia(){
    for (let i = 10; i >=1; i--) {
        console.log(i);
    }
}

//cuentaRegresia();

function factorial(){
    let esNumero=false;
    let total=1;
    let mensaje='';
    let num;
    
    do{
        num=prompt("Por favor introduce un número");

        if(isNaN(num)==false){

            mensaje+=num+"! = ";
        

            for (let i =num; i >=1; i--) {
                mensaje+=i+" x ";
                total*=i;
                
            }
            esNumero=true;
            mensaje+="=";
        }

    }while(!esNumero);

    return mensaje+total;
    
}

console.log(factorial());