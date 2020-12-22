function twoSum(nums: number[], target: number): number[] {
  const len = nums.length;
  if (len < 2 || !nums) return;
  const map = {}; // 存储索引和值
  let i = 0;
  let dis;
  while (i < len) {
    dis = target - nums[i]; // 计算差值
    if (map[dis] !== undefined) {
      return [map[dis], i];
    }
    map[nums[i]] = i;
    i++;
  }
  return;
}
