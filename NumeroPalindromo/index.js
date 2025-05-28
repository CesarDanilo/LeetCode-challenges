var isPalindrome = function (x) {
    const nums = x.toString().split('').map(Number);
    return nums.join('') === nums.reverse().join('')
};

console.log(isPalindrome(121))