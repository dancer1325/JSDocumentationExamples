//                                                  Boolean conversion
const person = {
    age: 31,
    name: "Alfred"
}
let booleanConversionOfPerson = Boolean(person);
console.log("booleanConversionOfPerson " + booleanConversionOfPerson);

//                                                  Number conversion
// not applied to objects itself == custom one need to be created
// Example
const objectWithNumberProperty1 = {
    value: 10
};
const objectWithNumberProperty2 = {
    value: 5
};
function subtractObjects(obj1, obj2) {
    if (typeof obj1.value === 'number' && typeof obj2.value === 'number') {
        return obj1.value - obj2.value;
    } else {
        throw new Error('Both objects must have a "value" property of type number for subtraction.');
    }
};
const customObjectSubtraction = subtractObjects(objectWithNumberProperty2, objectWithNumberProperty1);
console.log("customObjectSubtraction " + customObjectSubtraction);

//                                                  String conversion
console.log(person);        // .toString call, making the string conversion automatically