import { Settings } from '../settings'

export let caesar = {
    name: 'Caesar cipher',
    desc: 'One of the first ciphers known to men, used in ancient Rome by Julius Caesar to send military orders',
    config: {
        shift: Settings.alphabet.length / 2,
        defaultAlphabet: Settings.alphabet
    },
    algorithm(input) {
        let { defaultAlphabet, shift } = this.config
        return input.split("").map(letter => {
            let temp = defaultAlphabet.indexOf(letter);
            return ~temp ? defaultAlphabet[(temp + shift) % defaultAlphabet.length] : letter;
        }).join("")
    }
}

export let atbash = {
    name: 'Atbash Cipher',
    desc: 'Originally made for Hebrew alphabet encryption, but works with any alphabet',
    config: {
        defaultAlphabet: Settings.alphabet
    },
    algorithm(input) {
        let { defaultAlphabet, shift } = this.config
        return input.split("").map(letter => {
            let temp = defaultAlphabet.indexOf(letter);
            return ~temp ? defaultAlphabet[defaultAlphabet.length - 1 - temp] : letter;
        }).join("")
    }
}

export let vigenere = {
    name: 'Vigenére coding',
    desc: '16th century cipher',
    algorithm: (input) => { return input }
}

export let Huffman = {
    name: 'Huffman cipher',
    desc: 'Simples coding alorithm',
    algorithm: (input) => { return input }
}

