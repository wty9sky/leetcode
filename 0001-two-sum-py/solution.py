class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        maps = dict()

        # 用枚举更方便，就不需要通过索引再去取当前位置的值
        for idx, val in enumerate(nums):
            if target - val not in maps:
                maps[val] = idx
            else:
                return [maps[target - val], idx]