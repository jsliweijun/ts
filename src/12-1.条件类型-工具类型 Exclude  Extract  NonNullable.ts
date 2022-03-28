// 工具类型 ， 实现类型的转换， 更快的创建新类型。
// TypeScript提供了几种实用 工具类型 来促进常见的类型转换。这些实用程序是全局可用的。
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// 条件类型：  使用 extends   三元表达式 进行判断类型

interface Fish {}
interface Water {}

interface Bird {}
interface Sky {}

type getTypeByInput<T> = T extends Fish ? Water : Sky; // 使用了类型判断，返回新类型

let f: getTypeByInput<Fish>; // f Water 类型
let b: getTypeByInput<Bird>; // b 为 Sky 类型

// 工具类型

// 1 exclude<全部，某个xx> 不包括， 返回一个不包括 某个xx 的类型集合 排除
// type union = 'a' | 'b' | 'c';
// type xxMember = 'a';
// type a = Exclude<union, xxMember>; // type a = "b" | "c"
// Exclude<U,X> = U extends X ? never : U;

// 2 . Extract<type,union>  提取想要的类型
type union = 'a' | 'b' | 'c';
type xxMember = 'a';
type newa = Extract<xxMember, union>; // type newa = "a"
// Extract<T,U> = T extends U ? T : never;

//3 NonNullable<T>
// Constructs a type by excluding null and undefined from Type.
// 通过从type中排除null和未定义来构造类型。
type T1 = string | null | undefined | number;
type t = NonNullable<T1>; // type t = string | number
// NonNullable<T> = T extends null | undefined ? never : T;

export {};
