var isValid = function (s) {
    if (!s.length) return "";
    let stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if(map[c]){
            stack.push(map[c]);
        }else{
            if(stack.pop() !== c ){
                return false
            }
            
        }
    }
    return stack.length === 0;
};


console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false