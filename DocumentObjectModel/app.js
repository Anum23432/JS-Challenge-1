function checkMsg() {
    let inputElement = document.querySelector('input');
    console.log(inputElement);
     
    
    let inputValue = inputElement.value;
    console.log(inputValue);
    
    
    let headingElement = document.querySelector('h1 > span');
    console.log(headingElement);
    
    
    headingElement.innerHTML = inputValue;

    alert('Hello, the message has been sent to the given number.');


    }