const { check } = require("yargs");

const functions = {
    addOne: (myArray) => {
        return myArray.map(x => x +1)
    },

    getWordLengths: (myArray) => {
        return myArray.map(x => x.length)
    },
    
    findNeedle: (myArray) => {
        return myArray.indexOf("needle")
    }
}

module.exports = functions;