 //  <operation> <expression> <expres sion>
 // "+ 1 + 2 3" === 6
 //
 //   ["+", "1", "+", "2", "3"]

 //   ["+", "1", "+", "2", "3"]
 //   ["+", "+", "1", "2", "3"]

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

 module.exports.expressionEvaluator = expressionEvaluator


 // to run
 // node -e 'require("./index").expressionEvaluator(<expression>)'