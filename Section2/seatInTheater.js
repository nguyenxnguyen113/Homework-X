function seatsInTheater(nCols, nRows, col, row) {
    // Calculate area/total seats in theater
    let totalSeats = nCols * nRows;

    /* Calculate cols and rows behind my seat
       Add one to col because my people behind me in my col are  counted
    */
    let newColNumber = nCols - col + 1;
    let newRowNumber = nRows - row;

    // Calculate area of seats behind me
    let peopleBehindMe = newColNumber * newRowNumber;

    return peopleBehindMe;
}
console.log(seatsInTheater(16, 11, 5, 3))