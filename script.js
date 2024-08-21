const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkValue = () => {
  if (number.value === "") {
    output.innerText = "Please enter a valid number"
  } else if (parseInt(number.value) < 0) {
    output.innerText = "Please enter a number greater than or equal to 1"
  } else if (parseInt(number.value) > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999"
  } else {
    output.innerText = convertToRoman();
  }
};

const convertToRoman = () => {
    const romanValues = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let roman = '';
    let input = parseInt(number.value);
    for (let key in romanValues) {
        while (input >= romanValues[key]) {
            roman += key;
            input -= romanValues[key];
        }
    }
    return roman;
}

convertBtn.addEventListener("click", checkValue);