const item = document.querySelector("div");

function changeColor(){
    item.classList.toggle("pink");
}  
item.ondblclick = changeColor;

const input = document.querySelector('input');
const log = document.getElementById('log');

function updateValue() {
    log.innerText = input.value.length + "Characters";
}
input.oninput = updateValue
