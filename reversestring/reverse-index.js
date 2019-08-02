//  Given a string, return a new string with the reversed
//  order of characters
//  --- Examples
//    reverse('apple') === 'leppa'
//    reverse('hello') === 'olleh'
//    reverse('Greetings!') === '!sgniteerG'

//example of function that would reverse order of strings inside an array
//  function reverseArrays(str) {
//  	const a = ['abcd', 'bbb'];
//  	a.reverse();
//  	console.log(a);
//  }
//  reverseArrays();

// this model is using a for loop to reverse a string
 function reverseWithFor(str) {
 	let reversedString = '';
 	//don't use this sintax when in need to iterate through every n+1 string
 	for (let character of str) {
 		reversedString = character + reversedString ;
 	}
 	return reversedString;
 }
 console.log(reverseWithFor('helk'))

// this model is using build in methods to reverse a string. 
//split('') it is used to split a string in to an array of substrings
//reverse() can only be used on arrays, therefore the need of the split('')
//join('') it is used to put back the substring of the array in a string 
function reverseWithBuildInMethods (str) {

 	// const arr = str.split('');
 	// arr.reverse();
 	// return arr.join('') 
	//same as above, but in one line
	return str.split("").reverse().join("");

	// return [...str].reverse().join('');
}
console.log(reverseWithBuildInMethods('hello'))


//using reverse method
function reverse(str) {
	return str.split('').reduce((rev, char) => char + rev, '');
}


module.exports = {reverseWithFor,
	reverseWithBuildInMethods,
	reverse
}




// lesson learned:
// If there are multiple functions in the module being exported, 
// In test module functions need to be referenced
