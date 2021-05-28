function fromCent() {
    var b1 = document.querySelector("#a1").value;
    var b2 = (b1) * 9/5 + 32;
    let b3 = document.querySelector("p > span");
    console.log(b3);
    b3.innerHTML = b2;
}

function fromFah() {
    let c1 = document.querySelector("#a2").value;
    let c2 = (c1) * 9/5 + 32;
    let c3 = document.querySelector("p > span");
    console.log(c3);
    c3.innerHTML = c2;
    
}