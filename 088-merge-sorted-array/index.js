// 方法一：合并后直接排序
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 时间复杂度：O(N^2)
var merge = function (nums1, m, nums2, n) {
    // 先合并数组，然后再进行排序
    // 两个指针循环指向
    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[i - m]
    }
    for (let i = 0; i < m + n; i++) {
        let flag = true
        for (let j = 0; j < m + n - i; j++) {
            if (nums1[j] > nums1[j + 1]) {
                let tmp = nums1[j];
                nums1[j] = nums1[j + 1]
                nums1[j + 1] = tmp;
                flag = false
            }
        }
        if (flag) {
            break;
        }
    }
};


// 方法二：双指针直接排序

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 时间复杂度：O(M+N)
var merge = function (nums1, m, nums2, n) {
    // 两个指针循环指向
    let p1 = m - 1, p2 = n - 1;
    while (p1 >= 0 && p2 >= 0) {
        nums1[p1 + p2 + 1] = nums1[p1] < nums2[p2] ? nums2[p2--] : nums1[p1--]
    }
    while (p2 >= 0) {
        nums1[p1 + p2 + 1] = nums2[p2--];
    }
};