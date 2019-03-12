import {Settings} from '../settings'

export let configValidtaion = {
    shift(value, mode) {
        if(mode==='check'){
            return Number(value) >= 1;
        }else{
            return Number(value) 
        }
    },
    defaultAlphabet(value, mode) {
        if (mode === 'check') {
            let match = RegExp('[\\w|\\W]');
            for (let letter of value.split(',')) {
                if (!match.test(letter) || letter.length != 1) {
                    return false;
                }
            }
            return true;
        }else{
            return value.split(",")
        }
    },
    keyword(value,mode){
        if(mode === 'check'){
            for(let letter of value){
                if(!~Settings.alphabet.indexOf(letter)){
                    return false
                }
            }
            return true;
        }else{
            return value;
        }
    }

}