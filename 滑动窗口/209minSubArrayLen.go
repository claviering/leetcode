package main

func min(a int, b int) int {
	if a < b {
		return a
	} else {
		return b
	}
}

func minSubArrayLen(target int, nums []int) int {
	length := len(nums)
	res := length + 1
	i, j, sum := 0, 0, 0
	// 滑动窗口
	for j < length {
		sum += nums[j]
		j++
		for sum >= target {
			res = min(res, j-i)
			sum -= nums[i]
			i++
		}
	}
	if res == length+1 {
		return 0
	} else {
		return res
	}
}

func main() {
	res := minSubArrayLen(11, []int{1, 2, 3, 4, 5})
	print(res)
}
