/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

var sumOfArray = function(array) {
	var sum = 0
	for (var i = 0; i < array.length; i++) {
		sum += array[i]
		//console.log(sum)
	}
	return sum
}
//console.log(sumOfArray([1, 2]))

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

var maxOfArray = function(array) {
	var maxNum = []
	for (var i = 0; i < array.length; i++) {
		if (typeof array[i] !== 'number') {
			return NaN
		}
		if (array[i] > maxNum) {
			maxNum = array[i]
		}
	}
	return maxNum
}

console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(symbol){
    var vowels = ['a', 'e', 'i', 'o', 'u']
    if (typeof symbol !== 'string') {
            return false
    }
    var checkSymbol = symbol.toLowerCase()
    for (var i = 0; i < vowels.length; i++) {
    	if (checkSymbol === vowels[i]) {
                return true
        }
    }
    return false
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

var reverse = function(string) {
	var newString = '';
	for (var i = string.length-1; i >= 0; i--) {
		newString += string[i]
	}
	return newString
}

// console.log(reverse('books'))


console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

var fizzbuzz = function(num) {
	var ztring = ''
	for (var i = 1; i <= num; i++) {
		if (i % 3 !== 0 && i % 5 !== 0) {
			ztring +='.' 
		}
		if (i % 3 === 0 && i % 5 !== 0) {
			ztring += 'fizz'
		}
		if (i % 5 === 0 && i % 3 !== 0) {
			ztring += 'buzz'
		}
		if (i % 3 === 0 && i % 5 === 0) {
			ztring +='fizzbuzz' 
		}
	}
	return ztring
}
// console.log(fizzbuzz(10))

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

function findLongestWord(sentence){
    var longestWord = ''
    var punctuationless = sentence.replace(/[']/g,"")
    // console.log(punctuationless)
    var sentArray = punctuationless.split(' ')
    for (var i = 0; i < sentArray.length; i++) {
    	// console.log(sentArray[i])
    	if (sentArray[i].length > longestWord.length) {
    		longestWord = sentArray[i]
    	}
    }
    return longestWord
}

// console.log(findLongestWord("this is a sentence of words"))


console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

var GCD = function(num1, num2) {
	if (num1 > num2) {
		var smaller = num2
		var larger = num1
	}
	if (num2 > num1) {
		var smaller = num1
		var larger = num2
	}

	if (num1 % num2 === 0 || num2 % num1 === 0) {
		return smaller
	}
	var decNum = smaller
	while (larger % decNum !== 0) {
		decNum = decNum/2
		if (larger % decNum === 0) {
			return decNum
		}
		if (decNum !== decNum.toFixed(0)) {
			return 1
		}
	}
	return decNum
}

// console.log(GCD(50,20))

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);