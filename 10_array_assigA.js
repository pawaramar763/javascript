const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
let lengthOfFruits = arrayFruits.length;
let lastElement = arrayFruits[lengthOfFruits - 1];
console.log(`Last element of an array "${lastElement}"`);
console.log(
  `-----------------------------------------------------------------------------------------`
);
let firstElement = arrayFruits[0];
console.log(`First element of an array "${firstElement}"`);
console.log(
  `-----------------------------------------------------------------------------------------`
);
arrayFruits.unshift("Papaya");
console.log(`Added "Papaya" before "Banana"= [${arrayFruits}]`);
console.log(
  `-----------------------------------------------------------------------------------------`
);
arrayFruits.splice(4, 1);
console.log(`Removed "Mango" from array= [${arrayFruits}]`);
console.log(
  `-----------------------------------------------------------------------------------------`
);
arrayFruits.push("Pineapple");
console.log(`Added "Pineapple" at last position= [${arrayFruits}]`);
console.log(
  `-----------------------------------------------------------------------------------------`
);
arrayFruits.splice(4, 0, "Dragan Fruit");
console.log(
  `Inserted an element "Dragan Fruit" before "Water Melon"= [${arrayFruits}]`
);
console.log(
  `-----------------------------------------------------------------------------------------`
);
arrayFruits.splice(2, 1, "Kiwi");
console.log(`Replaced an element "Orange" with "kiwi"= [${arrayFruits}]`);
console.log(
  `-----------------------------------------------------------------------------------------`
);
let indexAt = arrayFruits.slice(1, 5);
console.log(`Elements at index 1 to 4= [${indexAt}]`);
console.log(
  `-----------------------------------------------------------------------------------------`
);
let lengthLast = arrayFruits.length;
let lastThreeElements = arrayFruits.slice(lengthLast - 3);
console.log(`Last Three elements of an array= [${lastThreeElements}]`);
console.log(
  `-----------------------------------------------------------------------------------------`
);
