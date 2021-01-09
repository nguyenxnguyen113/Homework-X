const  candies = (n, m) => {    
    if (m % n === 0) {
        return m / n;
    }
    const temp = m - (m % n);
    const numCandy = temp / n;
    return numCandy * n;
}

console.log(candies(3, 10));