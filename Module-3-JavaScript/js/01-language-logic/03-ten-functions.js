console.log("=== TASK 3: TEN BASIC FUNCTIONS ===");

// 1. FizzBuzz
function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

// 2. Reverse a String without reverse()
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// 3. Check Palindrome
function isPalindrome(str) {
  const cleanStr = str.toLowerCase();
  const reversed = reverseString(cleanStr);
  return cleanStr === reversed;
}

// 4. Find Largest Number in Array without Math.max
function findLargest(arr) {
  if (arr.length === 0) return null;
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// 5. Count Vowels
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// 6. Generate Fibonacci Series
function generateFibonacci(count) {
  if (count <= 0) return [];
  if (count === 1) return [0];

  const series = [0, 1];
  for (let i = 2; i < count; i++) {
    const nextNum = series[i - 1] + series[i - 2];
    series.push(nextNum);
  }
  return series;
}

// 7. Check Prime Number
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 8. Factorial by Recursion
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// 9. Convert Number to Words (0 to 9)
function numberToWords(num) {
  const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  if (num >= 0 && num <= 9) {
    return words[num];
  }
  return "Out of range (0-9 only)";
}

// 10. Find Duplicates in Array
function findDuplicates(arr) {
  const duplicates = [];
  const seen = [];

  for (let item of arr) {
    if (seen.includes(item)) {
      if (!duplicates.includes(item)) {
        duplicates.push(item);
      }
    } else {
      seen.push(item);
    }
  }
  return duplicates;
}

// --- Demos ---
console.log("FizzBuzz (15):", fizzBuzz(15));
console.log("Reverse 'hello':", reverseString("hello"));
console.log("Is 'racecar' palindrome?:", isPalindrome("racecar"));
console.log("Largest in [10, 45, 2, 99, 23]:", findLargest([10, 45, 2, 99, 23]));
console.log("Vowel count in 'JavaScript':", countVowels("JavaScript"));
console.log("Fibonacci (7 terms):", generateFibonacci(7));
console.log("Is 7 Prime?:", isPrime(7));
console.log("Factorial of 5:", factorial(5));
console.log("Number 7 in words:", numberToWords(7));
console.log("Duplicates in [1, 2, 3, 2, 4, 5, 1]:", findDuplicates([1, 2, 3, 2, 4, 5, 1]));