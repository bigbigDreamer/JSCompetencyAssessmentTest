/**
 * @time  2018/10/15 9:46
 * @author  Bill Wang <1826001146@qq.com>
 * @desc     题目描述<br>
 *            计算给定数组 arr 中所有元素的总和<br>
 *           输入描述:<br>
 *           数组中的元素均为 Number 类型<br>
 * @todo  熟悉数组的相关事宜
 * @var {object} methods - 标识一个方法对象
 * @func
 * @param {object} arr - 对象数组
 */
let methods = {
    arrSum(arr) {
        let sum = 0;
        arr.map((item) => {
            return sum += item;
        });
        return sum;
    }
};
let arr = [1, 2, 5, 9, 8];
console.log(methods.arrSum(arr));
