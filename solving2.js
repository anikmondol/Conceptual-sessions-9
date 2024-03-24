function PandaCost(singara, samucha, jilapi) {

    if (typeof singara !== 'number' || typeof samucha !== 'number' || typeof jilapi !== 'number') {
        return 'please provide valid integer number'
    }else if(singara < 0 || samucha < 0 || jilapi < 0){
        return 'please provide valid positive number'
    }
     else {
        const singaraPrice = 7;
        const samuchaPrice = 10;
        const jilapiPrice = 15;


        const totalSingaraPrice = singara * singaraPrice;
        const totalSamuchPrice = samucha * samuchaPrice;
        const totalJilapiPrice = jilapi * jilapiPrice;
        const total = totalJilapiPrice + totalSamuchPrice + totalSingaraPrice;
        return total;
    }

}


console.log(PandaCost(1, 1, 1));