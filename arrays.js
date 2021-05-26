var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const newArr = [element, ...array];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  const newArr = [...array, element];
  return newArr;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, element) {
  return array[element];
}
