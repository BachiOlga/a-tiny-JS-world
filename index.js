/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const dog = {
    name : 'Greta',
    age : 5,
    gender: 'female',
    legs : 4,
    hends : 0,
    say : 'wow!'
}
const cat = {
    name : 'Filya',
    age : 3,
    gender: 'male',
    legs : 4,
    hends : 0,
    say : 'May-May!'
}
const woman = {
    name : 'Olga',
    age : 30,
    gender: 'female',
    legs : 2,
    hends : 2,
    say : 'Hello!'
}
const man = {
    name : 'Artem',
    age : 33,
    gender: 'male',
    legs : 2,
    hends : 2,
    say : 'Hi!'
}
const womanCat = {
    name : 'Stefani',
    age : 20,
    gender: 'female',
    legs : 2,
    hends : 2,
    say : cat.say
}
const description = (elements) => {
    let result = '';
    const group = Object.values(elements)
    group.forEach(item => {
        if( item === 0) {
            return result;
        }
        result = result + `${item};`;
        
    })

    return result;
    
}
print(description(dog), `div`)
print(description(cat), `div`)
print(description(woman), `div`)
print(description(man), `div`)
print(description(womanCat), `div`)
// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


