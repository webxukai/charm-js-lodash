/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 13:58:56
 * @LastEditTime: 2019-10-17 10:54:43
 * @LastEditors: Please set LastEditors
 */
/**
 *如果 value 不是数组, 那么强制转为数组。
 * @param value 接收值
 * @example x.castArray({ 'a': 1 }); => [{ 'a': 1 }]
 */
export function castArray(value: any): any[] {
  let newArr: any = [];
  if (isArray(value)) {
    return value
  }
  newArr.push(value)
  return newArr;
}
/**
 * 浅克隆
 * @param value 
 */
export function clone(value: any): any {
  let newValue:any = {}
  for (const prop in value) {
    if (value.hasOwnProperty(prop)) {
      newValue[prop] = value[prop];
    }
  }
  return newValue;
}
/**
 * 深克隆
 * @param value 
 */
export function cloneDeep(value: any,newValue:any = {}): any {
  for (const prop in value) {
    if (value.hasOwnProperty(prop)) {
      const element = value[prop];
      if (element !== null && typeof element === 'object') {
        if (isArray(element)) {
          newValue[prop] = [];
        }else {
          newValue[prop] = {};
        }
        cloneDeep(element,newValue[prop]);
      } else {
        newValue[prop] = value[prop]
      }
    }
  }
  return newValue;
}
/**
 * 比较两值是否相等
 * @param value 
 * @param other 
 */
export function eq(value:any, other:any):boolean {
  return value === other || (value !== value && other !== other)
}

/**
 *检查 value 是否是一个类 arguments 对象。
 * @param value
 */
export function isArguments(value: any): boolean {
  if (Object.prototype.toString.call(value) == "[object Arguments]") {
    return true;
  }
  return false;
}
/**
 *检查 value 是否是 Array 类对象。
 * @param value
 */
export function isArray(value: any): boolean {
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *检查 value 是否是 ArrayBuffer 对象。
 * @param value
 */
export function isArrayBuffer(value: any): boolean {
  if (Object.prototype.toString.call(value) == "[object ArrayBuffer]") {
    return true;
  }
  return false;
}
/**
 *检查 value 是否是类数组。 如果一个值被认为是类数组，那么它不是一个函数，并且value.length是个整数，大于等于 0，小于或等于 Number.MAX_SAFE_INTEGER。
 * @param value
 */
export function isArrayLike(value: any): boolean {
  if (
    isFunction(value) === false &&
    value.length &&
    isInteger(value.length) &&
    value.length >= 0
  ) {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isBoolean(value: any): boolean {
  if (Object.prototype.toString.call(value) == "[object Boolean]") {
    return true;
  }
  return false;
}

/**
 *
 * @param value
 */
export function isDate(value: any): boolean {
  if (Object.prototype.toString.call(value) == "[object Date]") {
    return true;
  }
  return false;
}

/**
 *检查 value 是否是 Function 对象。
 * @param value
 */
export function isFunction(value: any): boolean {
  if (typeof value === "function") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isInteger(value: any): boolean {
  if (Number.isInteger(value)) {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isMap(value: any): boolean {
  if (Object.prototype.toString.call(value) == "[object Map]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isNull(value: any): boolean {
  if (value === null) {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isNumber(value: any): boolean {
  if (Object.prototype.toString.call(value) == "[object Number]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isObject(value: any): boolean {
  if (
    value != null &&
    (typeof value === "object" || typeof value === "function")
  ) {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isObjectLike(value: any): boolean {
  if (typeof value === "object" && value !== null) {
    return true;
  }
  return false;
}

/**
 *
 * @param value
 */
export function isSet(value: any): boolean {
  if (Object.prototype.toString.call(value) == "[object Set]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isString(value: any): boolean {
  if (typeof value === "string") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isSymbol(value: any): boolean {
  if (typeof value === "symbol") {
    return true;
  }
  return false;
}

/**
 *
 * @param value
 */
export function isUndefined(value: any): boolean {
  if (value === undefined) {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isWeakMap(value: any): boolean {
  if (Object.prototype.toString.call(value) == "[object WeakMap]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isWeakSet(value: any): boolean {
  if (Object.prototype.toString.call(value) == "[object WeakSet]") {
    return true;
  }
  return false;
}
