function AnaToVori(Ana) {

    if (typeof Ana !== 'number') {
        return 'give me number';
    } else if (Ana < 0) {
        return 'give me positive number'
    } else {
        const Vori = Ana * 0.0625;
        return Vori;
    }
}


console.log(AnaToVori(0));