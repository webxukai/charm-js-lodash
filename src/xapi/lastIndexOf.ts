/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 10:09:40
 * @LastEditTime: 2019-10-16 10:50:48
 * @LastEditors: Please set LastEditors
 */
/**
 * 
 * @param array 数组
 * @param value 查找值
 * @param fromIndex 从第几个开始
 * @example x.lastIndexOf([1, 2, 1, 2], 2); => 3
 * @example x.lastIndexOf([1, 2, 1, 2], 2, 2); => 1
 */
function lastIndexOf(array:any[],value:any,fromIndex:number = array.length - 1):number {
    for (let i = fromIndex; i > 0; i--) {
        const element = array[i];
        if ( element === value ) {
            return i
        }
    }
    return -1
}

export default lastIndexOf;