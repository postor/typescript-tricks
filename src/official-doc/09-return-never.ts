function fail(msg: string): never {
  throw new Error(msg);
}

// for example, to pack a custom Error