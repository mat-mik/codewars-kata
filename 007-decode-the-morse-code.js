MORSE_CODE = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "-----": "0",
    "--.": "G", ".----": "1",
    "....": "H", "..---": "2",
    "..": "I", "...--": "3",
    ".---": "J", "....-": "4",
    "-.-": "K", ".....": "5",
    ".-..": "L", "-....": "6",
    "--": "M", "--...": "7",
    "-.": "N", "---..": "8",
    "---": "O", "----.": "9",
    ".--.": "P", ".-.-.-": ".",
    "--.-": "Q", "--..--": ",",
    ".-.": "R", "..--..": "?",
    "...": "S", "-....-": "-",
    "-": "T", ".----.": "\"",
    "..-": "U", "---...": ":",
    "...-": "V", ".-..-.": "'",
    ".--": "W", "-..-.": "/",
    "-..-": "X", ".--.-.": "@",
    "-.--": "Y",
    "--..": "Z",
};

function decodeMorse(morseCode) {
    const words = morseCode.split('   ').map(word => word.split(' '));

    let sentence = "";

    for (let word of words) {
        for(let letter of word) {
            const decoded = MORSE_CODE[letter];
            if (decoded) {
                sentence += MORSE_CODE[letter];
            }
        }
        sentence += " "
    }

    return sentence.trim();
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');