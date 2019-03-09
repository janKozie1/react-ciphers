import { Settings } from '../settings'

export let caesar = {
    name: 'Caesar cipher',
    desc: 'One of the first ciphers known to men',
    config: {
        shift: Settings.alphabet.length / 2,
        defaultAlphabet: Settings.alphabet
    },
    algorithm(input) {
        let { defaultAlphabet,shift } = this.config
        return input.split("").map(letter => {
            let temp = defaultAlphabet.indexOf(letter);
            return ~temp ? defaultAlphabet[(temp + shift) % defaultAlphabet.length] : letter;
        }).join("")
    }
}

export let vigner = {
    name: 'Vigner coding',
    desc: 'Simple coding algorithm',
    algorithm: (input) => { return input }
}

export let Huffman = {
    name: 'Huffman cipher',
    desc: 'Simples coding alorithm',
    algorithm: (input) => { return input }
}

export let atbash = {
    name: 'Atbash Cipher',
    desc: 'Simples coding alorithm',
    algorithm: (input) => { return input }
} 