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
	var stat0 = document.getElementById('stat0');
	var stat1 = document.getElementById('stat1');
	var stat2 = document.getElementById('stat2');
	var stat0number = document.getElementById('stat0number');
	var stat1number = document.getElementById('stat1number');
	var stat2number = document.getElementById('stat2number');

	var potion1 = document.getElementById('potion1');
	var potion2 = document.getElementById('potion2');
	var recovery = document.getElementById('recovery');
	var attack = document.getElementById('attack');

	if(classType === 'warrior') {
		stat0.innerHTML = 'HP'
		stat1.innerHTML = 'Strength (+1)';
		stat2.innerHTML = 'Armor (+2)';
		stat3.innerHTML = 'Health';
		stat0number.innerHTML = 20;
		stat1number.innerHTML = 1;
		stat2number.innerHTML = 3;
		stat3number.innerHTML = 0;
		potion1.innerHTML = 'HP Recovery';
		potion2.innerHTML = 'Strength Burst';
		recovery.innerHTML = 0;
		attack.innerHTML = 0;
	} else {
		stat0.innerHTML = 'HP'
		stat1.innerHTML = 'Spell DMG (+2)';
		stat2.innerHTML = 'Armor (+1)';
		stat3.innerHTML = 'Health';
		stat0number.innerHTML = 20;
		stat1number.innerHTML = 3;
		stat2number.innerHTML = 1;
		stat3number.innerHTML = 0;
		potion1.innerHTML = 'HP Recovery';
		potion2.innerHTML = 'Spell DMG Burst';
		recovery.innerHTML = 0;
		attack.innerHTML = 0;
	}
}

var hidePassword = function(element) {
	element.style.visibility = "hidden";
}

var askToAdd = function(element) {
	var hiddenField = document.getElementById('theID');
	hiddenField.value = element.id;
	document.getElementById("passwordArea").style.visibility = "visible";
}

var addTo = function(hiddenField, ta, pw, operation) {
	document.getElementById("passwordArea").style.visibility = "hidden";
	var password = pw.value;
	var element = document.getElementById(hiddenField.value);

	if(password === 'k<3a') {	
		var x = parseInt(element.innerHTML);
		var y = parseInt(ta.value);

		if(operation.id === 'add') {
			///////////////////////////////////
			if(element.id.indexOf('stat1') > -1 || element.id.indexOf('stat2') > -1) {
				if(document.getElementById('playerClass').value === 'Warrior') {
					if(x + y <= 10) {
						element.innerHTML = x + y;
					} else {
						alert('Invalid computation...');
					}
				} else if(document.getElementById('playerClass').value === 'Mage') {
					if(element.id.indexOf('stat1') > -1) {
						if(x + y <= 10) {
							element.innerHTML = x + y;
						} else {
							alert('Invalid computation...');
						}
					} else if (element.id.indexOf('stat2') > -1) {
						if(x + y <= 5) {
							element.innerHTML = x + y;
						} else {
							alert('Invalid computation...');
						}
					}
				}
			} else {
				if (element.id.indexOf('stat3') > -1) {
					if(x + y <= 10) {
						element.innerHTML = x + y;
					} else {
						alert('Invalid computation');
					}
				} else {
					element.innerHTML = x + y;
				}
			}
		} else {
			if(element.id === 'stat0number'){
				element.innerHTML = x - y;
			} else {
				alert('Only can subtract from HP...');
			}
		}
		
		pw.value = "";
		ta.value = "";
	} else {
		alert('Incorrect password. Please try again...');
		askToAdd(document.getElementById(hiddenField.value));
	}

	checkAndUpdateStats(element);
}

