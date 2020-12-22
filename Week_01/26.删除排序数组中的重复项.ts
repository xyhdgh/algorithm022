function removeDuplicates(nums: number[]): number {
  let fast = 0;
  let slow = 0;
  while (fast < nums.length) {
    if (nums[fast] === nums[slow]) {
      fast++;
    } else {
      nums[++slow] = nums[fast++];
    }
  }
  return slow + 1;
}
