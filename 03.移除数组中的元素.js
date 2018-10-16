/**
 * @time  2018/10/15 20:42
 * @author  Bill Wang <1826001146@qq.com>
 * @desc  题目描述<br>
 * 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组<br>
 * @todo  熟悉数组的操作
 * @param arr {object} - 传入数组
 * @param item {number} - 数组元素
 */
const _ = require('lodash');
let method = (arr, item) => {
    let newArr = JSON.parse(JSON.stringify(arr));
    console.log(newArr);
    _.remove(newArr, (n) => {
        return item === n;
    });
    console.log(newArr);
};
let arr = [1, 5, 8, 9, 6];
method(arr, 8);
console.log(arr);