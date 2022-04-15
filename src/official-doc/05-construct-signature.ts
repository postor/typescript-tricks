interface IFoo { x: number }

interface CallOrConstruct {
  new(): IFoo;
  (): number;
}

function Foo(this: IFoo) {
  if (new.target) {
    console.log('called with new');
    this.x = 1
  } else {
    console.log('not called with new');
    return 1
  }
}

let fn = Foo as CallOrConstruct
// let fn = Foo

let a = new fn()
let b = fn()


export { }