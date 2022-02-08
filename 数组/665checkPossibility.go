package main

import "fmt"

func ascending(nums []int) bool {
	copynums := make([]int, len(nums))
	copy(copynums, nums)
	change := 1
	for i := 0; i < len(copynums)-1; i++ {
		if copynums[i] > copynums[i+1] {
			change--
			copynums[i+1] = copynums[i] // 改后一个元素
		}
		if change == -1 {
			return false
		}
	}
	return true
}
func descending(nums []int) bool {
	copynums := make([]int, len(nums))
	copy(copynums, nums)
	change := 1
	for i := len(copynums) - 1; i > 0; i-- {
		if copynums[i-1] > copynums[i] {
			change--
			copynums[i-1] = copynums[i] // 改前一个元素
		}
		if change == -1 {
			return false
		}
	}
	return true
}

func checkPossibility(nums []int) bool {
	res := ascending(nums) || descending(nums)
	return res
}

func main() {
	fmt.Printf("%t\n", checkPossibility([]int{4, 2, 3}))    // true
	fmt.Printf("%t\n", checkPossibility([]int{4, 2, 1}))    // false
	fmt.Printf("%t\n", checkPossibility([]int{3, 4, 2, 3})) // false
}
