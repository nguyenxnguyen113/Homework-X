const maxMultiple = (divisor, bound) => {
    if (bound <=5 || bound >= 100) {
        console.log("data is not suitable")
        return
    }
    if (divisor <= 2 || divisor >=10) {
        console.log("data is not suitable")
        return
    }
    if (bound % divisor === 0) {
        return bound 
    }
    const temp = bound - (bound % divisor);
    const result = temp / divisor;
    return result * divisor;
}
maxMultiple(3,17)