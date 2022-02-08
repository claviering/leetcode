package main

func wateringPlants(plants []int, capacity int) int {
	res := 0
	max := len(plants)
	cur := capacity
	for i := 0; i < max; i++ {
		if plants[i] <= cur {
			cur = cur - plants[i]
			res++
		} else {
			res = res + i + i + 1 // 回到小河再回来
			cur = capacity
			cur = cur - plants[i]
		}
	}
	return res
}

func main() {
	plant := []int{2, 2, 3, 4}
	wateringPlants(plant, 5)
}
