const visor = document.getElementById('visor');
const botones = document.querySelectorAll('.button');
let operacion = "";
let resultadoMostrado = false;

botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const valor = e.target.textContent;

        if (boton.id === "borrartodo") {
            operacion = ""; 
            visor.textContent = ""; 
            resultadoMostrado = false;
            return; 
        }

        if (boton.id === "borra") {
            operacion = operacion.slice(0, -1); 
            visor.textContent = operacion; 
            return; 
        }

        if (boton.id === "igual") {
            try {
                operacion = eval(operacion).toString(); 
                visor.textContent = operacion; 
                resultadoMostrado = true;
            } catch {
                visor.textContent = "Error"; 
                operacion = "";
                resultadoMostrado = false;
            }
            return; 
        }

        // Si se mostró un resultado y se presiona un número, limpiar
        if (resultadoMostrado && /^[0-9]$/.test(valor)) {
            operacion = valor;
            visor.textContent = operacion;
            resultadoMostrado = false;
            return;
        }

        operacion += valor; 
        visor.textContent = operacion;
        resultadoMostrado = false;
    });
});

document.addEventListener('keydown', (event) => {
    const tecla = event.key;

    if (/^[0-9+\-*/.]$/.test(tecla)) {
        // Si se mostró un resultado y se presiona un número, limpiar
        if (resultadoMostrado && /^[0-9]$/.test(tecla)) {
            operacion = tecla;
            visor.textContent = operacion;
            resultadoMostrado = false;
            return;
        }
        operacion += tecla;
        visor.textContent = operacion;
        resultadoMostrado = false;
    }
    else if (tecla === 'Enter' || tecla === '=') {
        try {
            operacion = eval(operacion).toString(); 
            visor.textContent = operacion; 
            resultadoMostrado = true;
        } catch {
            visor.textContent = "Error"; 
            operacion = ""; 
            resultadoMostrado = false;
        }
    }
    else if (tecla === 'Backspace') {
        operacion = operacion.slice(0, -1); 
        visor.textContent = operacion;
        resultadoMostrado = false;
    }
    else if (tecla === 'Escape') {
        operacion = "";
        visor.textContent = "";
        resultadoMostrado = false;
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const calculadora = document.querySelector('.calculadora');
    if (loader) loader.style.display = 'none';
    if (calculadora) calculadora.style.display = 'flex';
});
