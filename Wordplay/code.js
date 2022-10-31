// Start:

/*
 *  Read from sowpods.txt and return an array of words:
 */

const { readFileSync } = require("fs");
let wordplayArray = readFileSync("sowpods.txt", "utf8").split("\n");
// console.log(wordplayArray);

/***************************************************************************************************************************/

/*
 *  For loops and if conditions:
 */

// [ ] What are all of the words containing UU?

function findUU(wordArray) {
    let words = [];
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].includes("UU")) {
            words.push(wordArray[i]);
        }
    }
    return words;
}

findUU(wordplayArray);
// console.log(findUU(wordplayArray));
// Output:
/*[
    'BUSUUTI',       'BUSUUTIS',       'CARDUUS',
    'CARDUUSES',     'CONTINUUM',      'CONTINUUMS',
    'DUUMVIR',       'DUUMVIRAL',      'DUUMVIRATE',
    'DUUMVIRATES',   'DUUMVIRI',       'DUUMVIRS',
    'INDIVIDUUM',    'LITUUS',         'LITUUSES',
    'MENSTRUUM',     'MENSTRUUMS',     'MUTUUM',
    'MUTUUMS',       'MUUMUU',         'MUUMUUS',
    'PARAMENSTRUUM', 'PARAMENSTRUUMS', 'RESIDUUM',
    'RESIDUUMS',     'SQUUSH',         'SQUUSHED',
    'SQUUSHES',      'SQUUSHING',      'TRIDUUM',
    'TRIDUUMS',      'ULTRAVACUUM',    'ULTRAVACUUMS',
    'VACUUM',        'VACUUMED',       'VACUUMING',
    'VACUUMS',       'WELTANSCHAUUNG', 'WELTANSCHAUUNGS'
]*/

/***************************************************************************************************************************/

// [ ] What are all of the words containing an X and a Y and a Z?

function findXYZ(wordArray) {
    let words = [];
    for (let i = 0; i < wordArray.length; i++) {
        if (
            wordArray[i].includes("X") &&
            wordArray[i].includes("Y") &&
            wordArray[i].includes("Z")
        ) {
            words.push(wordArray[i]);
        }
    }
    return words;
}

findXYZ(wordplayArray);
// console.log(findXYZ(wordplayArray));
// Output:
/*[
    'DEOXYGENIZE',     'DEOXYGENIZED',
    'DEOXYGENIZES',    'DEOXYGENIZING',
    'EXOENZYME',       'EXOENZYMES',
    'HYDROXYZINE',     'HYDROXYZINES',
    'METHOXYBENZENE',  'METHOXYBENZENES',
    'OXYGENIZE',       'OXYGENIZED',
    'OXYGENIZER',      'OXYGENIZERS',
    'OXYGENIZES',      'OXYGENIZING',
    'OXYPHENBUTAZONE', 'ZANTHOXYL',
    'ZANTHOXYLS',      'ZANTHOXYLUM',
    'ZANTHOXYLUMS',    'ZOOTAXY'
]*/

/***************************************************************************************************************************/

//[ ] What are all of the words containing a Q but not a U?

function findQNotU(wordArray) {
    let words = [];
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].includes("Q") && !wordArray[i].includes("U")) {
            words.push(wordArray[i]);
        }
    }
    return words;
}

findQNotU(wordplayArray);
// console.log(findQNotU(wordplayArray));
// Output:
/*[
    'FAQIR',     'FAQIRS',    'INQILAB',   'INQILABS',
    'MBAQANGA',  'MBAQANGAS', 'NIQAB',     'NIQABS',
    'QABALA',    'QABALAH',   'QABALAHS',  'QABALAS',
    'QABALISM',  'QABALISMS', 'QABALIST',  'QABALISTIC',
    'QABALISTS', 'QADI',      'QADIS',     'QAID',
    'QAIDS',     'QAIMAQAM',  'QAIMAQAMS', 'QALAMDAN',
    'QALAMDANS', 'QANAT',     'QANATS',    'QASIDA',
    'QASIDAS',   'QAT',       'QATS',      'QAWWAL',
    'QAWWALI',   'QAWWALIS',  'QAWWALS',   'QI',
    'QIBLA',     'QIBLAS',    'QIGONG',    'QIGONGS',
    'QINDAR',    'QINDARKA',  'QINDARS',   'QINTAR',
    'QINTARS',   'QIS',       'QOPH',      'QOPHS',
    'QORMA',     'QORMAS',    'QWERTIES',  'QWERTY',
    'QWERTYS',   'SHEQALIM',  'SHEQEL',    'SHEQELS',
    'TALAQ',     'TALAQS',    'TRANQ',     'TRANQS',
    'TSADDIQ',   'TSADDIQIM', 'TSADDIQS',  'TZADDIQ',
    'TZADDIQIM', 'TZADDIQS',  'WAQF',      'WAQFS',
    'YAQONA',    'YAQONAS'
]*/

