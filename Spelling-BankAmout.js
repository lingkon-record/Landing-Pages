let amount = 5000;

function numberToWords(num) {
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
                   "sixteen", "seventeen", "eighteen", "nineteen"];
    
    if (num === 0) return "zero";
    if (num < 10) return ones[num];
    if (num >= 10 && num < 20) return teens[num - 10];
    if (num >= 20 && num < 100) return tens[Math.floor(num / 10)] + " " + ones[num % 10];
    if (num >= 100 && num < 1000) return ones[Math.floor(num / 100)] + " hundred " + numberToWords(num % 100);
    if (num >= 1000 && num < 1000000) return numberToWords(Math.floor(num / 1000)) + " thousand " + numberToWords(num % 1000);
}

console.log(numberToWords(amount)); // Output: "five thousand "