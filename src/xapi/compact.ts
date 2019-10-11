/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 11:28:42
 * @LastEditTime: 2019-10-11 13:05:06
 * @LastEditors: Please set LastEditors
 */
/**
 * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
 * @param arr arr
 * @example x.compact([0, 1, false, 2, '', 3]) => [1, 2, 3]
 */
function compact(array:any[]):any[] {
    let newArr:any[] = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element) {
            newArr.push(element)
        }
    }
    return newArr
}

export default compact