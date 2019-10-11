/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 17:47:48
 * @LastEditTime: 2019-10-11 14:28:46
 * @LastEditors: Please set LastEditors
 */

import first from "./xapi/first";
import last from './xapi/last';
import chunk from './xapi/chunk';
import compact from './xapi/compact';
import concat from './xapi/concat';
import drop from './xapi/drop';
import dropRight from './xapi/dropRight';
import fill from './xapi/fill';
import flatten from './xapi/flatten';

class X {
  constructor() {}
  first: any = first;
  last:any = last;
  chunk:any = chunk;
  compact:any = compact;
  concat:any = concat;
  drop:any = drop;
  dropRight:any = dropRight;
  fill:any = fill;
  flatten:any = flatten
}
let x = new X();

export default x;
