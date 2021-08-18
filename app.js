let Friends = ["Don", "Bridget", "Griff", "Jason", "Kiara"];

for (let i = 0; i < Friends.length; i++) {

    for (let j = 99; j >= 1; j--) {

        if (j > 1) {
            console.log(j + "lines of code in file," + j + "lines of code." + Friends[i] + "strikes one out, clears it all out," + (j - 1) + "lines of code in the file")
        } else if (j === 0) {
            console.log(j + "lines of code in file," + j + "lines of code." + Friends[i] + "stikes one out, clears it all out, no more lines of code in the file.")

        }

    }
}
