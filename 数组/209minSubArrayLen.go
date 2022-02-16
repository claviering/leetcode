package main

func search(nums []int, left int, right int, target int) int {
	for left <= right {
		mid := (left + right) / 2
		value := nums[mid]
		if target == value {
			return mid
		} else if target < value {
			right = mid - 1
		} else if target > value {
			left = mid + 1
		}
	}
	if left < len(nums) {
		return left
	} else {
		return -1
	}
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
		if index != -1 {
			res = min(res, index-i)
		}
	}
	if res == l+1 {
		return 0
	} else {
		return res
	}
}

func main() {
	res := minSubArrayLen(11, []int{1, 2, 3, 4, 5})
	print(res)
}
