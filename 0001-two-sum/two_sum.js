//方法一

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum_1 = function (nums, target) {
    const map = new Map(nums.map((num, index) => [num, index]))
    for (let index in nums) {
        const res = target - nums[index]
        if (map.has(res) && Number(index)!==Number(map.get(res))) {
            return [map.get(res), index]
        }
    }
};


//方法二

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum_2 = function(nums, target) {
    const map = new Map()
    for(let index in nums){
        if(map.has(nums[index])){
            return [map.get(nums[index]),index]
        }else{
            map.set(target - nums[index],index)
        }
    }
    return false
};