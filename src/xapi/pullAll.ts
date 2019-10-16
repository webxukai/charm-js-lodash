/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 13:29:03
 * @LastEditTime: 2019-10-16 13:35:31
 * @LastEditors: Please set LastEditors
 */
/**
 * 这个方法类似 _.pull，区别是这个方法接收一个要移除值的数组。Note: 不同于 _.difference, 这个方法会改变数组 array。
 * @param array 
 * @param value 
 * @example var array = [1, 2, 3, 1, 2, 3];x.pullAll(array, [2, 3]);console.log(array);// => [1, 1]
 */
function pullAll(array:any[],value:any[]):any[] {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        for (let j = 0; j < value.length; j++) {
          const elementj = value[j];
          if (element === elementj) {
            array.splice(i, 1);
            i--;
          }
        }
      }
      return array;
}

export default pullAll;