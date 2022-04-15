// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers

const args = [8, 5];
// const args = [8, 5] as const;
// const args: [number, number] = [8, 5];




const angle = Math.atan2(...args);