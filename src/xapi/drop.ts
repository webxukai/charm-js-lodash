/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 13:34:31
 * @LastEditTime: 2019-10-11 13:42:37
 * @LastEditors: Please set LastEditors
 */
/**
 * 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
 * @param array 
 * @param number 
 * @example x.drop([1, 2, 3], 2); => [3]
 */
function drop(array:any[],number:number = 1):any[] {
    let newArr:any[] = []
    newArr = array.splice(number)
    return newArr
}

export default drop