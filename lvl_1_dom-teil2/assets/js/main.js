console.log('HipHipHurra');

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-3_firstElementChild lastElementChild ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

const firstButton = document.querySelector('div button:nth-of-type(1)');
const secondButton = document.querySelector('div button:nth-of-type(2)');
const thirdButton = document.querySelector('div button:nth-of-type(3)');
const fourthButton = document.querySelector('div button:nth-of-type(4)');

const outputResult = document.querySelector('output');

firstButton.addEventListener('click', () => {
    // console.log(document.body.children[0].firstElementChild.textContent);
    outputResult.innerHTML = document.body.children[0].firstElementChild.textContent;
})

secondButton.addEventListener('click', () => {
    // console.log(document.body.children[0].lastElementChild.textContent);
    outputResult.innerHTML = document.body.children[0].lastElementChild.textContent;
})

thirdButton.addEventListener('click', () => {
    // console.log(document.body.children[0].firstElementChild.nextElementSibling.textContent);
    outputResult.innerHTML = document.body.children[0].firstElementChild.nextElementSibling.textContent;
})

fourthButton.addEventListener('click', () => {
    // console.log(document.body.children[0].lastElementChild.previousElementSibling.textContent);
    outputResult.innerHTML = document.body.children[0].lastElementChild.previousElementSibling.textContent;
})

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-9_Remove List Element ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

const farbeAuswahlen = document.querySelector('form select');

const removeColorbutton = document.querySelector('#button');



removeColorbutton.addEventListener('click', (event) => {
    event.preventDefault();
    const lostValue = farbeAuswahlen.value;
    // farbeAuswahlen.value.remove();
    console.log(lostValue);
    farbeAuswahlen.innerHTML = lostValue.remove();
    console.log(lostValue);

})
