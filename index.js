 // expressionEvalutator = function(operator, expressiona, expressionb) {
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

 let expressionEvalutator = function(expression) {
   let array = expression.split(" ")
   if (array.length > 3) {
     if (array.first === "+") {
       if (array[2] === "+") {
         return array[1] + array[3] + array.last
       } else {
         return array[1] + array[3] - array.last
       }
     } else {
       if (array[2] === "+") {
         return array[1] - array[3] + array.last
       } else {
         return array[1] - array[3] - array.last
       }
     }
   } else {
     if (array.first === "+") {
       return array[1] + array.last
     } else {
       return array[1] - array.last
     }
   }
 }