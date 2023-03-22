console.log("Auf zu Rewe!");

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_2-8_js-dom_Einkaufsliste ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

const userInput = document.querySelector('#userinput');
const buTTon = document.querySelector('#enter');

buTTon.addEventListener('click', () => {
    console.log("Button is clicked!");
    let li = document.createElement('li');
    li.textContent = userInput.value;
    document.body.children[0].children[4].appendChild(li);
})

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ BONUS ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

const outputKeycode = document.querySelector('.output_keycode');

document.body.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        let li2 = document.createElement('li');
        li2.textContent = userInput.value;
        document.body.children[0].children[4].appendChild(li2);
    }
})

