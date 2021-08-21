module.exports = function reverse (n) {
    n = n + " "
    const reversed =  n.split("").reverse().join("");
    
        return parseInt(reversed);
    
    
}
