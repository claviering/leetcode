package main

func countPoints(points [][]int, queries [][]int) []int {
	pLen := len(points)
	qlen := len(queries)
	res := make([]int, qlen)
	for i := 0; i < qlen; i++ {
		count := 0
		for j := 0; j < pLen; j++ {
			rx, ry, r, px, py := queries[i][0], queries[i][1], queries[i][2], points[j][0], points[j][1]
			if px > (rx+r) || px < (rx-r) || py > (ry+r) || py < (ry-r) {
				continue
			} else if (px-rx)*(px-rx)+(py-ry)*(py-ry) <= r*r {
				count++
			}
		}
		res[i] = count
	}
	return res
}

func main() {
	points := [][]int{{1, 3}, {3, 3}, {5, 3}, {2, 2}}
	queries := [][]int{{2, 3, 1}, {4, 3, 1}, {1, 1, 2}}
	countPoints(points, queries)
}
