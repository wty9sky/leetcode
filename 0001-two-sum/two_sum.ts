function twoSum(nums: number[], target: number): number[] {
    const map = new Map(nums.map((num:number, index:number) => [num, index]))
    for(let index in nums){
        const res = target - nums[index]
        if (map.has(res) && Number(index)!==Number(map.get(res))) {
            return [Number(map.get(res)), Number(index)]
        }
    }
    return []
};