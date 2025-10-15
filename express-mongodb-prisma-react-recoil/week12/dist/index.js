"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumAge(user1, user2) {
    return user1.age + user2.age;
}
const sum = sumAge({
    name: "Shiva",
    age: 23,
}, {
    name: "soahn",
    age: 22,
});
console.log(sum);
