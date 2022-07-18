const clearScreen = () => {
    document.querySelector('#result').value = '';
}

const displayOnScreen = (x) => {
    document.querySelector('#result').value += x;
}

const calculate = () => {
    document.querySelector('#result').value = eval(document.querySelector('#result').value);
}
