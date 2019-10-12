/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 15:59:09
 * @LastEditTime: 2019-10-12 16:05:58
 * @LastEditors: Please set LastEditors
 */
/**
 * 将 array 中的所有元素转换为由 separator 分隔的字符串。
 * @param array 原数组
 * @param separator 拼接字符
 * @example x.join(['a', 'b', 'c'], '~'); => 'a~b~c'
 */
function join(array:any[],separator:string = ','):string {
    let newStr:string = array[0]
    for (let i = 1; i < array.length; i++) {
        const element:any = array[i];
        newStr += separator + element
    }
    return newStr
}
export default join;