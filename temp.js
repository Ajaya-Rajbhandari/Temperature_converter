const convertButton = document.getElementById('convert');
const resultDiv = document.getElementById('result');
const answerBox = document.getElementById('answerBox');
const clearButton = document.getElementById('clear');


convertButton.addEventListener('click', () => {
const temperatureInput = document.getElementById('temperature');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');

const temperature = parseFloat(temperatureInput.value);
const fromUnit = fromUnitSelect.value;
const toUnit = toUnitSelect.value;

if (isNaN(temperature)) {
resultDiv.textContent = 'Invalid temperature';
return;
}

let convertedTemperature =0;
let convertedUnit='';

if (fromUnit === 'celsius') {
if (toUnit === 'fahrenheit') {
    convertedTemperature = (temperature * 9/5) + 32;
    convertedUnit = 'Fahrenheit';
} else if (toUnit === 'kelvin') {
    convertedTemperature = temperature + 273.15;
    convertedUnit = 'Kelvin';
}
} else if (fromUnit === 'fahrenheit') {
if (toUnit === 'celsius') {
    convertedTemperature = (temperature - 32) * 5/9;
    convertedUnit = 'Celsius';
} else if (toUnit === 'kelvin') {
    convertedTemperature = (temperature - 32) * 5/9 + 273.15;
    convertedUnit = 'Kelvin';
}
} else if (fromUnit === 'kelvin') {
if (toUnit === 'celsius') {
    convertedTemperature = temperature - 273.15;
    convertedUnit = 'Celsius';
} else if (toUnit === 'fahrenheit') {
    convertedTemperature = (temperature - 273.15) * 9/5 + 32;
    convertedUnit = 'Fahrenheit';
}
} else if ( fromUnit === 'toUnit'){
convertedTemperature = temperature;
convertedUnit = toUnit;
}

answerBox.textContent = `${convertedTemperature.toFixed(2)} ${convertedUnit}`;
});
clearButton.addEventListener('click',()=>{
document.getElementById('temperature').value = '';
document.getElementById('fromUnit').selectedIndex = 0;
document.getElementById('toUnit').selectedIndex=0;
answerBox.textContent='';
});