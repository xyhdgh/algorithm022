/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const len = nums.length;
  if (len === 0 || !len) return;
  let r = k % len;
  while (r--) {
    nums.unshift(nums.pop());
  }
}
