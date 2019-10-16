/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 17:47:48
 * @LastEditTime: 2019-10-16 15:12:50
 * @LastEditors: Please set LastEditors
 */
import encrypt from "./myutil/myutil";

import first from "./xapi/first";
import last from "./xapi/last";
import chunk from "./xapi/chunk";
import compact from "./xapi/compact";
import concat from "./xapi/concat";
import drop from "./xapi/drop";
import dropRight from "./xapi/dropRight";
import fill from "./xapi/fill";
import flatten from "./xapi/flatten";
import flattenDepth from "./xapi/flattenDepth";
import fromPairs from "./xapi/fromPairs";
import indexOf from "./xapi/indexOf";
import initial from "./xapi/initial";
import intersection from "./xapi/intersection";
import join from "./xapi/join";
import lastIndexOf from "./xapi/lastIndexOf";
import nth from "./xapi/nth";
import pull from "./xapi/pull";
import pullAll from "./xapi/pullAll";

/**
 * lang包工具
 */
import { castArray, clone, isArray, isFunction, isArrayBuffer, isArrayLike } from "./lang/lang";

class X {
  constructor() {}
  first: any = first;
  last: any = last;
  chunk: any = chunk;
  compact: any = compact;
  concat: any = concat;
  drop: any = drop;
  dropRight: any = dropRight;
  fill: any = fill;
  flatten: any = flatten;
  flattenDepth: any = flattenDepth;
  fromPairs: any = fromPairs;
  indexOf: any = indexOf;
  initial: any = initial;
  intersection: any = intersection;
  join: any = join;
  encrypt: any = encrypt;
  lastIndexOf: any = lastIndexOf;
  nth: any = nth;
  pull: any = pull;
  pullAll: any = pullAll;

  castArray: any = castArray;
  clone: any = clone;
  isArray: any = isArray;
  isFunction:any = isFunction
  isArrayBuffer:any = isArrayBuffer
  isArrayLike:any = isArrayLike
}
let x = new X();

export default x;
