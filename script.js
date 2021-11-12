// function hasil(){
//    var angka1 = document.calculator.angka1.value ;
// var angka2 = document.calculator.angka2.value;
// document.calculator.hasil.value=angka1 + angka2;
//    }
   



const angka1 = document.getElementById('angka1');
const angka2 = document.getElementById('angka2');
const submit = document.getElementById('submit');
const z1 = document.getElementById('a');
const z2 = document.getElementById('b');

const ϕ1 = document.getElementById('ϕ1');
const c1 = document.getElementById('c1');
const γ1 = document.getElementById('γ1');

const ϕ2 = document.getElementById('ϕ2');
const c2 = document.getElementById('c2');
const γ2 = document.getElementById('γ2');

const ka1 = document.getElementById('ka1');
const z0 = document.getElementById('z0');

const ka2 = document.getElementById('ka2');

const σ = document.getElementById('σ');
const σ2 = document.getElementById('σ2');

const i = document.getElementById('i');
const j = document.getElementById('j');

const l = document.getElementById('l');




submit.addEventListener('click', function()
{
    const a = 1 + (Number(angka1.value)/10) + (Number(angka2.value)/100)
    const b = 5 + (Number(angka1.value)/10) + (Number(angka2.value)/100)

    const ϕ11 = 20 + Number(angka1.value)
    const ϕ21 = 30 + Number(angka2.value)

    const ka11 = (Math.tan((45-(ϕ11/2))*0.017453293))*(Math.tan((45-(ϕ11/2))*0.017453293))

    const z01 = (2*13.12)/(15.82*Math.sqrt(ka11))

    const ka21 = (Math.tan((45-(ϕ21/2))*0.017453293))*(Math.tan((45-(ϕ21/2))*0.017453293))

    const σ1 = 15.82*a*ka21
    const σ21 = σ1 + 17.28*b*ka21

    const i1 = σ1*b
    const j1 = 0.5*17.28*b*ka21*b

    const k1 = i1+j1

    const l1 = ((i1*0.5*b)+(j1/3*b))/k1

    z1.innerHTML = a.toFixed(2) +' m'
    z2.innerHTML = b.toFixed(2) +' m'

    ϕ1.innerHTML = ϕ11 + '°'
    c1.innerHTML = 13.12 + ' kN/m<sup>2</sup>'
    γ1.innerHTML = 15.82 + ' kN/m<sup>3</sup>'

    ϕ2.innerHTML = ϕ21 + '°'
    c2.innerHTML = 0 + ' kN/m<sup>2</sup>'
    γ2.innerHTML = 17.28 + ' kN/m<sup>3</sup>'

    ka1.innerHTML = ka11.toFixed(2)
    z0.innerHTML = z01.toFixed(2)

    document.getElementById('c').innerHTML = a;
    document.getElementById('d').innerHTML = a;

    ka2.innerHTML = ka21.toFixed(2)

    document.getElementById('e').innerHTML = a;
    document.getElementById('f').innerHTML = ka21.toFixed(2);

    σ.innerHTML = σ1.toFixed(2) + ' kN/m<sup>2</sup>';

    document.getElementById('g').innerHTML = (a + b).toFixed(2);
    document.getElementById('h').innerHTML = σ1.toFixed(2)

    σ2.innerHTML = σ21.toFixed(2) + ' kN/m<sup>2</sup>';

    i.innerHTML = "("+ σ1.toFixed(2)+")"+"("+ b.toFixed(2)+")"+ ' = ' + i1.toFixed(2) + ' kN/m';
    j.innerHTML = 0.5 + "("+ (17.28*b*ka21).toFixed(2)+")"+"("+ b.toFixed(2)+")"+ ' = ' + j1.toFixed(2) + ' kN/m';

    document.getElementById('k').innerHTML = i1.toFixed(2)+' + '+j1.toFixed(2)+ ' = ' + k1.toFixed(2) + ' kN/m';

    l.innerHTML = l1.toFixed(2) + ' m'

    })