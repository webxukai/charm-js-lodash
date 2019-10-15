/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 11:18:31
 * @LastEditTime: 2019-10-15 11:29:14
 * @LastEditors: Please set LastEditors
 */
/**
 * 
 * @param numb 初始
 * @param preNumber 前面留位数
 * @param endNumber 后面留位数
 * @param star 拼接符
 * @example x.encrypt(1234567,2,3,"@@@@@"); =>12@@@@@567
 */
function encrypt(numb:number|string, preNumber=1, endNumber=1, star:string|undefined) {
    let numberstr = numb.toString()
    if (star === undefined) {
        let starLen = numberstr.length - preNumber - endNumber
        star = "*".repeat(starLen)
    }
    return numberstr.substring(0, preNumber) + star + numberstr.substring(numberstr.length - endNumber, numberstr.length)
}


export default encrypt;