var introMsg = function() {
	var message = 'Welcome to SAO Xgen.\n\nToday is special. You have purchased your new NERVE Gear from your local store. Very trusting of you to come back. What do you have to prove, Kirito?\n\n Anyway, shall we begin?'

	var answer = confirm(message);
	if(answer) {
		rulesFromIntro();
	} else {
		introLeavingMsg();
	}
}

var introLeavingMsg = function() {
	var message = "So soon?\n\nYou didn't think it would be that easy did you? Shall we proceed?";

	var answer = confirm(message);
	if(answer) {
		rules();
	} else {
		characterBuild();
	}
}

var rulesFromIntro = function() {
	var message = "Let's go over a few rules...\n\n1) You will have to make passed three bosses in order to receive the treasure you seek.\n\n2) You will level up along the way. The path you choose is yours. Make wise decisions\n\n3) Remember to have fun...\n\nMuahhhahahahahaaaaa!"
	
	var answer = confirm(message);

	if(answer) {
		//todo
	} else {
		rulesFromIntro();
	}
}

var rules = function() {
	var message = "I knew you would come around. Let's begin..."

	var answer = confirm(message);
	if(answer) {
		rulesFromIntro();
	} else {
		rules();
	}
}

var characterBuild = function() {
	var message = "You don't learn very quickly do you?\n\nOh well, let's begin. What class would you like to be this time?\n\n*Note: SAO Xgen is still in beta. There are only 2 classes.\n\nPlease type your selection:\n\nwarrior or mage?"
	
	var answer = confirm(message);
	if(answer) {
		characterDecision('warrior');
	} else {
		characterDecision('mage')
	}
}

var characterDecision = function(message) {
	var answer = confirm('You chose ' + message + '. Is this correct?');

	if(answer) {
		alert('good');
	} else {
		characterBuild();
	}
}