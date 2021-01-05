function addTwoDigits(n) {
    let twoNumber = n.toString().split('');
    if (twoNumber.length == 2 ) {
        console.log(parseInt(twoNumber[0]) + parseInt(twoNumber[1]))
    } else {
        console.log("n have to contain two digits")
    }   
}

addTwoDigits(11)