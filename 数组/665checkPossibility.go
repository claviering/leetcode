package main

import "fmt"

func ascending(nums []int) bool {
	cur := nums[0]
	change := 1
	for i := 1; i <= len(nums)-1; i++ {
		if cur > nums[i] {
			change--
		} else {
			cur = nums[i]
		}
		if change == -1 {
			return false
		}
	}
	return true
}
func descending(nums []int) bool {
	cur := nums[len(nums)-1]
	change := 1
	for i := len(nums) - 2; i >= 0; i-- {
		if nums[i] > cur {
			change--
		} else {
			cur = nums[i]
		}
		if change == -1 {
			return false
		}
	}
	return true
}

func checkPossibility(nums []int) bool {
	return ascending(nums) || descending(nums)
}

func main() {
	fmt.Printf("%t\n", checkPossibility([]int{4, 2, 3}))    // true
	fmt.Printf("%t\n", checkPossibility([]int{4, 2, 1}))    // false
	fmt.Printf("%t\n", checkPossibility([]int{3, 4, 2, 3})) // false
}
