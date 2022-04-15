type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function fn(x = 5) {
  return true
}

fn.description = 'hello'

let f: DescribableFunction = fn
