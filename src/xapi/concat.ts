/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 13:08:48
 * @LastEditTime: 2019-10-11 13:26:17
 * @LastEditors: Please set LastEditors
 */
/**
 * 
 * @param arg 
 * @example x.concat(array, 2, [3], [[4]]); => [1, 2, 3, [4]]
 */
function concat(...arg: any): any[] {
  let newArr: any[] = [];
  for (let i = 0; i < arg.length; i++) {
    const element = arg[i];
    if (Object.prototype.toString.call(element) !== "[object Array]") {
      newArr.push(element);
    } else {
      for (let j = 0; j < element.length; j++) {
        const elementj: any = element[j];
        newArr.push(elementj);
      }
    }
  }
  return newArr;
}
export default concat;
