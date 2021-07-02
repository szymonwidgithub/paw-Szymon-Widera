var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },//
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    console.log(person.name, person.surname, person.age, person.role);
}
function filterPersons(persons, criteria) {
    var result = persons.filter(function (p) {
        var objKey = Object.keys(criteria);
        return objKey.every(function (e) {
            return p[e] === criteria[e];
        });
    });
    return result;
}
// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
console.log(users.forEach(logPerson));
console.log(admins.forEach(logPerson));
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
var newArray = __spreadArray(__spreadArray([], users), admins);
console.log(newArray);
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
var olderThan25 = newArray.filter(function (o) { return o.age > 25; });
console.log(olderThan25.forEach(logPerson));
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
var adamArray = filterPersons(newArray, { name: 'Adam' });
console.log(adamArray);
var Spread = __spreadArray(__spreadArray([], users), admins);
console.log(Spread);
var test = Spread.filter(function (Age) { return Age.age > 20; });
console.log(test);
