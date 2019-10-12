/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 15:36:48
 * @LastEditTime: 2019-10-12 15:53:44
 * @LastEditors: Please set LastEditors
 */

import x from "../X";
/**
 * 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用 SameValueZero进行相等性比较。（可以理解为给定数组的交集）
 * @param array 原数组
 * @example _.intersection([2, 1], [4, 2], [1, 2]); => [2]
 */
function intersection(...array:[][]):any[] {
    let newArr:any[] = array[0]
    for (let i = 1; i < array.length; i++) {
        const element:any[] = array[i];
        for (let j = 0; j < element.length; j++) {
            if (x.indexOf(newArr,element[j]) === -1) {
                element.splice(j,1)
            }
        }
        newArr = element;
    }
    return newArr
}
export default intersection;