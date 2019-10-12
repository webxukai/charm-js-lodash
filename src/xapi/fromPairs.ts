/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 14:42:01
 * @LastEditTime: 2019-10-12 15:17:07
 * @LastEditors: Please set LastEditors
 */
/**
 * 与 x.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。
 * @param pairs 
 * @example x.fromPairs([['fred', 30], ['barney', 40]]); => { 'fred': 30, 'barney': 40 }
 */
function fromPairs(pairs:Array<Array<any>>):object {
    let newObj:object = {}
    for (let i = 0; i < pairs.length; i++) {
        const element:any[] = pairs[i];
        newObj[element[0]] = element[1];
        
    }
    return newObj
}

export default fromPairs;