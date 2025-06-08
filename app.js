const visor = document.getElementById('visor');
const botones = document.querySelectorAll('.button');
let operacion = "";

botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const valor = e.target.textContent;

        if (boton.id === "borrartodo") {
            operacion = ""; 
            visor.textContent = ""; 
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
            } catch {
                visor.textContent = "Error"; 
                operacion = "";
            }
            return; 
        }

        operacion += valor; 
        visor.textContent = operacion;
    });
});

document.addEventListener('keydown', (event) => {
    const tecla = event.key;

    if (/^[0-9+\-*/.]$/.test(tecla)) {
        operacion += tecla;
        visor.textContent = operacion;
    }
    else if (tecla === 'Enter' || tecla === '=') {
        try {
            operacion = eval(operacion).toString(); 
            visor.textContent = operacion; 
        } catch {
            visor.textContent = "Error"; 
            operacion = ""; 
        }
    }
    else if (tecla === 'Backspace') {
        operacion = operacion.slice(0, -1); 
        visor.textContent = operacion;
    }
    else if (tecla === 'Escape') {
        operacion = "";
        visor.textContent = "";
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const calculadora = document.querySelector('.calculadora');
    if (loader) loader.style.display = 'none';
    if (calculadora) calculadora.style.display = 'flex';
});
