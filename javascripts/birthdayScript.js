var introMsg = function() {
	document.getElementById("passwordArea").style.visibility = "hidden";

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
	var message = "What class would you like to be this time, Kirito?\n\n*Note: SAO Xgen is still in beta. There are only 2 classes.\n\nPlease make a selection:\n\nWarrior (OK) or Mage (Cancel)?"
	
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
		initiateStats(message);
	} else {
		characterBuildSimple();
	}
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var useButton = function(element) {
	var x = parseInt(element.innerHTML);

	if(x > 0) {
		x--;
		element.innerHTML = x;
	} else {
		alert('You have no more ' + element.id + ' potions...')
	}
}

var initiateStats = function(classType) {
	var stat1 = document.getElementById('stat1');
	var stat2 = document.getElementById('stat2');
	var stat1number = document.getElementById('stat1number');
	var stat2number = document.getElementById('stat2number');

	var potion1 = document.getElementById('potion1');
	var potion2 = document.getElementById('potion2');
	var recovery = document.getElementById('recovery');
	var attack = document.getElementById('attack');

	if(classType === 'warrior') {
		stat1.innerHTML = 'Strength';
		stat2.innerHTML = 'Armor (Heavy)';
		stat1number.innerHTML = 1;
		stat2number.innerHTML = 3;
		potion1.innerHTML = 'HP Recovery';
		potion2.innerHTML = 'Strength Burst'
		recovery.innerHTML = 1;
	} else {
		stat1.innerHTML = 'Spell DMG';
		stat2.innerHTML = 'Armor (Light)';
		stat1number.innerHTML = 3;
		stat2number.innerHTML = 1;
		potion1.innerHTML = 'HP Recovery';
		potion2.innerHTML = 'Spell DMG Burst'
		recovery.innerHTML = 1;
	}
}



var askToAdd = function(element) {
	var hiddenField = document.getElementById('theID');
	hiddenField.value = element.id;
	document.getElementById("passwordArea").style.visibility = "visible";
}

var addTo = function(hiddenField, pw) {
	document.getElementById("passwordArea").style.visibility = "hidden";
	var password = pw.value;

	if(password === 'kevinlovesasuna') {
		var element = document.getElementById(hiddenField.value);
		var x = parseInt(element.innerHTML);
		x++;
		element.innerHTML = x;
		pw.value = "";
	} else {
		alert('Incorrect password. Please try again...');
		askToAdd(document.getElementById(hiddenField.value));
	}
}