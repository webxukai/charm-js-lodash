/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 10:54:58
 * @LastEditTime: 2019-10-16 10:59:28
 * @LastEditors: Please set LastEditors
 */
/**
 * 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
 * @param array 
 * @param n 查询索引
 * @example var array = ['a', 'b', 'c', 'd'];x.nth(array, 1);// => 'b'  x.nth(array, -2); => 'c';
 */
function nth(array: any[], n: number = 0): any {
  return array[n < 0 ? array.length + n : n];
}

export default nth;
