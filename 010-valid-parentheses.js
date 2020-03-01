function validParentheses(parens) {
    parens = parens.split("");
    
    const stack = [];

    for (const paren of parens) {
        if (paren === "(") {
            stack.push("(")
        } else {
            const lastParen = stack.pop();
            if (lastParen !== "(") {
                return false;
            }
        }
        
    }

    return stack.length === 0;
}

console.log(validParentheses( "()" ), true);
console.log(validParentheses( "())" ), false);
console.log(validParentheses( ")(()))" ), false);
console.log(validParentheses( "(" ), false);
console.log(validParentheses( "(())((()())())" ), true);