var checkAndUpdateStats = function(e) {
		var str = e.id;

		if(str.indexOf('stat1') > -1) {
			var stat1 = document.getElementById('stat1');
			
			if(stat1.innerHTML.indexOf('Strength') > -1) {
				if(e.innerHTML === '3') {
					stat1.innerHTML = 'Strength (+2)'
				} else if(e.innerHTML === '5') {
					stat1.innerHTML = 'Strength (+3)'
				} else if(e.innerHTML === '7') {
					stat1.innerHTML = 'Strength (+4)'
				} else if(e.innerHTML === '9') {
					stat1.innerHTML = 'Strength (+5)'
				} else if(e.innerHTML === '10') {
					stat1.innerHTML = 'Strength (+7)'
				}	
			}

			if(stat1.innerHTML.indexOf('Spell DMG') > -1) {
				if(e.innerHTML === '3') {
					stat1.innerHTML = 'Spell DMG (+2)'
				} else if(e.innerHTML === '5') {
					stat1.innerHTML = 'Spell DMG (+4)'
				} else if(e.innerHTML === '7') {
					stat1.innerHTML = 'Spell DMG (+6)'
				} else if(e.innerHTML === '9') {
					stat1.innerHTML = 'Spell DMG (+8)'
				} else if(e.innerHTML === '10') {
					stat1.innerHTML = 'Spell DMG (+12)'
				}	
			}
		} else if(str.indexOf('stat2') > -1) {
			var stat2 = document.getElementById('stat2');

			if(stat2.innerHTML.indexOf('Armor') > -1) {
				if(e.innerHTML === '3') {
					stat2.innerHTML = 'Armor (+2)'
				} else if(e.innerHTML === '5') {
					stat2.innerHTML = 'Armor (+3)'
				}

				if(document.getElementById('playerClass').value === 'Warrior') {
					if(e.innerHTML === '7') {
						stat2.innerHTML = 'Armor (+4)'
					} else if(e.innerHTML === '9') {
						stat2.innerHTML = 'Armor (+5)'
					} else if(e.innerHTML === '10') {
						stat2.innerHTML = 'Armor (+7)'
					}
				}	
			}
		} else if(str.indexOf('stat3') > -1) {
			var stat3 = document.getElementById('stat3');
			var healthElement = document.getElementById('stat0number');

			if(stat3.innerHTML.indexOf('Health') > -1) {	
				if(document.getElementById('playerClass').value === 'Warrior') {
					if(e.innerHTML === '1') {
						stat3.innerHTML = 'Health (+8)'
					} else if(e.innerHTML === '2') {
						stat3.innerHTML = 'Health (+16)'
					} else if(e.innerHTML === '3') {
						stat3.innerHTML = 'Health (+24)'
					} else if(e.innerHTML === '4') {
						stat3.innerHTML = 'Health (+32)'
					} else if(e.innerHTML === '5') {
						stat3.innerHTML = 'Health (+40)'
					} else if(e.innerHTML === '6') {
						stat3.innerHTML = 'Health (+48)'
					} else if(e.innerHTML === '7') {
						stat3.innerHTML = 'Health (+56)'
					} else if(e.innerHTML === '8') {
						stat3.innerHTML = 'Health (+64)'
					} else if(e.innerHTML === '9') {
						stat3.innerHTML = 'Health (+72)'
					} else if(e.innerHTML === '10') {
						stat3.innerHTML = 'Health (+80)'
					}
					var a = parseInt(healthElement.innerHTML) + 8;
					healthElement.innerHTML = a;				
				} else if(document.getElementById('playerClass').value === 'Mage') {
					if(e.innerHTML === '1') {
						stat3.innerHTML = 'Health (+5)'
					} else if(e.innerHTML === '2') {
						stat3.innerHTML = 'Health (+10)'
					} else if(e.innerHTML === '3') {
						stat3.innerHTML = 'Health (+15)'
					} else if(e.innerHTML === '4') {
						stat3.innerHTML = 'Health (+20)'
					} else if(e.innerHTML === '5') {
						stat3.innerHTML = 'Health (+25)'
					} else if(e.innerHTML === '6') {
						stat3.innerHTML = 'Health (+30)'
					} else if(e.innerHTML === '7') {
						stat3.innerHTML = 'Health (+35)'
					} else if(e.innerHTML === '8') {
						stat3.innerHTML = 'Health (+30)'
					} else if(e.innerHTML === '9') {
						stat3.innerHTML = 'Health (+45)'
					} else if(e.innerHTML === '10') {
						stat3.innerHTML = 'Health (+50)'
					}
					var a = parseInt(healthElement.innerHTML) + 5;
					healthElement.innerHTML = a;
				}
			}
		}
	}