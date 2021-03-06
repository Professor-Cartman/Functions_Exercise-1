/*
Xiaowen Guan
June 17, 2020
*/

// This function returns a random number between (and including both) minimum and maximum
function getRandomInteger (minimum, maximum) {
  minimum = Math.ceil(minimum) // minimum is inclusive
  maximum = Math.floor(maximum + 1) // maximum is exclusive so we add one
  return Math.floor(Math.random() * (maximum - minimum)) + minimum
}

// Povided Arrays
const nouns = ['Rabbit', 'encyclopedia', 'lipstick', 'hair dryer', 'battery', 'lamp', 'blackboard', 'glasses, balcony', 'bicycles']

const verbs = ['washed', 'became', 'studies', 'listen', 'dance', 'jump', 'drink', 'eat', 'draw', 'beat']

const adverbs = ['supposedly', 'usefully', 'unimpressively', 'warmly', 'wonderfully', 'terribly', 'suspiciously', 'violently', 'unexpectedly', 'tightly']

const adjectives = ['calm', 'thankful', 'glamorous', 'attractive', 'brave', 'angry', 'defeated', 'delightful', 'polite', 'massive']

const proNouns = ['they', 'we', 'you', 'he', 'she', 'I', 'it']

const openings = ['she memorized', 'they squeezed', 'I walked', 'he listened', 'she thought ', 'he recognized', 'I allowed', 'she admitted', 'she promised', 'he left']

const closings = ['at last', 'the end', 'finished', 'come to an end', 'over', 'in conclusion', 'termination', 'close', 'stop', 'finally']

function createRandomSentence () {
  const randomSentence = nouns[getRandomInteger(0, nouns.length - 1)] + ' ' +
    verbs[getRandomInteger(0, verbs.length - 1)] + ' ' +
    adverbs[getRandomInteger(0, adverbs.length - 1)] + ' ' +
    adjectives[getRandomInteger(0, adjectives.length - 1)] + ' ' +
    proNouns[getRandomInteger(0, proNouns.length - 1)] + ' ' +
    openings[getRandomInteger(0, openings.length - 1)] + ' ' +
    closings[getRandomInteger(0, closings.length - 1)] + '\.'
  return randomSentence
}

function outputSentence (sentence) {
  console.log(sentence)
  console.log('\n')
}

const numberOfSentences = 10

for (let i = 0; i < numberOfSentences; i++) {
  outputSentence(createRandomSentence())
}
// Instructions:

// Arrays:
// Each provided array (except for proNouns) must have at least 10 elements (words or phrases)
// Add/replace words to each array based on any theme you like (keep it tasteful!)
// You do not have to use the example words in any of the provided arrays

// Functions:

// First function:
// Create a function that outputs the text/value sent to it using console.log()
// There should be a newline ("\n") both before and after the value is output
// Name this function appropriately
// Note this function does not return any value

// Second function:
// Create a function that builds a sentence using the 7 provided arrays
// Using the provided getRandomInteger function you will randomly use content from each array based on the random number returned by getRandomInt.
// Because you are using an array the minimum value should always be zero
// The maximum value should be the array length - 1

// The sentence created (concatinated) inside this function should be structured like this:
//      Get a random element from the openings array and add it to your new sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the adjectives array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the nouns array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the pro_nouns array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the verbs array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the adverbs array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the adjectives array and add it to your sentence
//      add closing punctuation.

// Note Feel free to re-arrange your sentence as you wish, just make sure you use the 7 provided arrays
// Note add more arrays if you wish

// Name this function appropriately
// This function should return the completed sentence

// Program Flow:

// inside a loop that repeats 10 times

// Your program will call the "sentence creating" function that you are required to build
// using a new variable you will capture the returned value (the sentence) from this function. Name this variable appropriately

// next you will send this variable to the other function you created used for output
// this will result in your random sentence being output.

// Other considerations:
// Everyones code should be different
// This is a fun exercise so... have fun!

// Submission
// Submit your GitHub repo URL through the LMS.
