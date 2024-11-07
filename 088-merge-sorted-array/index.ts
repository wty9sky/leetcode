/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1:number = m - 1, p2:number = n - 1;
    while (p1 >= 0 && p2 >= 0) {
        nums1[p1 + p2 + 1] = nums1[p1] < nums2[p2] ? nums2[p2--] : nums1[p1--]
    }
    while (p2 >= 0) {
        nums1[p1 + p2 + 1] = nums2[p2--];
    }
};