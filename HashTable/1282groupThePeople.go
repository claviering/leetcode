package main

func groupThePeople(groupSizes []int) [][]int {
	res := [][]int{}
	resMap := make(map[int][][]int)
	for i, size := range groupSizes {
		lastIndex := len(resMap[size]) - 1
		if lastIndex < 0 {
			lastIndex = 0
		}
		if _, ok := resMap[size]; !ok {
			resMap[size] = make([][]int, 0)
		}
		if len(resMap[size]) == 0 || len(resMap[size][lastIndex]) >= size {
			l := []int{i}
			resMap[size] = append(resMap[size], l)
		} else {
			resMap[size][lastIndex] = append(resMap[size][lastIndex], i)
		}
	}
	for _, list := range resMap {
		for _, v := range list {
			res = append(res, v)
		}
	}
	return res
}

func main() {
	test := []int{2, 1, 3, 3, 3, 2}
	groupThePeople(test)
	test = []int{3, 3, 3, 3, 3, 1, 3}
	groupThePeople(test)
}