/***************************************************************************************************************************/

// [ ] What are all of the words that contain the word CAT and are exactly 5 letters long?

function findCat5(wordArray) {
    let words = [];
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].includes("CAT") && wordArray[i].length === 5) {
            words.push(wordArray[i]);
        }
    }
    return words;
}

findCat5(wordplayArray);
// console.log(findCat5(wordplayArray));
// Output:
/*[
    'CATCH', 'CATER',
    'CATES', 'CATTY',
    'DUCAT', 'SCATH',
    'SCATS', 'SCATT'
]*/

/***************************************************************************************************************************/

// [ ] What are all of the words that have no E or A and are at least 15 letters long?

function findNoEA15(wordArray) {
    let words = [];
    for (let i = 0; i < wordArray.length; i++) {
        if (
            !wordArray[i].includes("E") &&
            !wordArray[i].includes("A") &&
            wordArray[i].length >= 15
        ) {
            words.push(wordArray[i]);
        }
    }
    return words;
}

findNoEA15(wordplayArray);
// console.log(findNoEA15(wordplayArray));
// Output:
/*[
    'BIBLIOPHILISTIC', 'BLOODCURDLINGLY', 'BRONCHOSCOPISTS', 'CHRONOBIOLOGIST',
    'CIRCUMLOCUTIONS', 'CIRCUMPOSITIONS', 'CIRCUMSCRIPTION', 'CIRCUMVOLUTIONS',
    'CITRICULTURISTS', 'CONSCRIPTIONIST', 'CONSTITUTIONIST', 'CONSTRUCTIONISM',
    'CONSTRUCTIONIST', 'CONSTRUCTIVISMS', 'CONSTRUCTIVISTS', 'CONTORTIONISTIC',
    'CORTICOTROPHINS', 'COUNCILLORSHIPS', 'CROSSLINGUISTIC', 'CRYPTORCHIDISMS',
    'CRYPTOSPORIDIUM', 'CRYPTOZOOLOGIST', 'DISCOMMODIOUSLY', 'DISCONTINUOUSLY',
    'DISSOLUTIONISMS', 'DISSOLUTIONISTS', 'FLORICULTURISTS', 'GLUCOCORTICOIDS',
    'HISTOPHYSIOLOGY', 'HORTICULTURISTS', 'HYDROBIOLOGISTS', 'HYDROSULPHUROUS',
    'HYPOPHOSPHOROUS', 'HYPOTHYROIDISMS', 'HYSTRICOMORPHIC', 'IMMUNOBLOTTINGS',
    'IMMUNODIFFUSION', 'IMMUNOGLOBULINS', 'INCONSPICUOUSLY', 'INCORRIGIBILITY',
    'INDISSOLUBILITY', 'INFUNDIBULIFORM', 'INQUISITIONISTS', 'INSTRUCTORSHIPS',
    'LITHONTHRYPTICS', 'LITHONTRIPTISTS', 'LITURGIOLOGISTS', 'MICROBIOLOGISTS',
    'MICROCOMPUTINGS', 'MICROMORPHOLOGY', 'MICROPUBLISHING', 'MICROSPOROPHYLL',
    'MISCONSTRUCTING', 'MISCONSTRUCTION', 'MISDISTRIBUTION', 'MISINSTRUCTIONS',
    'MULTITUDINOUSLY', 'MYRISTICIVOROUS', 'NITROCHLOROFORM', 'NONCOGNITIVISMS',
    'NONCONSTRUCTION', 'NONCONSUMPTIONS', 'NONCONTRIBUTORY', 'NONDISJUNCTIONS',
    'NONPRODUCTIVITY', 'OBSTRUCTIONISMS', 'OBSTRUCTIONISTS', 'ODONTORHYNCHOUS',
    'ONYCHOCRYPTOSIS', 'ORNITHORHYNCHUS', 'ORTHOPHOSPHORIC', 'PHOTOBIOLOGISTS',
    'PHOTOCONDUCTING', 'PHOTOCONDUCTION', 'PHOTOCONDUCTORS', 'PHOTOFINISHINGS',
    'PHOTOINDUCTIONS', 'PHOTOPRODUCTION', 'PISCICULTURISTS', 'POSTPRODUCTIONS',
    'PROHIBITIONISMS', 'PROHIBITIONISTS', 'PROLOCUTORSHIPS', 'PROSTHODONTISTS',
    'PROTISTOLOGISTS', 'PROTOPORPHYRINS', 'PROTOZOOLOGISTS', 'PSYCHOBIOLOGIST',
    'PSYCHOLINGUISTS', 'PSYCHOPHYSICIST', 'PULCHRITUDINOUS', 'PYCNODYSOSTOSIS',
    'PYKNODYSOSTOSIS', 'SHILLINGSWORTHS', 'SILVICULTURISTS', 'SOCIOBIOLOGISTS',
    'SOCIOLINGUISTIC', 'STRONGYLOIDOSIS', 'THOROUGHGOINGLY', 'TRINITROTOLUOLS',
    ... 5 more items
]*/

