module.exports = function check(str, bracketsConfig) {

    for (let i = 0; i < bracketsConfig.length;) {
        let searchBrackets = bracketsConfig[i].join('');
        if (str.includes(searchBrackets)) {
            str = str.replace(searchBrackets, '');
            i = 0
        } else i++
    }

    return str.length === 0;
};
