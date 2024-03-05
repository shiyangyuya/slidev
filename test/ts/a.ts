/** 放置一些常用的类型及处理方法 */

/** 通用对象的key */
export type Keys = string | number | symbol;

/** 通用对象 */
export type NormalObj = {
  [K in Keys]: unknown;
};

/** 由联合类型生成对象 */
export type UnionToObj<T extends Keys, U extends unknown = string> = {
  [K in T]: U;
};

/** 提取对象的key生成联合类型 */
export type KeyOfObj<T extends NormalObj> = keyof T;

/** 提取一个对象中的某些key生成新对象 */
export type ObjIncludeKeys<T extends NormalObj, K extends Keys> = {
  [U in KeyOfObj<T> & K]: T[U];
};

/** 排除一个对象中的某些key生成新对象 */
export type ObjExcludeKeys<T extends NormalObj, K extends Keys> = {
  [U in Exclude<KeyOfObj<T>, K>]: T[U];
};