function twoSum(nums, target) {
  const mapa = new Map(); // valor -> índice

  for (let i = 0; i < nums.length; i++) {
    const complemento = target - nums[i];

    if (mapa.has(complemento)) {
      return [mapa.get(complemento), i];
    }

    mapa.set(nums[i], i);
  }
}
