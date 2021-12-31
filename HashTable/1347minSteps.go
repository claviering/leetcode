package main

import "fmt"

func minSteps(s string, t string) int {
	// 统计字母出现的频率
	sMap := make(map[byte]int)
	tMap := make(map[byte]int)
	for i := 0; i < len(s); i++ {
		key := s[i] - 'a'
		if _, ok := sMap[key]; ok {
			sMap[key]++
		} else {
			sMap[key] = 1
		}
	}
	for i := 0; i < len(t); i++ {
		key := t[i] - 'a'
		if _, ok := tMap[key]; ok {
			tMap[key]++
		} else {
			tMap[key] = 1
		}
	}
	res := 0
	for key, value := range tMap {
		// fmt.Printf("%c", key+'a')
		// t 中的字母存在于 s
		if _, ok := sMap[key]; ok && value-sMap[key] > 0 {
			res += value - sMap[key]
		} else if !ok {
			res += value
		}
	}
	return res
}

// 作者：Triste_24
// 链接：https://leetcode-cn.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solution/tong-ji-shu-by-triste_24-2/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// 桶计数
func minSteps2(s string, t string) int {
	bucket := make([]int, 26)
	for i := range s {
		bucket[s[i]-'a']++
		bucket[t[i]-'a']--
	}
	ret := 0
	for _, count := range bucket {
		if count > 0 {
			//只需要统计一个string的count
			ret += count
		}
	}
	return ret
}

func main() {
	fmt.Printf("%d\n", minSteps("leetcode", "practice"))
	fmt.Printf("%d\n", minSteps("bab", "aba"))
	fmt.Printf("%d\n", minSteps("a", "b"))
	fmt.Printf("%d\n", minSteps("le", "pr"))
	fmt.Printf("%d\n", minSteps("anagram", "mangaar"))
}
