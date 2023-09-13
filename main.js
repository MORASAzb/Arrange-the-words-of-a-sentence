const inputSentence = prompt('please enter your sentences with number :');

console.log(inputSentence);


function orderString(inputStr) {
  if (inputStr === "") {
    return "";
  }

  const words = inputStr.split(" ");
  const sortedWords = words.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  });

  return sortedWords.join(" ");
}

if (inputSentence) {
  const result = orderString(inputSentence);
  console.log("sort result :" + result)
} else {
  console.log('The entry is invalid or empty.')
}



