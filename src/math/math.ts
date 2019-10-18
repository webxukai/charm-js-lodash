/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 11:07:17
 * @LastEditTime: 2019-10-17 14:05:38
 * @LastEditors: Please set LastEditors
 */
/**
 * 根据 precision（精度） 向上舍入 number。（ precision（精度）可以理解为保留几位小数。）
 * @param number 要向上舍入的值。
 * @param precision 向上舍入的的精度。
 */
export const ceil = createRound("ceil");
/**
 * 根据 precision（精度）四舍五入 number。（ precision（精度）可以理解为保留几位小数。）
 * @param number 要向上舍入的值。
 * @param precision 向上舍入的的精度。
 */
export const round = createRound("round");
/**
 * 根据 precision（精度） 向下舍入 number。（ precision（精度）可以理解为保留几位小数。）
 * @param number 要向上舍入的值。
 * @param precision 向上舍入的的精度。
 */
export const floor = createRound("floor");
export function add(array: any): number {
  let newNumber: number = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newNumber += element;
  }
  return newNumber;
}

export function mean(array: any): number {
  let newNumber: number = add(array) / array.length;
  return newNumber;
}

function createRound(methodName: string) {
  const func = Math[methodName];
  return (number: number, precision: number) => {
    precision =
      precision == null
        ? 0
        : precision >= 0
        ? Math.min(precision, 292)
        : Math.max(precision, -292);
    if (precision) {
      // Shift with exponential notation to avoid floating-point issues.
      // See [MDN](https://mdn.io/round#Examples) for more details.
      let pair = `${number}e`.split("e");
      const value = func(`${pair[0]}e${+pair[1] + precision}`);
      pair = `${value}e`.split("e");
      return +`${pair[0]}e${+pair[1] - precision}`;
    }
    return func(number);
  };
}
