/**
 * @time  2018/10/15 21:03
 * @author  Bill Wang <1826001146@qq.com>
 * @desc  题目描述
 *        移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
 * @param remove
 * @todo 熟悉数组的常用操作
 */
const _ = require('lodash');
let method = (arr, item) => {
    _.remove(arr, (n) => {
        return item === n;
    });
    console.log(arr);
};
let arr = [1, 5, 8, 9, 6];
method(arr, 8);
console.log(arr);
