type Fish = {
  swim: () => void
}

type Bird = {
  fly: () => void
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// predict type with `pet is Fish`

let pet = { fly: () => { } } as Fish | Bird

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

// predict type with `boolean`

// function isBird(pet: Fish | Bird): boolean {
//   return (pet as Fish).swim !== undefined;
// }

// if (isBird(pet)) {
//   pet.fly();
// } else {
//   pet.swim();
// }


export {}