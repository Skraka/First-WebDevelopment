//PRACTICA 1 IMC
const btnCalcular = document.getElementById('btnCalcular');
const btnLimpiar = document.getElementById('btnLimpiar');


btnCalcular.addEventListener('click', function calcular(){
    let peso = document.getElementById('peso'). value;
    let altura = document.getElementById('altura'). value;
    let imc = peso/(altura*altura);
    document.getElementById('resultado').value = imc.toFixed(1);
});

btnLimpiar.addEventListener('click', function limpiar(){
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('resultado').value = '';
});


//PRACTICA 2 CALCULADORA
const btnCalcular2 = document.getElementById('btnCalcular2');
const btnLimpiar2 = document.getElementById('btnLimpiar2');


btnCalcular2.addEventListener('click', function calcular(){
    const option = document.getElementById('idOpcion'). value;
    const idNumero1 = document.getElementById('idNumero1'). value;
    const idNumero2 = document.getElementById('idNumero2'). value;
    const txtres = document.getElementById('idResultado');

    let res = 0;
    let num1 = parseInt(idNumero1);
    let num2 = parseInt(idNumero2);
    let opc = parseInt(option);

    switch(opc) {        
        case 1: res = num1+num2;break;
        case 2: res = num1-num2;break;
        case 3: res = num1*num2;break;
        case 4: res = num1/num2;break;        
    }
    txtres.value = res;
});

btnLimpiar2.addEventListener('click', function limpiar(){
    document.getElementById('idResultado'). value = '';
    document.getElementById('idNumero1'). value = '';
    document.getElementById('idNumero2'). value = '';
});


//PRACTICA 3 COTIZACION
const btnCalcular3 = document.getElementById('btnCalcular3');
const btnLimpiar3 = document.getElementById('btnLimpiar3');

btnCalcular3.addEventListener('click', function calcular(){
    const precio1 = document.getElementById('idPrec'). value;
    const option1 = document.getElementById('idPorc'). value;
    const option2 = document.getElementById('idPlaz'). value;
    const pagIni = document.getElementById('idPagIni');
    const total = document.getElementById('idTotal');
    const pagmen = document.getElementById('idPagMen');
    
    let precio = parseInt(precio1);
    let opc2 = parseInt(option1);
    let opc3 = parseInt(option2);
    let pi = 0;
    let pm = 0;

    switch(opc2) {
        case 1: pi = precio*0.05; break;
        case 2: pi = precio*0.10; break;
        case 3: pi = precio*0.25; break;
    }
    pagIni.value = pi;
    total.value = precio-pi;
    switch (opc3) {
        case 1: pm = (precio-pi)/24; break;
        case 2: pm = (precio-pi)/36; break;
        case 3: pm = (precio-pi)/48; break;
    }
    pagmen.value = pm;
});

btnLimpiar3.addEventListener('click', function limpiar(){
    document.getElementById('idPagIni').value = '';
    document.getElementById('idTotal').value = '';
    document.getElementById('idPagMen').value = '';
    document.getElementById('idCoti').value = '';
    document.getElementById('idDesc').value = '';
    document.getElementById('idPrec').value = '';
});