/***************************************************************************************************************************/

// [ ] What are all of the words that have a B and an X and are less than 5 letters long?

function findBX5(wordArray) {
    let words = [];
    for (let i = 0; i < wordArray.length; i++) {
        if (
            wordArray[i].includes("B") &&
            wordArray[i].includes("X") &&
            wordArray[i].length < 5
        ) {
            words.push(wordArray[i]);
        }
    }
    return words;
}

findBX5(wordplayArray);
// console.log(findBX5(wordplayArray));
// Output:
// [ 'BOX', 'BOXY', 'BRUX', 'IBEX' ]

/***************************************************************************************************************************/

// [ ] What are all of the words that both start and end with a Y?

function findYStartYEnd(wordArray) {
    let words = [];
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].startsWith("Y") && wordArray[i].endsWith("Y")) {
            words.push(wordArray[i]);
        }
    }
    return words;
}

findYStartYEnd(wordplayArray);
// console.log(findYStartYEnd(wordplayArray));
// Output:
/*[
    'YABBY',      'YAMPY',     'YAPPINGLY',
    'YAPPY',      'YARELY',    'YATTERINGLY',
    'YAWEY',      'YAWNINGLY', 'YAWNY',
    'YAWY',       'YAY',       'YEARLY',
    'YEARNINGLY', 'YEASTILY',  'YEASTY',
    'YECHY',      'YELLOWLY',  'YELLOWY',
    'YEOMANLY',   'YEOMANRY',  'YESTERDAY',
    'YESTY',      'YEUKY',     'YIELDINGLY',
    'YIPPY',      'YOBBERY',   'YOBBISHLY',
    'YOLKY',      'YONDERLY',  'YOUNGBERRY',
    'YOUNGLY',    'YOUNGTHLY', 'YOUTHFULLY',
    'YOUTHLY',    'YOUTHY',    'YOWLEY',
    'YUCKY',      'YUKKY',     'YUKY',
    'YUMMY',      'YUPPIFY',   'YUPPY'
]*/

/***************************************************************************************************************************/

// [ ] What are all of the words with no vowel and not even a Y?

function findNoVowelNoY(wordArray) {
    let words = [];
    for (let i = 0; i < wordArray.length; i++) {
        if (
            !wordArray[i].includes("A") &&
            !wordArray[i].includes("E") &&
            !wordArray[i].includes("I") &&
            !wordArray[i].includes("O") &&
            !wordArray[i].includes("U") &&
            !wordArray[i].includes("Y")
        ) {
            words.push(wordArray[i]);
        }
    }
    return words;
}

