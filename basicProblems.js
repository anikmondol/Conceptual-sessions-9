function findLarges(numbers) {

    if (!Array.isArray(numbers)) {
        return 'provide an array';
    } else {
        let larges = numbers[0];
        for (const number of numbers) {
            if(typeof number !== 'number'){
                return 'all values should be number'
            }else{
                if (number > larges) {
                    larges = number;
                }
            }
        }
        return larges;
    }
}




const numbers = [12, 21, 77, 85, "54", 96, 45];

const ans = findLarges(numbers);
console.log(ans);