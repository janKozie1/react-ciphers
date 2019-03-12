import { Settings } from '../settings'

export let caesar = {
    name: 'Caesar cipher',
    desc: 'One of the first ciphers known to men, used in ancient Rome by Julius Caesar to send military orders.',
    config: {
        shift: Settings.alphabet.length / 2,
        defaultAlphabet: Settings.alphabet
    },
    encAlgorithm(input) {
        let { defaultAlphabet, shift } = this.config
        return input.split("").map(letter => {
            let temp = defaultAlphabet.indexOf(letter);
            console.log(temp,shift)
            return ~temp ? defaultAlphabet[(temp + shift) % defaultAlphabet.length] : letter;
        }).join("")
    },
    decAlgorithm(input) {
        let { defaultAlphabet, shift } = this.config
        return input.split("").map(letter => {
            let temp = defaultAlphabet.indexOf(letter);
            return ~temp ? defaultAlphabet[((temp - (shift%defaultAlphabet.length))) % defaultAlphabet.length] : letter;
        }).join("")
    }
}

export let atbash = {
    name: 'Atbash cipher',
    desc: 'Originally made for Hebrew alphabet encryption, but works with any alphabet.',
    config: {
        defaultAlphabet: Settings.alphabet
    },
    encAlgorithm(input) {
        let { defaultAlphabet } = this.config
        return input.split("").map(letter => {
            let temp = defaultAlphabet.indexOf(letter);
            return ~temp ? defaultAlphabet[defaultAlphabet.length - 1 - temp] : letter;
        }).join("")
    },
    decAlgorithm(input) {
        return this.encAlgorithm(input)
    }
}

export let railFence = {
    name: 'Rail-fence coding',
    desc: 'Named after the way you cipher messages, useful for longer texts.',
    config: {
        shift: 3
    },
    encAlgorithm(input) {
        let { shift } = this.config
        if (shift === 1)
            return input;
        let temp = new Array((shift)).fill('');
        let dir = 1;
        let counter = 0;
        for (let letter of input) {
            temp[counter] += letter;
            dir = counter === 0 ? 1 : counter === shift - 1 ? dir = -1 : dir;
            counter += dir;
        }
        return temp.join("");
    },
    decAlgorithm(input) {
        return input
    }
}


