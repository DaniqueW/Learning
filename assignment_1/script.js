var people = [
  {name: "Ajob", age: 21},
  {name: "Danique", age: 20},
  {name: "Daniel", age: 8},
  {name: "Winter", age: 6},
  {name: "Jude", age: 12},
  {name: "Peanut", age: 46},
  {name: "Sugar", age: 34},
  {name: "Oreo", age: 16},
  {name: "Lemon", age: 72},
  {name: "Tofy", age: 59}
];

function people_of_age(minimum_age) {
    // people_number=people_number+1 is same as people_number++
    for(var people_number = 0; people_number < people.length; people_number=people_number+1){
        if(people[people_number].age > minimum_age){
            console.log('------')
            console.log(`'${people[people_number].name}' is older than ${minimum_age}, 
            because they are ${people[people_number].age}.`)
        }
    }
}