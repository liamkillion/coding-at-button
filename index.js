function expressionEvaluator(expression) {
  let array = expression.split(" ")
  let operations = []
  let numerals = []
  array.forEach(element => {
    if (parseInt(element)) {
      numerals.push(element)
    } else {
      operations.push(element)
    }
  })
  let newArray = []
  for (i = 0; i < numerals.length; i++) {
    newArray.push(numerals[i])
    newArray.push(operations[i])
  }
  let solution = newArray.join('')
  return eval(solution)
}



let submit = document.getElementById('submit')
let input = document.getElementById('input')
let output = document.getElementById('output')

function showValue() {
  output.innerHTML = expressionEvaluator(input.value)
}

submit.addEventListener('click', showValue)