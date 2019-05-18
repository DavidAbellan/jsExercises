// Make an array of strings with the names 
// of people who can access to the party ( >= 18 years old)

//Example input [{ name: 'David', age: 22}, {name: 'Juan', age: 17}]
//Example output ['David']

function makeStringsWhoCanAccess(persons){
    // your code here
    let mayoresDe18 =[];
    for(persona of persons){
          if (persona.age >= 18){
              mayoresDe18.push(persona.name);
          }
 

    }
    return mayoresDe18;
}

const test = require('./tools/test');

test(makeStringsWhoCanAccess, [[]], []);
test(makeStringsWhoCanAccess, [[{name: 'Juan', age: 18}, {name: 'Paco', age: 2}, {name: 'Fran', age: 19}]], ['Juan', 'Fran']);
test(makeStringsWhoCanAccess, [[{name:  'David', age: 10}]], []);

