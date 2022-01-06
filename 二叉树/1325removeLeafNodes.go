package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func removeLeafNodes(root *TreeNode, target int) *TreeNode {
	if root == nil {
		return nil
	} else if root.Left == nil && root.Right == nil && root.Val != target {
		return root
	} else if root.Left == nil && root.Right == nil && root.Val == target {
		return nil
	}
	// 后序遍历
	left := removeLeafNodes(root.Left, target)
	right := removeLeafNodes(root.Right, target)
	root.Left = left
	root.Right = right
	if root.Left == nil && root.Right == nil && root.Val == target {
		return nil
	} else {
		return root
	}
}

func main() {
	root := TreeNode{
		Val: 3,
		Left: &TreeNode{
			Val: 2,
		},
		Right: &TreeNode{
			Val: 1,
		},
	}
	r := removeLeafNodes(&root, 2)
	fmt.Print(r.Val)
}
