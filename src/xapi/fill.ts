/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 14:00:49
 * @LastEditTime: 2019-10-11 14:13:18
 * @LastEditors: Please set LastEditors
 */
/**
 * 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
 * @param array 
 * @param value 
 * @param start 
 * @param end 
 * @extends  fill([4, 6, 8, 10], '*', 1, 3); => [4, '*', '*', 10]
 */
function fill(array:any[],value:any,start:number=0,end:number=array.length):any[] {
    let newArr:any[] = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(i >= start && i < end) {
            newArr.push(value)
        } else {
            newArr.push(element);
        }
    }
    return newArr;
}

export default fill;