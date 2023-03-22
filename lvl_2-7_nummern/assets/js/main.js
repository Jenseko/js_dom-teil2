console.log('Auf ein Neues!');

// ≈≈≈≈≈≈≈≈≈≈≈≈ lvl_2-7_Nummern ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

const buTTon = document.querySelector('button');
const outputElements = document.querySelector('.umwickeln');

let counter = -1;

buTTon.addEventListener('click', () => {
    counter++;
    console.log("Counter: " + counter);
    
    let div = document.createElement('div');
    div.textContent = counter;

    if (counter % 10 === 0) {
        outputElements.appendChild(div).classList.add("weiss");
    } else {
        outputElements.appendChild(div).classList.add("rechteck");
    }
})





