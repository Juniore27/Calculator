import './sass/index.scss'
let inputValue = 0
let number_1 = []
let result = ""
let type = ""





const display = document.querySelector(".calculator__main-display")
const operators = [...document.querySelectorAll(".operator")]
const numbers = [...document.querySelectorAll(".numbers")]
const clear = document.querySelector('.clear')




const insertNumber = (e) => {

  const inpuText = e.target.dataset.option

  number_1.push(inpuText)

  display.value = number_1.join("")
  // console.log(number_1);  mam tablice do usuwania

  inputValue = display.value;



  if (type) {
    if (type == "+") {

      result = Number(result) + Number(inputValue)

    } else if (type == "-") {
      result = Number(result) - Number(inputValue)
    } else if (type == "*") {
      console.log(inputValue);
      result = Number(result) * Number(inputValue)
    }
  }
}

const calculate = (e) => {
  type = e.target.dataset.option
  if (type == "+") {

    result = Number(result) + Number(inputValue)

    display.value = ""
    number_1 = []
    inputValue = 0

  } else if (type == "-") {

    result = Number(result) + Number(inputValue)

    display.value = ""
    number_1 = []
    inputValue = 0
  } else if (type == "*") {
    console.log(result);
    result = Number(result) * Number(inputValue)

    display.value = ""
    number_1 = []
    inputValue = 0
  } else if (type == "=") {

    display.value = result

  }
}

const clean = () => {
  inputValue = 0
  number_1 = []
  result = ""
  type = ""
  display.value = ""
}




operators.forEach(operator => operator.addEventListener('click', calculate))
numbers.forEach(number => number.addEventListener('click', insertNumber))
clear.addEventListener('click', clean)