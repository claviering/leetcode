package main

// P[j] - P[i] mode k == 0
// 找出 p[j] mod k  == p[i] mod k 的个数
func subarraysDivByK(nums []int, k int) int {
	count := 0
	sum := 0
	hash := map[int]int{0: 1} // sum[0] mod k -> 0 mod k, 下面for循环从 sum[1] 开始
	for i := 0; i < len(nums); i++ {
		sum = (sum + nums[i]) % k
		if sum < 0 {
			sum += k
		}
		if v, ok := hash[sum]; ok {
			count += v
			hash[sum]++
		} else {
			hash[sum] = 1
		}
	}
	return count
}

func main() {
	res := subarraysDivByK([]int{-1, 2, 9}, 2)
	print(res)
}
