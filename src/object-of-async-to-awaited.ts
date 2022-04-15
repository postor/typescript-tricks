type Await<T> = T extends PromiseLike<infer U> ? U : T

type ResultType<T extends { [key: string]: () => Promise<any> }> = {
  [P in keyof T]: Await<ReturnType<T[P]>>
}

function awaitAll<T extends { [key: string]: () => Promise<any> }>(obj: T): ResultType<T> {
  let rtn: any = {}
  for (let k in obj) {
    rtn[k] = unwrap(obj[k])
  }
  return rtn
}

async function unwrap<T>(x: () => Promise<T>) {
  return await x()
}

let rtn = awaitAll({
  math: async () => ({ add: (a: number, b: number) => a + b })
})


let t = rtn.math.add(1, 1)

export {}