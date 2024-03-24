// function add(x, y){

//     if(typeof x !== 'number' || typeof y !== 'number'){
//         return 'give me number'
//     }

//     return x + y;
// }

// console.log(add(3, ));




function details(info) {
    if (typeof info !== 'object') {
        return 'input should be an object '
    } else if (!info.age || !info.name) {
        return "object must contain name and age property"
    }
    else if (typeof info.age !== 'number' || typeof info.name !== 'string') {
        return 'name should be String, age should be a number'
    }
    else if (info.age <= 0) {
        return 'age should be a positive number'
    }
    return `my name is: ${info.name}. my age is: ${info.age}`
}



console.log(details({ name: 'aniki', age: 1 }));