/**
 * @time  2018/10/16 9:21
 * @author  Bill Wang <1826001146@qq.com>
 * @desc   题目描述
 *          找出数组 arr 中重复出现过的元素
 * @param
 * @todo  熟悉数组的操作
 */
let method = (arr)=>{
   let str =  arr.join('');
    console.log(str.match(/(\d)\1{1,}/g))

};
method([1,5,8,8,9,6,5,1])
