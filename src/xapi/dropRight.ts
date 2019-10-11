/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 13:44:06
 * @LastEditTime: 2019-10-11 13:58:01
 * @LastEditors: Please set LastEditors
 */
function dropRight(array:any[],number:number = 1):any[] {
    let newArr:any[] = [];
    if (array.length - number > 0){
        newArr = array.splice(0,array.length - number);
    } else {
        newArr = []
    }
    return newArr
}
export default dropRight;