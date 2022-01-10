console.log(hello);
// undefined
var hello = 'world';
// hello = "world"

// -----------2-----------

var needle = 'haystack';
test();
// magnet
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// -----------3-----------

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// super cool

// --------------4-------

var food = 'chicken';
console.log(food);
// chicken
eat();
// half-chicken
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


// -----------5-----------

// mean();
// console.log(food);
// // 
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//  SyntaxError

// -----------6-----------

console.log(genre);
var genre = "disco";
rewind();
// rock
// r&b
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// disco

// -----------7-----------

dojo = "san jose";
console.log(dojo);
// san jose
learn();
// seattle
// burbank
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// san jose

// -----------8-----------

console.log(makeDojo("Chicago", 65));
// name: 'Chicago', students: 65, hiring: true
console.log(makeDojo("Berkeley", 0));
// name: 'Berkeley', students: 0, hiring: 'closed for now'
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now";
    }
    return dojo;
}

