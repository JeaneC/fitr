var card = 0;
list = [];

firebase
	.database()
	.ref('/cards')
	.once('value')
	.then(function(snapshot) {
		list = snapshot.val();
		console.log('hiii');
		console.log(list);
	});

function getCard() {
	var meep = document.querySelectorAll('.hold');

	if (list.length > 0) {
		for (i = 0; i < 5; i++) {
			meep[i].setAttribute('src', 'assets/' + list[card][i] + '.svg');
		}
	} else {
		firebase
			.database()
			.ref('/cards/' + String(card))
			.once('value')
			.then(function(snapshot) {
				var val = snapshot.val();

				for (i = 0; i < 5; i++) {
					meep[i].setAttribute('src', 'assets/' + val[i] + '.svg');
				}
			});
	}
}

function nextCard() {
	card++;
	if (card == 6) {
		card = 0;
	}

	getCard();
}

var noButton = document.querySelector('.icon');
console.log(noButton);
noButton.addEventListener('click', function() {
	console.log('hi');
	nextCard();
});

function matched() {}

nextCard();
nextCard();
getCard();
console.log('hi');