findNoVowelNoY(wordplayArray);
// console.log(findNoVowelNoY(wordplayArray));
// Output:
/*[
    'BRR',   'BRRR',   'CH',
    'CRWTH', 'CRWTHS', 'CWM',
    'CWMS',  'CWTCH',  'HM',
    'HMM',   'MM',     'NTH',
    'PFFT',  'PHPHT',  'PHT',
    'PSST',  'PST',    'SH',
    'SHH',   'ST',     'TSK',
    'TSKS',  'TSKTSK', 'TSKTSKS',
    'TWP',   'ZZZ',    'ZZZS',
    ''
]*/

/***************************************************************************************************************************/

// [ ] What are all of the words that have all 5 vowels, in any order?

function findAll5Vowels(wordArray) {
    let words = [];
    for (let i = 0; i < wordArray.length; i++) {
        if (
            wordArray[i].includes("A") &&
            wordArray[i].includes("E") &&
            wordArray[i].includes("I") &&
            wordArray[i].includes("O") &&
            wordArray[i].includes("U")
        ) {
            words.push(wordArray[i]);
        }
    }
    return words;
}

findAll5Vowels(wordplayArray);
// console.log(findAll5Vowels(wordplayArray));
// Output:
/*[
    'ABOIDEAU',        'ABOIDEAUS',       'ABOIDEAUX',       'ABOITEAU',
    'ABOITEAUS',       'ABOITEAUX',       'ABORTUARIES',     'ABSOLUTISE',
    'ABSOLUTISED',     'ABSOLUTISES',     'ABSOLUTIVE',      'ABSOLUTIZE',
    'ABSOLUTIZED',     'ABSOLUTIZES',     'ABSTEMIOUS',      'ABSTEMIOUSLY',
    'ABSTEMIOUSNESS',  'ABSTENTIOUS',     'ACCENTUATION',    'ACCENTUATIONS',
    'ACCESSORIUS',     'ACCOUNTANCIES',   'ACCOUTERING',     'ACETONURIA',
    'ACETONURIAS',     'ACIDOPHILUSES',   'ACINACEOUS',      'ACOLOUTHITE',
    'ACOLOUTHITES',    'ACOUCHIES',       'ACRIMONIOUSNESS', 'ACROTERIUM',
    'ACROTERIUMS',     'ACTINOMYCETOUS',  'ADENOVIRUS',      'ADENOVIRUSES',
    'ADIATHERMANOUS',  'ADIPOCEROUS',     'ADULTERATION',    'ADULTERATIONS',
    'ADVENTITIOUS',    'ADVENTITIOUSLY',  'ADVOUTRIES',      'AEQUORIN',
    'AEQUORINS',       'AEROACOUSTICS',   'AEROBIUM',        'AERONAUTIC',
    'AERONAUTICAL',    'AERONAUTICALLY',  'AERONAUTICS',     'AERONEUROSIS',
    'AERUGINOUS',      'AGARICACEOUS',    'AGGLUTINOGEN',    'AGGLUTINOGENIC',
    'AGGLUTINOGENS',   'AGOUTIES',        'AGROBUSINESS',    'AGROBUSINESSES',
    'AGROINDUSTRIES',  'AILOUROPHILE',    'AILOUROPHILES',   'AILOUROPHOBE',
    'AILOUROPHOBES',   'AILUROPHILE',     'AILUROPHILES',    'AILUROPHOBE',
    'AILUROPHOBES',    'ALBUGINEOUS',     'ALEURONIC',       'ALISMACEOUS',
    'ALLIACEOUS',      'ALUMINIFEROUS',   'ALUMINOSILICATE', 'ALUMINOSITIES',
    'ALUMINOTHERMIES', 'ALUMINOTHERMY',   'AMARYLLIDACEOUS', 'AMBIDEXTEROUS',
    'AMBIDEXTROUS',    'AMBIDEXTROUSLY',  'AMBIGUOUSNESS',   'AMBIGUOUSNESSES',
    'AMBITIOUSNESS',   'AMBITIOUSNESSES', 'AMBULATORIES',    'AMENTIFEROUS',
    'AMINOBUTENE',     'AMINOBUTENES',    'AMMUNITIONED',    'AMPHIBIOUSNESS',
    'AMPHICOELOUS',    'AMPHIOXUSES',     'AMPULLOSITIES',   'ANACARDIACEOUS',
    'ANAEROBIUM',      'ANDOUILLE',       'ANDOUILLES',      'ANDOUILLETTE',
    ... 3305 more items
]*/

