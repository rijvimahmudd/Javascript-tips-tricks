/** JavaScript Tips & Tricks */
// by default JS use Unicode Character set
//you can't use ascii table for type conversion

// convert uppercase string to lowercase string

//using built-in function
let str = 'RIJVI';

console.log(str.toLowerCase()); // rijvi

//without built-in function
let convertedStr = '';

for (let i = 0; i < str.length; i++) {
	let char = str[i];

	if (char >= 'A' && char <= 'Z') {
		char = String.fromCharCode(char.charCodeAt(0) + 32);
	}

	convertedStr += char;
}

console.log(convertedStr); // "rijvi"'

// convert uppercase string to lowercase string

//using built-in function
let str2 = 'rijvi';

console.log(str.toUpperCase()); // RIJVI

//without built-in function
let convertedStr2 = '';

for (let i = 0; i < str.length; i++) {
	let char = str[i];

	if (char >= 'a' && char <= 'z') {
		char = String.fromCharCode(char.charCodeAt(0) - 32);
	}

	convertedStr2 += char;
}

console.log(convertedStr2); // "RIJVI"

/** For more follow my Linkedin */
