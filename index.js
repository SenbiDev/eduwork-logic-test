// JAWABAN SOAL 1
function factorial(value) {
    let total = 1;
    
    for (let i = 1; i <= value; i++) {
        total *= i;
    }
    
    console.log('result:', total);
}

// factorial(4);

// JAWABAN SOAL 2
function reverseWord(value) {
    const words = value.split('');
    const reverse = [];
    for (let i = 0; i < words.length; i++) {
        reverse.unshift(words[i]);
    }
    
    console.log(reverse.join(''));
}

// reverseWord("yoyo");

// JAWABAN SOAL 3
function printDigitValue(str) {
    let arr = [];
    
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i], 10))) {
            arr.push(parseInt(str[i], 10));
            continue;
        }
    }

    const strFiltered = arr.filter((value) => value !== NaN);
    
    console.log(strFiltered.join(""));

    const length = strFiltered.length;
    for (let i = 0; i < strFiltered.length; i++) {
        const zero = "0".repeat(length - i - 1);
        console.log(strFiltered[i] + zero);
    }
}

// printDigitValue('9.86-A5.321')

// JAWABAN SOAL 4
function swapValue(value1 , value2) {
    console.log('value1 =', value1, ',value2 =', value2);

    [value2, value1] = [value1, value2];

    console.log('value1 =', value1, ',value2 =', value2);
}

// swapValue(3, 7);


// JAWABAN SOAL 5
function convertNumberToWord(value) {
    const words = "satu, dua, tiga, empat, lima, enam, tujuh, delapan, sembilan, sepuluh, sebelas, dua belas, tiga belas, empat belas, lima belas, enam belas, tujuh belas, delapan belas, sembilan belas, dua puluh, dua puluh satu, dua puluh dua, dua puluh tiga, dua puluh empat, dua puluh lima, dua puluh enam, dua puluh tujuh, dua puluh delapan, dua puluh sembilan, tiga puluh, tiga puluh satu, tiga puluh dua, tiga puluh tiga, tiga puluh empat, tiga puluh lima, tiga puluh enam, tiga puluh tujuh, tiga puluh delapan, tiga puluh sembilan, empat puluh, empat puluh satu, empat puluh dua, empat puluh tiga, empat puluh empat, empat puluh lima, empat puluh enam, empat puluh tujuh, empat puluh delapan, empat puluh sembilan, lima puluh, lima puluh satu, lima puluh dua, lima puluh tiga, lima puluh empat, lima puluh lima, lima puluh enam, lima puluh tujuh, lima puluh delapan, lima puluh sembilan, enam puluh, enam puluh satu, enam puluh dua, enam puluh tiga, enam puluh empat, enam puluh lima, enam puluh enam, enam puluh tujuh, enam puluh delapan, enam puluh sembilan, tujuh puluh, tujuh puluh satu, tujuh puluh dua, tujuh puluh tiga, tujuh puluh empat, tujuh puluh lima, tujuh puluh enam, tujuh puluh tujuh, tujuh puluh delapan, tujuh puluh sembilan, delapan puluh, delapan puluh satu, delapan puluh dua, delapan puluh tiga, delapan puluh empat, delapan puluh lima, delapan puluh enam, delapan puluh tujuh, delapan puluh delapan, delapan puluh sembilan, sembilan puluh, sembilan puluh satu, sembilan puluh dua, sembilan puluh tiga, sembilan puluh empat, sembilan puluh lima, sembilan puluh enam, sembilan puluh tujuh, sembilan puluh delapan, sembilan puluh sembilan, seratus";
    const wordsArr = words.split(',').map((word) => word.replace(' ', ''));
    
    const numberToWord = {};
    
    for (let i = 1; i <= wordsArr.length; i++) {
        numberToWord[`${i}`] = wordsArr[i - 1];
    }

    if (value < 1 || value > 100) {
        console.log("silahkan masukkan bilangan 1-100");
    } else {
        console.log(numberToWord[value]);
    }
    
}

// convertNumberToWord(1)

// JAWABAN SOAL 6
function numberRange(values, low, high) {
    return values.filter((value) => value >= low && value <= high)
}

// console.log(numberRange([1, 3 , 5, 20, 50, 200], 4, 300));

// JAWABAN SOAL 7
function theLengthOfTheNumberInTheRange(values, low, high) {
    const result = values.filter((value) => value >= low && value <= high);
    const length = result.length;

    return length;
}

// console.log(theLengthOfTheNumberInTheRange([1, 3 , 5, 20, 50, 200], 1, 300));

// JAWABAN SOAL 8
for (let i = 1; i < 16; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('EduWork');
        continue;
    }

    if (i % 3 === 0) {
        console.log('Edu');
        continue;
    }

    if (i % 5 === 0) {
        console.log('Work');
        continue;
    }

    console.log(i);
}

// JAWABAN SOAL 9
function minAndMaxNumber(arr) {
    let low = arr[0];
    let high = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < low) {
        low = arr[i];
      }
  
      if (arr[i] > high) {
        high = arr[i];
      }
    }
  
    console.log('low:', low, 'high:', high);
}

// const angka = [4,2,6,88,3,11];

// minAndMaxNumber(angka);

// JAWABAN SOAL 10
function kabisat(year) {
    let kabisat = false;

    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            kabisat = false;
        } else {
            kabisat = true;
        }
    } else {
        kabisat = false;
    }

    if (kabisat) {
        console.log(`${year} adalah tahun kabisat`);
    } else {
        console.log(`${year} bukan bukan kabisat`);
    }
}

// kabisat(2021);
// kabisat(2024);
