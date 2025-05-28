const nums = [null] //ENTRADA

const last = (nums) => {
    const number = nums[nums.length - 1];
    if (number === undefined) { return -1 }
    if (number === null) { return null }
    return number
}

console.log(last(nums));