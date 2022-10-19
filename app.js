const operaciones = document.querySelectorAll('.operacion');
const numeros = document.querySelectorAll('.numero');
const pantalla = document.querySelector('.pantalla');
const equal = document.querySelector('#equal');
const AC = document.querySelector('#delete');

let x = '';
let y = '';
let operacion = null;
let resultado = 0;

/**
* funcion que tome input de X y sucesion de 
* if para validar cada operacion y entonces solo si operacion !== null
* es que se procede a realizar la operacion seleccionara para el 
* siguiente numero que elija 
* 
*/



//pantalla.textContent = '';

numeros.forEach(boton =>{

    boton.addEventListener('click', () =>{

        if(operacion == null){

            //pantalla.TextContent = '';      

            x += String(boton.id);
            console.log('x es ' + x);

                  
            
            pantalla.textContent = x; 
        }   

        if(operacion !== null){

            y += String(boton.id);
            console.log('y es ' + y);

            pantalla.textContent = y;

        }              
        

    })
});

operaciones.forEach(boton =>{

    boton.addEventListener('click', () =>{     

        operacion = boton.textContent;

        pantalla.textContent = pantalla.textContent + ' ' +  operacion;

    })
});


equal.addEventListener('click', () =>{

    switch(operacion){

        case '+':
            resultado = parseInt(x) + parseInt(y);
            
            pantalla.textContent = resultado;

            console.log('+el resultado es '+ resultado);

            //resultado = 0;

            break;

        case '-':
            resultado = parseInt(x) - parseInt(y);

            pantalla.textContent = resultado;

            console.log('-el resultado es '+ resultado);

            //resultado = 0;

            break;

        case 'x':

            resultado = parseInt(x) * parseInt(y);

            pantalla.textContent = resultado; 

            console.log('*el resultado es '+ resultado);

            resultado = 0;

            break;

        case '/':

            resultado = parseInt(x) / parseInt(y);

            pantalla.textContent = resultado;

            console.log('/el resultado es '+ resultado);

            resultado = 0;

            break;
    }


    x = '';
    y = '';
    operacion = null;

});


AC.addEventListener('click', () =>{

    pantalla.textContent = 0;

    x = '';

    y = '';

    operacion = null;

})



