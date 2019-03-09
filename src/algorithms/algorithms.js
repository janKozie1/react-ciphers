import { Settings } from '../settings'

export let caesar = {
    name: 'Caesar cipher',
    desc: 'Simples coding algorithm',
    config: {
        shift: Settings.alphabet.length / 2,
        defaultAlphabet: Settings.alphabet
    },
    algorithm: (input, { shift, defaultAlphabet }) => { 
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