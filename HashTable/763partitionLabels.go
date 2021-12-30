package main

func partitionLabels(s string) []int {
	start := -1
	res := []int{}                     // 字符串的长度
	lastIndexMap := make(map[byte]int) // 字符出现的最大下标
	for i := 0; i < len(s); i++ {
		lastIndexMap[s[i]-'a'] = i
	}
	// 遍历 s, 下标 index 等于前面已经遍历过的字符的最大位置
	maxIndex := 0
	for i := 0; i < len(s); i++ {
		last := lastIndexMap[s[i]-'a']
		if maxIndex < last {
			maxIndex = last
		}
		if i == maxIndex {
			res = append(res, i-start)
			start = i
		}
	}
	return res
}

func main() {
	partitionLabels("ababcbacadefegdehijhklij")
}
