nums = [1, 2, 3, 4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
var reduce = function (nums, fn, init) {
    if (nums.length === 0) return 0;
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i])
    }
    return init
};

console.log(reduce(nums, fn, init))