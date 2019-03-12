export  let configValidtaion = {
    shift(value) {
        return value >= 1;
    },
    defaultAlphabet(value) {
        let match = RegExp('[\\w|\\W]');
        for (let letter of value.split(',')) {
            if (!match.test(letter) || letter.length!=1) {
                return false;
            }
        }
        return true;
    }
}