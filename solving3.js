function picnicBudget(member) {

    if (typeof member !== 'number' || member < 0) {
        return 'member should be a valid positive number'
    } else {
        let first100Cost = 0;
        let second100Cost = 0;
        let remainingCost = 0;
        let totalCost = 0;


        if(member <= 100){
            first100Cost = member * 5000;
            return first100Cost;
        }else if(member <= 200){
            first100Cost = 500 * 100;
            second100Cost = (member - 100) * 400;
            totalCost = first100Cost + second100Cost;
            return totalCost;
        }else{
            first100Cost = 500 * 100;
            second100Cost = 400 * 100;
            remainingCost = (member - 200) * 3000;
            totalCost = first100Cost + second100Cost + remainingCost;
            return totalCost;
        }

    }

}


console.log(picnicBudget(201));