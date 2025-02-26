//* ---------------------------------------------------------
//* Programming Question: Longest Word in a String
//* ---------------------------------------------------------

//? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.


let findLongestWord=(str)=>{

    str=str.trim();
    if(str.length===0) return false;

    let words=str.split(" ");
    words=words.sort((a,b)=>(b.length-a.length));

    return words[0];
}


console.log(

    findLongestWord("Javascript is the best profdfdfdfgramming language")
)