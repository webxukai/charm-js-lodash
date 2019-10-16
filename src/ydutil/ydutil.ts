/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 15:55:16
 * @LastEditTime: 2019-10-16 17:08:47
 * @LastEditors: Please set LastEditors
 */
/**
 *类型判断
 * @param target
 * @param type
 * @example _.baseTypeof(11, 'Number') => true
 */
export function baseTypeof(target: any, type: string) {
  let str = `[object ${type}]`;
  return Object.prototype.toString.call(target) === str;
}

/**
 * 报错信息
 * @param error
 */
export function errorLog(error: string) {
  throw new Error(error);
}

export function array2Set(array: any[]): any {
  return new Set([...array]);
}
export function set2Array(set: any): any[] {
  return [...set];
}
export function slice(array: any[], start: number, end: number): any[] {
  return array.slice(start, end);
}
export function splite(
  array: any[],
  start: number,
  deleteCount: number,
  value: any = ""
) {
  return value
    ? array.splice(start, deleteCount, value)
    : array.splice(start, deleteCount);
}

export function uniqueArray(array:any[]):any[] {
    return set2Array(array2Set([...array]))
}
/**
 * 判断数组中是否有某个元素
 * @param array 
 * @param value 
 */
export function hasValue(array:any[],value:any):boolean {
    return array.some((v) => v == value)
}
