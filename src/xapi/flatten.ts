/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 14:27:02
 * @LastEditTime: 2019-10-11 15:52:25
 * @LastEditors: Please set LastEditors
 */
/**
 * 
 * @param array 
 */
function flatten(array:any[]):any[] {
    let newArr:any[] = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(Object.prototype.toString.call(element) !== "[object Array]") {
            newArr.push(element)
        }else {
            for (let j = 0; j < element.length; j++) {
                const elementj = element[j];
                newArr.push(elementj)
            }
        }
    }
    return newArr 
}
export default flatten;