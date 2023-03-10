/**
 *  斐波那契数列
 * 0,1,1,2,3,5,8,13,21,34,55....
 */
// 普通解法
// function recurFib(num) {
//     if (num <= 0) {
//         return 0;
//     }
//     if (num === 1 || num === 2) {
//         return 1;
//     }
//     return recurFib(num-2) + recurFib(num-1);
// }

// 动态规划解法
function recurFib(num) {

    if (num < 2) {
        return num;
    }

    const values = [0, 1, 1];
    for (let i = 3; i <= num; i++) {
        values[i] = values[i - 2] + values[i - 1];
    }
    return values[num];
}

console.log('result1：', recurFib(0));
console.log('result2：', recurFib(1));
console.log('result3：', recurFib(2));
console.log('result4：', recurFib(10));