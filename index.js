 // expressionEvaluator = function(operator, expressiona, expressionb) {
 //   if (operator.toString() === "+") {
 //     return expressiona + expressionb
 //   } else {
 //     return expressiona - expressionb
 //   }
 // }
 //
 // "+ 1 + 2 3" === 6
 //
 //   ["+", "1", "+", "2", "3"]

 // let expressionEvaluator = function(expression) {
 //   let array = expression.split(" ")
 //   let solution = 0
 //   if (array.length > 3) {
 //     if (array.first === "+") {
 //       if (array[2] === "+") {
 //         solution = array[1] + array[3] + array.last
 //       } else {
 //         solution = array[1] + array[3] - array.last
 //       }
 //     } else {
 //       if (array[2] === "+") {
 //         solution = array[1] - array[3] + array.last
 //       } else {
 //         solution = array[1] - array[3] - array.last
 //       }
 //     }
 //   } else {
 //     if (array.first === "+") {
 //       solution = array[1] + array.last
 //     } else {
 //       solution = array[1] - array.last
 //     }
 //   }
 //   return solution
 // }
 //  <operation> <expression> <expression>
 // "+ 1 + 2 3" === 6
 //
 //   ["+", "1", "+", "2", "3"]

 //   ["+", "1", "+", "2", "3"]
 //   ["+", "+", "1", "2", "3"]

 let expressionEvaluator = function(expression) {
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

 export {
   expressionEvaluator
 }