const reverseString = function(string) {
    let revString = ''
    for (let i = 1 ; i <= string.length ; i++) {
        revString += string[string.length-i]
    }
    return revString
};

// Do not edit below this line
module.exports = reverseString;