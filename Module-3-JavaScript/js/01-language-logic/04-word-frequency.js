// TASK 4: WORD FREQUENCY COUNTER

console.log("=== TASK 4: WORD FREQUENCY COUNTER ===");

function countWordFrequency(paragraph) {
  const cleanText = paragraph.toLowerCase().replace(/[^a-z0-9\s]/g, "");
  
  const words = cleanText.split(/\s+/);
  
  const frequencyMap = {};
  for (let word of words) {
    if (word.length === 0) continue;
    if (frequencyMap[word]) {
      frequencyMap[word]++;
    } else {
      frequencyMap[word] = 1;
    }
  }

  const sortedResult = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);

  return sortedResult;
}

const sampleText = "JavaScript is great. JavaScript is fun, and learning JavaScript is very useful!";
console.log("Word Frequency Output:", countWordFrequency(sampleText));