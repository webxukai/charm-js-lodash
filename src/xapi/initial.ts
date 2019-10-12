/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 15:27:36
 * @LastEditTime: 2019-10-12 15:34:02
 * @LastEditors: Please set LastEditors
 */
/**
 * 获取数组array中除了最后一个元素之外的所有元素（去除数组array中的最后一个元素）。
 * @param array 
 * @example x.initial([1, 2, 3]); => [1, 2]
 */
function initial(array:any[]):any[] {
    let newArr:any[] = []
    newArr = array.slice(0,array.length-1)
    return newArr
}
export default initial