/***************************************************************************************************************************/

// [ ] What are all of the words that have all 5 vowels, in alphabetical order?

function findAll5VowelsInAlphabeticalOrder(wordArray) {
    let words = [];
    // First, find all of the words that have all 5 vowels:
    for (let i = 0; i < wordArray.length; i++) {
        if (
            wordArray[i].includes("A") &&
            wordArray[i].includes("E") &&
            wordArray[i].includes("I") &&
            wordArray[i].includes("O") &&
            wordArray[i].includes("U")
        ) {
            words.push(wordArray[i]);
        }
    }
    // Second, find all of the words in words array that contain vowels in alphabetical order:
    let vowelsArray = ["A", "E", "I", "O", "U"];
    let wordsWithVowelsInAlphabeticalOrder = [];

    for (let j = 0; j < words.length; j++) {
        let word = words[j];
        let isAlphabetical = true;
        let previousVowel = "A";
        for (let k = 0; k < word.length; k++) {
            let currentChar = word[k];
            for (let l = 0; l < vowelsArray.length; l++) {
                if (currentChar === vowelsArray[l]) {
                    if (previousVowel > currentChar) {
                        isAlphabetical = false;
                    }
                    previousVowel = currentChar;
                }
            }

            if (!word[k + 1]) {
                if (isAlphabetical) {
                    wordsWithVowelsInAlphabeticalOrder.push(word);
                }
            }
        }
    }
    return wordsWithVowelsInAlphabeticalOrder;
}

findAll5VowelsInAlphabeticalOrder(wordplayArray);
// console.log(findAll5VowelsInAlphabeticalOrder(wordplayArray));
// Output:
/*[
    'ABSTEMIOUS',     'ABSTEMIOUSLY',
    'ABSTENTIOUS',    'ADVENTITIOUS',
    'ADVENTITIOUSLY', 'ARENICOLOUS',
    'ARSENIOUS',      'CAESIOUS',
    'CAVERNICOLOUS',  'FACETIOUS',
    'FACETIOUSLY',    'HALFSERIOUSLY',
    'LATERITIOUS',    'PARECIOUS'
]*/

/***************************************************************************************************************************/

/*
 *  Setting up storage to use during a for loop, including counters and arrays:
 */

// [ ] How many words contain the substring "TYPE”?

function findSumOfWordsContainingSubstring(wordArray, substring) {
    let sum = 0;
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].includes(substring)) {
            sum++;
        }
    }
    return sum;
}

findSumOfWordsContainingSubstring(wordplayArray, "TYPE");
// console.log(findSumOfWordsContainingSubstring(wordplayArray, "TYPE"));
// Output: 208

/***************************************************************************************************************************/

// [ ] Create and print an array containing all of the words that end in "GHTLY":

function findWordsEndingInGHTLY(wordArray) {
    let words = [];
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].endsWith("GHTLY")) {
            words.push(wordArray[i]);
        }
    }
    return words;
}

findWordsEndingInGHTLY(wordplayArray);
// console.log(findWordsEndingInGHTLY(wordplayArray));
// Output:
/*[
    'BRIGHTLY',    'DISTRAUGHTLY',
    'DOWNRIGHTLY', 'FORTHRIGHTLY',
    'FORTNIGHTLY', 'KNIGHTLY',
    'LIGHTLY',     'MIDNIGHTLY',
    'NIGHTLY',     'OUTRIGHTLY',
    'RIGHTLY',     'SIGHTLY',
    'SLIGHTLY',    'SPRIGHTLY',
    'STRAIGHTLY',  'TIGHTLY',
    'UNKNIGHTLY',  'UNSIGHTLY',
    'UPRIGHTLY',   'WIGHTLY'
]*/

/***************************************************************************************************************************/

// [ ] What is the shortest word that contains all 5 vowels?

function findShortestWordContainingAllVowels(wordArray) {
    let shortestWord = "";
    for (let i = 0; i < wordArray.length; i++) {
        if (
            wordArray[i].includes("A") &&
            wordArray[i].includes("E") &&
            wordArray[i].includes("I") &&
            wordArray[i].includes("O") &&
            wordArray[i].includes("U") // &&
            // wordArray[i].includes("Y")
        ) {
            if (
                shortestWord === "" ||
                wordArray[i].length < shortestWord.length
            ) {
                shortestWord = wordArray[i];
            }
        }
    }
    return shortestWord;
}

