2018 Engineering Intern Coding Challenge
Contact Us
Implement an Expression Evaluator
Our goal is to write a program that is capable of evaluating simple mathematical expressions. An example expression could look like:

* 1 2
  This expression can be read as 1 + 2 and evaluates to 3. We've placed the operator (+) first in our syntax to simplify some things down the road. The + indicates that this is an operator expression, and is evaluated by summing the two following tokens, which in this case are both numbers.

The general rules are:

Expressions can be numbers or operator expressions (4 is an expression and so is - 3 1)
Numbers evaluate to themselves (4 is 4)
Operator expressions evaluate to an arithmetic computation of the two following sub-expressions. Which arithmetic computation we make is determined by the first token in the operator expression. The syntax is always <Operator> <Expression> <Expression>, so in + 1 2, + is the operator and 1 and 2 are the expressions to sum.
The two operator types we'll support are + a b (evaluated as a + b) and - (evaluated as a - b)
Of course, operator expressions support expressions themselves, so we can nest one expression inside another:

* 1 + 2 3
  We'd like to write a function (or whatever abstraction is most natural in the chosen language) that accepts an expression as a space delimited string as input and returns the result. You may assume that all inputs are valid expressions. Please state any additional assumptions you make along the way in comments.

Example Test Case
"+ 1 + 2 3" returns 6
Delivery
When you're done, you can either:

share a GitHub repository with coding-at-button and send us an email at eng-internships@usebutton.com. Detailed instructions on sharing your repo are here.
send a .zip or .tar of your working directory to eng-internships@usebutton.com.
Please include instructions on running your program.
# coding-at-button
