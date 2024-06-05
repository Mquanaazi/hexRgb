//DOM
    let hexInput = document.getElementById('hex-input');
    let convertBtn = document.getElementById('convert-btn');
    let resultDiv = document.getElementById('result');

        convertBtn.addEventListener('click', () => {
            let hex = hexInput.value.trim();//remove white space
            if (hex.length === 7 ) // check length 
             {
                let rgb = hex2rgb(hex);
                if (rgb) {
                    resultDiv.innerText = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
                } else {
                    resultDiv.innerText = 'Invalid hex color code';
                }
            } else {
                resultDiv.innerText = 'Invalid hex color code';
            }
        });

function hex2rgb(hex) {
    // Remove leading '#' if present
    if (hex[0] === '#') {
      hex = hex.substring(1);
    }
  
    // Check if hex code has exactly 6 characters
    if (hex.length !== 6) {
      return false;
    }
  
    // Split hex code into red, green, and blue components
    let red = hex.substring(0, 2);
    let green = hex.substring(2, 4);
    let blue = hex.substring(4, 6);
  
    // Convert each component from hexadecimal to decimal
    red = parseInt(red, 16);
    green = parseInt(green, 16);
    blue = parseInt(blue, 16);
  
    // Return RGB object
    return {
      r: red,
      g: green,
      b: blue,
    };
  }