findShortestWordContainingAllVowels(wordplayArray);
// console.log(findShortestWordContainingAllVowels(wordplayArray));
// Output:
// DOULEIA
// Or: ANEUPLOIDY

/***************************************************************************************************************************/

// [ ] What is the longest word that contains no vowels?

function findLongestWordContainingNoVowels(wordArray) {
    let longestWord = "";
    for (let i = 0; i < wordArray.length; i++) {
        if (
            !wordArray[i].includes("A") &&
            !wordArray[i].includes("E") &&
            !wordArray[i].includes("I") &&
            !wordArray[i].includes("O") &&
            !wordArray[i].includes("U") // &&
            // !wordArray[i].includes("Y")
        ) {
            if (
                longestWord === "" ||
                wordArray[i].length > longestWord.length
            ) {
                longestWord = wordArray[i];
            }
        }
    }
    return longestWord;
}

findLongestWordContainingNoVowels(wordplayArray);
// console.log(findLongestWordContainingNoVowels(wordplayArray));
// Output:
// GLYCYLS
// Or: TSKTSKS

/***************************************************************************************************************************/

// [ ] Which of the letters Q, X, and Z is the least common?

function findLeastCommonLetter(wordArray, letter1, letter2, letter3) {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].includes(letter1)) {
            count1++;
        }
        if (wordArray[i].includes(letter2)) {
            count2++;
        }
        if (wordArray[i].includes(letter3)) {
            count3++;
        }
    }
    if (count1 < count2 && count1 < count3) {
        return letter1;
    } else if (count2 < count1 && count2 < count3) {
        return letter2;
    } else if (count3 < count1 && count3 < count2) {
        return letter3;
    }
}

findLeastCommonLetter(wordplayArray, "Q", "X", "Z");
// console.log(findLeastCommonLetter(wordplayArray, "Q", "X", "Z"));
// Output: Q

/***************************************************************************************************************************/

// [ ] What is the longest palindrome?

function findLongestPalindrome(wordArray) {
    let longestPalindrome = "";
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === wordArray[i].split("").reverse().join("")) {
            if (
                longestPalindrome === "" ||
                wordArray[i].length > longestPalindrome.length
            ) {
                longestPalindrome = wordArray[i];
            }
        }
    }
    return longestPalindrome;
}

findLongestPalindrome(wordplayArray);
// console.log(findLongestPalindrome(wordplayArray));
// Output: ROTAVATOR

/***************************************************************************************************************************/

/* [ ] What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively? */

// StackExchange: qq === 0.
// Link: https://english.stackexchange.com/questions/563650/which-letters-do-not-appear-consecutively-in-english-words

// Solution with Counter Variables:

