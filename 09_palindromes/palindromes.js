const palindromes = function (string) {
    const regEx = /[A-Za-z0-9]/ig;
    const filteredString = (string.match(regEx).join('')).toLowerCase();
    let reversedString = ''
    for (let i = filteredString.length - 1; i >= 0; i--) {
        reversedString += (filteredString[i]).toLowerCase();
      }
      if (filteredString == reversedString){
        return true
    }
    return false
};

/*const palindromes = function(string) {
    // Remove non-alphanumeric characters and convert to lowercase
    const filteredString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Reverse the filtered string
    const reversedString = filteredString.split('').reverse().join('');

    // Check if the filtered string is the same as the reversed string
    return filteredString === reversedString;
};*/


// Do not edit below this line
module.exports = palindromes;
