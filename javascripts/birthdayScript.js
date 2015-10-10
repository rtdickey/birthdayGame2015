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
		introLeavingMsg();
	}
}

var rulesFromIntro = function() {
	var message = "Let's go over a few rules...\n\n1) You will have to defeat three bosses in order to receive the treasure you seek.\n\n2) You will level up along the way. The path you choose is yours. Make wise decisions.\n\n3) Remember to have fun...\n\nMuahhhahahahahaaaaa!"
	
	var answer = confirm(message);

	if(answer) {
		characterBuild();
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

var characterBuildSimple = function() {
	var message = "Warrior (OK) or Mage (Cancel)?"
	
	var answer = confirm(message);
	if(answer) {
		characterDecision('warrior');
	} else {
		characterDecision('mage')
	}
}

var characterBuild = function() {
	var message = "What class would you like to be this time, Kirito?\n\n*Note: SAO Xgen is still in beta. There are only 2 classes.\n\nPlease type your selection:\n\nWarrior (OK) or Mage (Cancel)?"
	
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
		var playerClass = document.getElementById("playerClass");
		var playerName = document.getElementById("playerName");
		playerName.value = 'Kirito';
		playerClass.value = message.capitalizeFirstLetter();
	} else {
		characterBuildSimple();
	}
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}