/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 13:58:56
 * @LastEditTime: 2019-10-16 15:11:13
 * @LastEditors: Please set LastEditors
 */
/**
 *
 * @param value 接收值
 */
export function castArray(value: any): any[] {
  let newArr: any = [];
  return newArr;
}
export function clone(value: any): any[] {
  let newArr: any = [];
  return newArr;
}

/**
 *检查 value 是否是一个类 arguments 对象。
 * @param value
 */
export function isArguments(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
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
  console.log(Object.prototype.toString.call(value));
  console.log(value.length);
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
  if (Object.prototype.toString.call(value) =="[object ArrayBuffer]") {
    return true;
  }
  return false;
}
/**
 *检查 value 是否是类数组。 如果一个值被认为是类数组，那么它不是一个函数，并且value.length是个整数，大于等于 0，小于或等于 Number.MAX_SAFE_INTEGER。
 * @param value
 */
export function isArrayLike(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (isFunction(value) === false && value.length && isInteger(value.length) && value.length >= 0) {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isArrayLikeObject(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isBoolean(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isBuffer(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isDate(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isElement(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isEmpty(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isEqual(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isEqualWith(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isError(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isFinite(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
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
export function isLength(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isMap(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isMatch(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isMatchWith(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isNaN(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isNative(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isNil(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isNull(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isNumber(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isObject(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isObjectLike(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isPlainObject(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isRegExp(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isSafeInteger(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isSet(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isString(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isSymbol(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isTypedArray(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isUndefined(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isWeakMap(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
/**
 *
 * @param value
 */
export function isWeakSet(value: any): boolean {
  console.log(Object.prototype.toString.call(value));
  if (Object.prototype.toString.call(value) == "[object Array]") {
    return true;
  }
  return false;
}