function findWordsWithConsecutiveLettersWithCounterVariables(wordArray) {
    let counterAA = 0;
    let counterBB = 0;
    let counterCC = 0;
    let counterDD = 0;
    let counterEE = 0;
    let counterFF = 0;
    let counterGG = 0;
    let counterHH = 0;
    let counterII = 0;
    let counterJJ = 0;
    let counterKK = 0;
    let counterLL = 0;
    let counterMM = 0;
    let counterNN = 0;
    let counterOO = 0;
    let counterPP = 0;
    let counterQQ = 0;
    let counterRR = 0;
    let counterSS = 0;
    let counterTT = 0;
    let counterUU = 0;
    let counterVV = 0;
    let counterWW = 0;
    let counterXX = 0;
    let counterYY = 0;
    let counterZZ = 0;

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].includes("AA")) {
            counterAA++;
        }
        if (wordArray[i].includes("BB")) {
            counterBB++;
        }
        if (wordArray[i].includes("CC")) {
            counterCC++;
        }
        if (wordArray[i].includes("DD")) {
            counterDD++;
        }
        if (wordArray[i].includes("EE")) {
            counterEE++;
        }
        if (wordArray[i].includes("FF")) {
            counterFF++;
        }
        if (wordArray[i].includes("GG")) {
            counterGG++;
        }
        if (wordArray[i].includes("HH")) {
            counterHH++;
        }
        if (wordArray[i].includes("II")) {
            counterII++;
        }
        if (wordArray[i].includes("JJ")) {
            counterJJ++;
        }
        if (wordArray[i].includes("KK")) {
            counterKK++;
        }
        if (wordArray[i].includes("LL")) {
            counterLL++;
        }
        if (wordArray[i].includes("MM")) {
            counterMM++;
        }
        if (wordArray[i].includes("NN")) {
            counterNN++;
        }
        if (wordArray[i].includes("OO")) {
            counterOO++;
        }
        if (wordArray[i].includes("PP")) {
            counterPP++;
        }
        if (wordArray[i].includes("QQ")) {
            counterQQ++;
        }
        if (wordArray[i].includes("RR")) {
            counterRR++;
        }
        if (wordArray[i].includes("SS")) {
            counterSS++;
        }
        if (wordArray[i].includes("TT")) {
            counterTT++;
        }
        if (wordArray[i].includes("UU")) {
            counterUU++;
        }
        if (wordArray[i].includes("VV")) {
            counterVV++;
        }
        if (wordArray[i].includes("WW")) {
            counterWW++;
        }
        if (wordArray[i].includes("XX")) {
            counterXX++;
        }
        if (wordArray[i].includes("YY")) {
            counterYY++;
        }
        if (wordArray[i].includes("ZZ")) {
            counterZZ++;
        }
    }

    return {
        counterAA,
        counterBB,
        counterCC,
        counterDD,
        counterEE,
        counterFF,
        counterGG,
        counterHH,
        counterII,
        counterJJ,
        counterKK,
        counterLL,
        counterMM,
        counterNN,
        counterOO,
        counterPP,
        counterQQ,
        counterRR,
        counterSS,
        counterTT,
        counterUU,
        counterVV,
        counterWW,
        counterXX,
        counterYY,
        counterZZ,
    };
}

findWordsWithConsecutiveLettersWithCounterVariables(wordplayArray);
// console.log(findWordsWithConsecutiveLettersWithCounterVariables(wordplayArray));
// Output: QQ and XX are the only letters that never appear consecutively in our input array.
/*{
    counterAA: 192,
    counterBB: 1485,
    counterCC: 1502,
    counterDD: 1644,
    counterEE: 5971,
    counterFF: 2455,
    counterGG: 1950,
    counterHH: 60,
    counterII: 99,
    counterJJ: 6,
    counterKK: 124,
    counterLL: 12391,
    counterMM: 2648,
    counterNN: 2740,
    counterOO: 6138,
    counterPP: 2788,
    counterQQ: 0,
    counterRR: 3820,
    counterSS: 14661,
    counterTT: 4811,
    counterUU: 39,
    counterVV: 67,
    counterWW: 44,
    counterXX: 0,
    counterYY: 4,
    counterZZ: 638
}*/

// Solution with ArrayOfArrays:

function findWordsWithConsecutiveLettersWithArrayOfArrays(wordArray) {
    let countArray = [
        ["AA", 0],
        ["BB", 0],
        ["CC", 0],
        ["DD", 0],
        ["EE", 0],
        ["FF", 0],
        ["GG", 0],
        ["HH", 0],
        ["II", 0],
        ["JJ", 0],
        ["KK", 0],
        ["LL", 0],
        ["MM", 0],
        ["NN", 0],
        ["OO", 0],
        ["PP", 0],
        ["QQ", 0],
        ["RR", 0],
        ["SS", 0],
        ["TT", 0],
        ["UU", 0],
        ["VV", 0],
        ["WW", 0],
        ["XX", 0],
        ["YY", 0],
        ["ZZ", 0],
    ];

    let returnArray = [];

    for (let i = 0; i < wordArray.length; i++) {
        for (let j = 0; j < countArray.length; j++) {
            if (wordArray[i].includes(countArray[j][0])) {
                countArray[j][1]++;
            }
        }
    }

    for (let k = 0; k < countArray.length; k++) {
        if (countArray[k][1] === 0) {
            returnArray.push(countArray[k][0]);
        }
    }

    return returnArray;
}

findWordsWithConsecutiveLettersWithArrayOfArrays(wordplayArray);
// console.log(findWordsWithConsecutiveLettersWithArrayOfArrays(wordplayArray));
// Output: [ 'QQ', 'XX' ]

// End.
