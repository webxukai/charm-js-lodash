/*
 * @Description: In User Settings Edit
 * @Author: xu kai
 * @Date: 2019-10-11 10:47:12
 * @LastEditTime: 2019-10-11 11:28:15
 * @LastEditors: Please set LastEditors
 */

/**
 *将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * @param arr 原数组
 * @param num 截取数字
 * @example
 * x.chunk([1,2,3,4,5,6,7,8,9,10,11],3) => [[1,2,3],[4,5,6],[7,8,9],[10,11]]
 */
function chunk(arr: any[], num: number = 1): any[] {
  let newArr: any[] = [];
  let len: number = arr.length;
  for (let i = 0; i < Math.ceil(len / num); i++) {
    newArr.push(
      arr.slice(
        arr[i * num] - 1,
        arr[(i + 1) * num] - 1 < len ? arr[(i + 1) * num] - 1 : len
      )
    );
  }
  return newArr;
}

export default chunk;
