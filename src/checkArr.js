function checkArr(arr) {
    try {
        if(!arr) throw 'arr doesn\'t exists';
        if(!Array.isArray(arr)) throw 'not a array';
    }
    catch(err) {
        console.log('Error: ' + err + '.');
        return false
    }
    return true
}

module.exports = checkArr