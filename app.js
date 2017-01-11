// your code here!
function getTextArray(str) {
	return str.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function getWordCount(str) {
	return str.split(" ").length;
}

function getUniqueCount(str) {
	var arrText = getTextArray(str);
	var arrWords = [];

	for (var i = 0; i < arrText.length; i++) {
		if(arrWords.indexOf(arrText[i]) < 0) {
			arrWords.push(arrText[i]);
		}
	}

	return arrWords.length
}

function getWordAverage(str) {
	var wordArr = getTextArray(str);
	var charCount = wordArr.join("").length;
	return (charCount / wordArr.length).toFixed(2);
}

function getSentenceAverage(str) {
	var wordArr = getTextArray(str);
	var sentenceArray = str.match(/[^\.!\?\n]+[\.!\?\n]+/g);
	
	return (wordArr.length / sentenceArray.length).toFixed(2);
}

$(document).ready(function() {
	var userText = "";
	var wordCount = 0;
	var uniqueCount = 0;
	var wordAverage = 0;
	var sentenceAverage = 0;

	$('.js-text').submit(function(event) {

		event.preventDefault();

		userText = $('.js-text').find('#user-text').val();
		// userText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa nulla, accumsan ut quam at, tincidunt interdum urna. Donec mollis ligula in semper facilisis. Pellentesque imperdiet tortor eget purus interdum, ac lacinia erat convallis. Ut in massa et velit porta pulvinar at in lorem. Nullam suscipit est turpis. Ut tempus est id mauris tempus efficitur. Integer luctus arcu tortor, a molestie urna sagittis nec. Ut non turpis id urna convallis lobortis eu quis lectus. Vestibulum nec nulla nulla. In sit amet congue orci, id lacinia libero. Vestibulum ac ullamcorper felis, sed maximus mi. Sed vulputate finibus tortor id vestibulum. Aliquam."
		wordCount = getWordCount(userText);
		uniqueCount = getUniqueCount(userText);
		wordAverage = getWordAverage(userText);
		sentenceAverage = getSentenceAverage(userText);
		
		$('.js-count').html(wordCount);
		$('.js-unique').html(uniqueCount);
		$('.js-word-average').html(wordAverage);
		$('.js-sentence-average').html(sentenceAverage);
		$('.text-report').removeClass('hidden');

	});
})