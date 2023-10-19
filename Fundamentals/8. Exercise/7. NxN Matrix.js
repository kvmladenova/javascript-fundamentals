function matrix (n) {
    for (let curRow = 1; curRow <= n; curRow++){
        let curChar = `${n} `.repeat(n);
        console.log(curChar);
    }
}
matrix (3);
// matrix (7)