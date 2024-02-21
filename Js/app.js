let display = document.getElementById('display');

function numDisplay(value) {
    display.value += value;
}


function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
