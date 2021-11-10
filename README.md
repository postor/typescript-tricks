# typescript-tricks
typescript 类型转换示例

## 对象值从异步函数映射到结果

[./src/object-of-async-to-awaited.ts](./src/object-of-async-to-awaited.ts)
```
type Await<T> = T extends PromiseLike<infer U> ? U : T

type ResultType<T extends { [key: string]: () => Promise<any> }> = {
  [P in keyof T]: Await<ReturnType<T[P]>>
}

function awaitAll<T extends { [key: string]: () => Promise<any> }>(obj: T): ResultType<T> {...}
```

## 泛型类实例的数组映射到泛型的数组

[./src/array-of-generic-t-to-t.ts](./src/array-of-generic-t-to-t.ts)
```
type UnWrapV<T> = T extends V<infer U> ? U : T

type UnwrapArray<T extends [...any[]]> = T extends [infer Head, ...infer Tail]
  ? [UnWrapV<Head>, ...UnwrapArray<Tail>]
  : [];

class V<T> {
  constructor(public x: T) { }
}

function unwrapAll<T extends [...V<any>[]]>(arr: [...T]):UnwrapArray<T> {
  ...
}
```