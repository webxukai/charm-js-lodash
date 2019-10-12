/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 15:17:19
 * @LastEditTime: 2019-10-12 15:26:39
 * @LastEditors: Please set LastEditors
 */
/**
 * 
 * @param array 数组
 * @param value 查找值
 * @param fromIndex 从第几个值查找
 * @example x.indexOf([1, 2, 1, 2], 2, 2); => 3
 */
function indexOf(array: any[],value:any,fromIndex = 0):number {
    for (let i = fromIndex < 0 ?array.length + fromIndex : fromIndex; i < array.length; i++) {
        const element:any = array[i];
        if (element === value) {
            return i
        }
        
    }
    return -1
}
export default indexOf;
