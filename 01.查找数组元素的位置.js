/**
 * @time  2018/10/15 8:41
 * @author  Bill Wang <1826001146@qq.com>
 * @desc     题目描述<br>
             找出元素 item 在给定数组 arr 中的位置<br>
             输出描述:<br>
             如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1<br>
 * @param {object} arr - 传入的目标数组
 * @param {string} a - 参数a
 * @returns {boolean} 返回值为true
 * @todo  再次熟悉
 */
const methodsObj = {
    findIndex(arr, item) {
        for (let i = 0; i<arr.length;i++) {
            if (arr[i] === item){
                return i;
            }
        }
        return -1;
    }
}
let arr = [1,8,9,2,6];
console.log(methodsObj.findIndex(arr,2));
