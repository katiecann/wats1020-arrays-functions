// This is the file where you will write the Truncate Words function and related code.

// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

function truncateWords(longText, numWords){
	var longTextArray = longText.split(' ');  // Use the split() function to split the String into an Array
	console.log(longTextArray);
	
	var length = longTextArray.length;  // Use the length attribute to find the number of words in the Array
	console.log(length);
	
	var shortenedArray = longTextArray.splice(0, numWords);  // Determine how many words should be removed from the String. Remove those words from the Array

	console.log(shortenedArray);
	
	var truncatedString = shortenedArray.join(' ') + ('...');  // Use the join() function to convert the Array back into a String.  Add an additional String item to the Array to put an ellipses in: "..."
	
	return truncatedString;  // Return the truncated String from the Function
}

numWords = (13);
var longText = "Much like the fortified wine that gives Marsala its name this robust shade incorporates the richness of a fulfilling meal while its grounding red-brown roots point to a sophisticated earthiness.";
console.log(truncatedString);






// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
