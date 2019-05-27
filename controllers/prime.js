exports.getMedianFromPrimes = (req, res, next) => {
    const limit = req.body.number;
    if(Number.isInteger(limit)){
        if(limit > 1){
            const median = findPrimeMedian(limit);
            res.status(200).json(
                { median: median }
            );
        }else{
            res.status(200).json({median: 1});
        }
        

    }else{
        res.status(400).json(
            { error: 'Only numbers are allowed.' }
        );
    }
    next();
};

const findPrimeMedian = max => {
    const primeArray = new Array(max).fill(true);
    let median = null;

    for (let i = 2; i < Math.sqrt(max); i++) {
        if (primeArray[i]) {
          for (let j = Math.pow(i, 2); j < max; j += i) {
            primeArray[j] = false
          }
        }
    }
    
   const finalArray = primeArray.reduce((primes, isPrime, i) => {
        if (isPrime && i > 1) {
            primes.push(i)
        }
        return primes
    }, []);   

    if(finalArray.length % 2 === 0){
        median = new Array(2);
        median[0] = finalArray[finalArray.length / 2];
        median[1] = finalArray[(finalArray.length / 2) + 1];
    }else{
        median = finalArray[Math.floor(finalArray.length / 2)];
    }
    return median;
}