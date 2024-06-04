function calcMinMax() {
    let input = document.getElementById('array').value;
    let numbers = input.split(',').map(Number);
    let min = Math.min.apply(null, numbers);
    let max = Math.max.apply(null, numbers);
    document.getElementById('result').innerHTML = "Minimum: " + min + ", Maximum: " + max;
}

document.getElementById('calcbtn').addEventListener('click', calcMinMax);