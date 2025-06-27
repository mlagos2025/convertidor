
    // Logica para obtener la conversión de longitud
    function convertLength(){
        lengthUnit1 = document.getElementById('lengthUnit').value;
       const  lengthInput = document.getElementById('lengthInput').value;
                      
        switch(lengthUnit1)
        {   case "meters":
                total1 = lengthInput;
                break;
            case "kilometers":
                total1 = lengthInput / 1000;
                break;
            case "centimeters":
                total1 = lengthInput * 100;
                break;
            case "millimeters":
                total1 = lengthInput * 1000;
                break;
            case "miles":
                total1 = lengthInput / 1609;
                break;
            case "yards":
                total1 = lengthInput * 1.094;
                break;
            case "feet":
                total1 = lengthInput * 3.281;
                break;
            case "inches":
                total1 = lengthInput * 39.37;
                break;
        }
        lengthResult.textContent = "Resultado: " + total1;
};
// Logica para obtener la conversión de volumen
    function convertVolume(){
        volumeUnit1 = document.getElementById('volumeUnit').value;
       const  volumeInput = document.getElementById('volumeInput').value;
        
        switch(volumeUnit1)
        {   case "liters":
                total2 = volumeInput;
                break;
            case "milliliters":
                total2 = volumeInput * 1000;
                break;
            case "gallons":
                total2 = volumeInput / 3.785;
                break;
            case "quarts":
                total2 = volumeInput * 1.057;
                break;
            case "pints":
                total2 = volumeInput * 2.113;
                break;
            case "cups":
                total2 = volumeInput * 4.167;
                break;
            case "fluid ounces":
                total2 = volumeInput * 33.814;
                break;
        }
        volumeResult.textContent = "Resultado: " + total2;
        
};
// Logica para obtener la conversión de peso
    function convertWeight(){
        weightUnit1 = document.getElementById('weightUnit').value;
       const  weightInput = document.getElementById('weightInput').value;
        
        switch(weightUnit1)
        {   case "kilograms":
                total3 = weightInput;
                break;
            case "grams":
                total3 = weightInput * 1000;
                break;
            case "milligrams":
                total3 = weightInput * 1000000;
                break;
            case "pounds":
                total3 = weightInput * 2.205;
                break;
            case "ounces":
                total3 = weightInput * 35.274;
                break;        
        }
        weightResult.textContent = "Resultado: " + total3;
};

// Logica para obtener la conversión de temperatura
function convertTemperature(){
        temperatureUnit1 = document.getElementById('temperatureUnit').value;
       const  temperatureInput = document.getElementById('temperatureInput').value;
          
        switch(temperatureUnit1)
        {   case "celsius":
                total4 = temperatureInput;
                break;
            case "fahrenheit":
                total4 = (temperatureInput * 1.08) + 32;
                break;
            case "kelvin":
                total4 = temperatureInput + 273.15;
                break; 
        }
        temperatureResult.textContent = "Resultado: " + total4;
};
