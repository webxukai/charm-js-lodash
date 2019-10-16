/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 11:01:12
 * @LastEditTime: 2019-10-16 13:26:24
 * @LastEditors: Please set LastEditors
 */
/**
 * 移除数组array中所有和给定值相等的元素
 * @param array 原数组
 * @param values 给定值
 * @example var array = [1, 2, 3, 1, 2, 3];_.pull(array, 2, 3); => [1, 1]
 */
function pull(array: any[], ...values: any): any[] {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    for (let j = 0; j < values.length; j++) {
      const elementj = values[j];
      if (element === elementj) {
        array.splice(i, 1);
        i--;
      }
    }
  }
  return array;
}

export default pull;
