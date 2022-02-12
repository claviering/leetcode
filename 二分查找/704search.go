package main

import "fmt"

func search(nums []int, target int) int {
	left, right := 0, len(nums)-1
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
	return -1
}

func main() {
	res := search([]int{-1, 0, 3, 5, 9, 12}, 13)
	fmt.Print(res)
}
