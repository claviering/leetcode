package main

func search(nums []int, left int, right int, target int) int {
	for left < right {
		mid := (left + right) / 2
		if target == nums[mid] {
			return mid
		} else if target < nums[mid] {
			right = mid
		} else if target > nums[mid] {
			left = mid
		}
	}
	return -1
}
func min(a int, b int) int {
	if a < b {
		return a
	} else {
		return b
	}
}
func minSubArrayLen(target int, nums []int) int {
	l := len(nums)
	sum := make([]int, l+1)
	for i := 0; i < l; i++ {
		sum[i+1] = sum[i] + nums[i]
	}
	res := l + 1
	for i := 0; i < l+1; i++ {
		index := search(sum, i, l, sum[i]+target)
		res = min(res, index-i)
	}
	if res == l+1 {
		return 0
	} else {
		return res
	}
}
