/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 15:33:41
 * @LastEditTime: 2019-10-12 14:39:31
 * @LastEditors: Please set LastEditors
 */
/**
 * 将array递归为一维数组。
 * @param array 原数组
 * @param number 扁平次数
 * x.flattenDeep([1, [2, [3, [4]], 2]]); => [1, 2, 3, [4], 5]
 */
function flattenDepth(array: any[], number: number = 1): any[] {
  if (number <= 0) {
    return array;
  }
  let newArr: any[] = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Object.prototype.toString.call(element) !== "[object Array]") {
      newArr.push(element);
    } else {
      for (let j = 0; j < element.length; j++) {
        const elementj = element[j];
        newArr.push(elementj);
      }
    }
  }
  number--;
  return flattenDepth(newArr, number);
}

export default flattenDepth;