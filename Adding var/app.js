function sum() {
    let a = document.querySelector('#n1').value;
    let b = document.querySelector('#n2').value;

    let addition = parseFloat(a) + parseFloat(b);

    console.log(addition);

    let c = document.querySelector('#answer');
     console.log(c);
     c.innerHTML = addition;
    
}