type UnWrapV<T> = T extends V<infer U> ? U : T

type UnwrapArray<T extends [...any[]]> = T extends [infer Head, ...infer Tail]
  ? [UnWrapV<Head>, ...UnwrapArray<Tail>]
  : [];

class V<T> {
  constructor(public x: T) { }
}

function unwrapAll<T extends [...V<any>[]]>(arr: [...T]) {
  return arr.map(y => y.x) as UnwrapArray<T>
}


let rtn1 = unwrapAll([new V(1), new V('str')])