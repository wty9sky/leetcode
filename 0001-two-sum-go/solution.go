package leetcode

func twoSum_1(nums []int, target int) []int {
	m := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		another := target - nums[i]
		if _, ok := m[another]; ok {
			return []int{m[another], i}
		}
		m[nums[i]] = i
	}
	return nil
}


func twoSum_2(nums []int, target int) []int {
    hashList :=map[int]int{}

    for index,x :=range nums{
        if p,ok := hashList[target - x]; ok {
            return []int{p,index}
        }
        hashList[x] = index
    }
    return nil
}