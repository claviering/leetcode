package main

func max(a int, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
}
func min(a int, b int) int {
	if a > b {
		return b
	} else {
		return a
	}
}

func maxIncreaseKeepingSkyline(grid [][]int) int {
	len := len(grid[0])
	col := make([]int, len)
	row := make([]int, len)
	for i := 0; i < len; i++ {
		col[i] = 0
		row[i] = 0
	}
	for i, r := range grid {
		for j, val := range r {
			col[i] = max(val, col[i])
			row[j] = max(val, row[j])
		}
	}
	res := 0
	for i, r := range grid {
		for j, val := range r {
			curMax := min(col[i], row[j])
			res += curMax - val
		}
	}
	return res
}
func main() {
	grid := [][]int{{3, 0, 8, 4}, {2, 4, 5, 7}, {9, 2, 6, 3}, {0, 3, 1, 0}}
	maxIncreaseKeepingSkyline(grid)
}
