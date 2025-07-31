function olaMundo(){
    return console.log('olá mundo');
}
olaMundo();


function nome(){
    let n;
    n = prompt('digite seu nome');
    return console.log(`ola ${n}`);
}
nome();

function numero(){
    let nu;
    nu = prompt('digite um numero');
    return console.log(nu*2); 
}
numero();

function media(x,y,z){
    x = Number(prompt('digite o numero 10'));
    y = Number(prompt('digite o numero 20'));
    z = Number(prompt('digite o numero 30'));
    let m = (x + y + z) / 3;
    console.log(m);
}
media();

function maior(d,e){
    d = Number(prompt('digite o primeiro numero'));
    e = Number(prompt('digite um segundo numero'));
    if(d>e)
        console.log(`o numero ${d} e maio que o numero ${e}`);
    else
        console.log(`o numero ${e} e maior que o numero ${d}`);
}
maior();

function multi(){
    let pi;
    pi = Number(prompt('digite um numero'));
    let mul = pi * pi;
    console.log(mul);
}
multi();


