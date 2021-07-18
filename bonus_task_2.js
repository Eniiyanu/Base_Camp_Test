function encodeConsonants(string) {
 let result = '';
 // store an array of vowels for use later
 const vowels = ['a', 'e', 'i', 'o', 'u'];
 // loop through entire string
 for (let i of string) {
 // special case for z
 if (i === 'z') {
 result += 'b';
 break;
 }
 // if letter is not a vowel or a space
 else if (vowels.indexOf(i) === -1 && i !== ' ') {
 // convert each letter to its character code
 let newCode = i.charCodeAt(0) + 1;
 // perform check to make sure new letter is not a vowel by seeing if
 // the new letter exists in an array of vowels
 if (vowels.indexOf(String.fromCharCode(newCode)) !== -1) {
 newCode += 1;
 }
 // get new letter and add to new string
 result += String.fromCharCode(newCode);
 }
 // otherwise character is a vowel or a space
 else {
 result += i;
 }
 }
 return result;
}