var dexData = {
	ponies: {
		'aloe': {
			num: 0,
			name: "Aloe",
			typing: [ 'LOVE', 'LIGHT' ],
			race: 'earthpony',
			sex: 'F',
			img: 'Aloe/stand_right.gif',
			stats: {
				hp:  90,
				atk: 70,
				def: 150,
				spa: 50,
				spd: 80,
				spe: 60
			},
			moves: [ 'spatreatment', 'hiddentalent', 'meditation', 'nap', 'mirrorpond', 'snuggle', 'burningpowder', 'venompotion', 'hindkick', 'joke', 'taunt', 'loveandcare', 'chatter', 'dodge', 'relax' ],
			abilities: [ 'shiningcoat' ]
		},
		'applebloom': {
			num: 1,
			name: "Apple Bloom",
			typing: [ 'HONESTY', 'SPIRIT' ],
			race: 'earthpony',
			sex: 'F',
			img: 'AppleBloom/stand_right.gif',
			stats: {
				hp:  90,
				atk: 60,
				def: 110,
				spa: 50,
				spd: 85,
				spe: 90
			},
			moves: [ 'tackle', 'hiddentalent', 'gethype', 'repeat', 'stalking', 'mirrorpond', 'practice', 'hopefulstrike', 'poisonjoke', 'dodge', 'martialarts' ],
			abilities: [ '' ]
		},
		'applejack': {
			num: 2,
			name: "Applejack",
			typing: [ 'HONESTY' ],
			race: 'earthpony',
			sex: 'F',
			img: 'Applejack/stand_right.gif',
			stats: {
				hp:  90,
				atk: 100,
				def: 130,
				spa: 40,
				spd: 70,
				spe: 115
			},
			moves: [ 'tackle', 'rectify', 'hiddentalent', 'mirrorpond', 'ragingspree', 'bindup', 'dodge', 'wildweed', 'applebuck', 'duckface', 'charge', 'hindkick' ],
			abilities: [ 'integrity', 'simplicity' ]
		},
		'aryanne': {
			num: 3,
			name: "Aryanne",
			typing: [ 'LOYALTY' ],
			race: 'earthpony',
			sex: 'F',
			img: 'Aryanne/stand_right.png',
			stats: {
				hp:  65,
				atk: 122,
				def: 80,
				spa: 88,
				spd: 65,
				spe: 55
			},
			moves: [ 'hiddentalent', 'charge', 'surprisehit', 'stalking', 'schemeup', 'scareaway', 'ragingspree', 'powerdisplay', 'mirrorpond', 'innerfocus', 'hindkick', 'entrench', 'bully', 'bindup' ],
			abilities: [ '' ]
		},
		'babsseed': {
			num: 4,
			name: "Babs Seed",
			typing: [ 'PASSION', 'SHADOW' ],
			race: 'earthpony',
			sex: 'F',
			img: 'BabsSeed/stand_right.gif',
			stats: {
				hp:  87,
				atk: 100,
				def: 90,
				spa: 45,
				spd: 93,
				spe: 70
			},
			moves: [ 'tackle', 'hiddentalent', 'entrench', 'mirrorpond', 'powerdisplay', 'burningpowder', 'surprisehit', 'dodge', 'bully', 'applebuck' ],
			abilities: [ '' ]
		},
		'berrypunch': {
			num: 5,
			name: "Berry Punch",
			typing: [ 'NIGHT', 'LAUGHTER' ],
			race: 'earthpony',
			sex: 'F',
			img: 'BerryPunch/stand_right.gif',
			stats: {
				hp:  90,
				atk: 86,
				def: 75,
				spa: 64,
				spd: 69,
				spe: 81
			},
			moves: [ 'stalking', 'hiddentalent', 'gethype', 'nap', 'mirrorpond', 'scareaway', 'treat', 'sneakattack', 'dodge', 'tackle', 'venompotion' ],
			abilities: [ 'simplicity', 'nocturnality', 'pestresilience' ]
		},
		'bigmacintosh': {
			num: 6,
			name: "BigMacintosh",
			typing: [ 'HONESTY', 'LOYALTY' ],
			race: 'earthpony',
			sex: 'M',
			img: 'BigMacintosh/stand_right.gif',
			stats: {
				hp:  115,
				atk: 80,
				def: 108,
				spa: 37,
				spd: 85,
				spe: 35
			},
			moves: [ 'tackle', 'heavymassage', 'hiddentalent', 'wildweed', 'entrench', 'mirrorpond', 'dodge', 'applebuck', 'relax' ],
			abilities: [ 'bruteforce', 'integrity', 'selfconfidence' ]
		},
		'bonbon': {
			num: 7,
			name: "Bon Bon",
			typing: [ 'LOYALTY', 'SPIRIT' ],
			race: 'earthpony',
			sex: 'F',
			img: 'BonBon/stand_right.gif',
			stats: {
				hp:  70,
				atk: 70,
				def: 70,
				spa: 70,
				spd: 70,
				spe: 70
			},
			moves: [ 'spatreatment', 'hiddentalent', 'gethype', 'stalking', 'mirrorpond', 'ragingspree', 'glomp', 'snuggle', 'burningpowder', 'bubbleburst', 'dodge', 'tackle' ],
			abilities: [ 'selfconfidence', 'hotheaded' ]
		},
		'braeburn': {
			num: 8,
			name: "Braeburn",
			typing: [ 'HONESTY', 'GENEROSITY' ],
			race: 'earthpony',
			sex: 'M',
			img: 'Braeburn/stand_right.gif',
			stats: {
				hp:  75,
				atk: 90,
				def: 90,
				spa: 47,
				spd: 63,
				spe: 85
			},
			moves: [ 'hiddentalent', 'entrench', 'treat', 'mirrorpond', 'taunt', 'dodge', 'applebuck' ],
			abilities: [ '' ]
		},
		'bulkbiceps': {
			num: 9,
			name: "Bulk Biceps",
			typing: [ 'PASSION', 'KINDNESS' ],
			race: 'pegasus',
			sex: 'M',
			img: 'BulkBiceps/stand_right.gif',
			stats: {
				hp:  80,
				atk: 170,
				def: 65,
				spa: 60,
				spd: 55,
				spe: 60
			},
			moves: [ 'charge', 'heavymassage', 'hiddentalent', 'mirrorpond', 'ragingspree', 'hollerout', 'practice', 'relayrace', 'dodge', 'hindkick', 'innerfocus' ],
			abilities: [ 'compassion', 'toughbody' ]
		},
		'buttonmash': {
			num: 10,
			name: "Button Mash",
			typing: [ 'PASSION' ],
			race: 'earthpony',
			sex: 'M',
			img: 'ButtonMash/stand_right.png',
			stats: {
				hp:  85,
				atk: 60,
				def: 75,
				spa: 50,
				spd: 60,
				spe: 70
			},
			moves: [ 'nap', 'mustache', 'hiddentalent', 'mirrorpond', 'burningpowder', 'surprisehit', 'taunt', 'dodge', 'repeat', 'whine', 'dissonance', 'tackle', 'crazystunt', 'rockthrow' ],
			abilities: [ 'highscorer' ]
		},
		'buttonsmom': {
			num: 11,
			name: "Button's Mom",
			typing: [ 'LOVE', 'KINDNESS' ],
			race: 'earthpony',
			sex: 'F',
			img: 'ButtonsMom/stand_right.png',
			stats: {
				hp:  135,
				atk: 89,
				def: 90,
				spa: 48,
				spd: 50,
				spe: 63
			},
			moves: [ 'tackle', 'heavymassage', 'hiddentalent', 'hollerout', 'loveandcare', 'joke', 'snuggle', 'glomp', 'entrench', 'duckface', 'talkout', 'mirrorpond', 'treat', 'hopefulstrike', 'dodge' ],
			abilities: [ 'appeal' ]
		},
		'canni': {
			num: 12,
			name: "Canni",
			typing: [ 'PASSION', 'LAUGHTER' ],
			race: 'earthpony',
			sex: 'F',
			img: 'Canni/stand_right.gif',
			stats: {
				hp:  110,
				atk: 39,
				def: 55,
				spa: 97,
				spd: 55,
				spe: 94
			},
			moves: [ 'jingle', 'hiddentalent', 'speedup', 'startle', 'meditation', 'ragingspree', 'poisonjoke', 'mirrorpond', 'hollerout', 'gethype', 'duckface', 'chatter', 'bubbleburst', 'bizaam' ],
			abilities: [ 'spellrefractory' ]
		},
		'carrottop': {
			num: 13,
			name: "Carrot Top",
			typing: [ 'MAGIC', 'GENEROSITY' ],
			race: 'earthpony',
			sex: 'F',
			img: 'CarrotTop/stand_right.gif',
			stats: {
				hp:  57,
				atk: 51,
				def: 71,
				spa: 124,
				spd: 58,
				spe: 89
			},
			moves: [ 'hiddentalent', 'sonicbarrier', 'meditation', 'enlighten', 'nap', 'mirrorpond', 'teleportblast', 'dodge', 'freezespell', 'hornbeam', 'crystalshield' ],
			abilities: [ 'ataraxy', 'pestresilience' ]
		},
		'cheerilee': {
			num: 14,
			name: "Cheerilee",
			typing: [ 'LOVE', 'KINDNESS' ],
			race: 'earthpony',
			sex: 'F',
			img: 'Cheerilee/stand_right.gif',
			stats: {
				hp:  95,
				atk: 76,
				def: 90,
				spa: 50,
				spd: 85,
				spe: 74
			},
			moves: [ 'tackle', 'jingle', 'heavymassage', 'hiddentalent', 'talkout', 'mirrorpond', 'treat', 'hopefulstrike', 'bindup', 'dodge' ],
			abilities: [ '' ]
		},
		'cheesesandwich': {
			num: 15,
			name: "Cheese Sandwich",
			typing: [ 'LAUGHTER', 'CHAOS' ],
			race: 'earthpony',
			sex: 'M',
			img: 'CheeseSandwich/stand_right.gif',
			stats: {
				hp:  61,
				atk: 110,
				def: 48,
				spa: 76,
				spd: 60,
				spe: 130
			},
			moves: [ 'jingle', 'hiddentalent', 'gethype', 'mirrorpond', 'hollerout', 'glomp', 'burningpowder', 'surprisehit', 'bubbleburst', 'dodge', 'joke', 'chatter', 'speedup', 'charge', 'chaosburst', 'partycannon' ],
			abilities: [ '' ]
		},
		'chiefthunderhooves': {
			num: 16,
			name: "Chief Thunderhooves",
			typing: [ 'SPIRIT', 'LOYALTY' ],
			race: 'ungulate',
			sex: 'M',
			img: 'ChiefThunderhooves/stand_right.png',
			stats: {
				hp:  100,
				atk: 70,
				def: 95,
				spa: 35,
				spd: 65,
				spe: 95
			},
			moves: [ 'tackle', 'drumbang', 'rectify', 'hiddentalent', 'wildweed', 'mirrorpond', 'hollerout', 'stampede', 'dodge', 'speedup', 'charge', 'rampage' ],
			abilities: [ 'bruteforce', 'stubborn', 'ataraxy' ]
		},
		'chrysalis': {
			num: 17,
			name: "Chrysalis",
			typing: [ 'SHADOW', 'LOVE' ],
			race: 'mythicbeast',
			sex: 'F',
			img: 'Chrysalis/stand_right.gif',
			stats: {
				hp:  105,
				atk: 105,
				def: 86,
				spa: 139,
				spd: 130,
				spe: 85
			},
			moves: [ 'nightwind', 'hiddentalent', 'meditation', 'balefire', 'mirrorpond', 'powerdisplay', 'scareaway', 'teleportblast', 'surprisehit', 'schemeup', 'sneakattack', 'dodge', 'tackle', 'magicblast', 'skydive', 'hornbeam', 'evilplot', 'mutate', 'glowinglaser' ],
			abilities: [ '' ]
		},
		'cocopommel': {
			num: 18,
			name: "Coco Pommel",
			typing: [ 'KINDNESS' ],
			race: 'earthpony',
			sex: 'F',
			img: 'CocoPommel/stand_right.png',
			stats: {
				hp:  98,
				atk: 50,
				def: 85,
				spa: 65,
				spd: 70,
				spe: 52
			},
			moves: [ 'shyaway', 'spatreatment', 'hiddentalent', 'talkout', 'stalking', 'mirrorpond', 'snuggle', 'hopefulstrike', 'bindup', 'dodge' ],
			abilities: [ 'mildness' ]
		},
		'colgate': {
			num: 19,
			name: "Colgate",
			typing: [ 'KINDNESS', 'MAGIC' ],
			race: 'unicorn',
			sex: 'F',
			img: 'Colgate/stand_right.gif',
			stats: {
				hp:  83,
				atk: 60,
				def: 90,
				spa: 60,
				spd: 98,
				spe: 69
			},
			moves: [ 'nightwind', 'hiddentalent', 'sonicbarrier', 'meditation', 'enlighten', 'nap', 'mirrorpond', 'teleportblast', 'dodge', 'freezespell', 'hornbeam', 'crystalshield' ],
			abilities: [ 'ataraxy' ]
		},
		'daringdo': {
			num: 20,
			name: "Daring Do",
			typing: [ 'LIGHT', 'PASSION' ],
			race: 'pegasus',
			sex: 'F',
			img: 'DaringDo/stand_right.gif',
			stats: {
				hp:  90,
				atk: 150,
				def: 106,
				spa: 20,
				spd: 74,
				spe: 60
			},
			moves: [ 'hindkick', 'hopefulstrike', 'rectify', 'hiddentalent', 'mirrorpond', 'dodge', 'speedup', 'rockcrush', 'charge', 'martialarts' ],
			abilities: [ 'bruteforce', 'determination' ]
		},
		'derpyhooves': {
			num: 21,
			name: "Derpy Hooves",
			typing: [ 'GENEROSITY', 'LAUGHTER' ],
			race: 'pegasus',
			sex: 'F',
			img: 'DerpyHooves/stand_right.gif',
			stats: {
				hp:  75,
				atk: 95,
				def: 77,
				spa: 40,
				spd: 115,
				spe: 98
			},
			moves: [ 'hindkick', 'flitabout', 'hiddentalent', 'gethype', 'balefire', 'joke', 'tackle', 'mirrorpond', 'treat', 'glomp', 'snuggle', 'bubbleburst', 'dodge', 'stormcloud', 'speedup', 'skydive' ],
			abilities: [ 'indifference', 'mildness' ]
		},
		'diamondtiara': {
			num: 22,
			name: "Diamond Tiara",
			typing: [ 'LAUGHTER', 'SHADOW' ],
			race: 'earthpony',
			sex: 'F',
			img: 'DiamondTiara/stand_right.gif',
			stats: {
				hp:  60,
				atk: 65,
				def: 80,
				spa: 98,
				spd: 80,
				spe: 67
			},
			moves: [ 'bully', 'hiddentalent', 'meditation', 'mirrorpond', 'scareaway', 'taunt', 'sneakattack', 'dodge', 'whine', 'stealthdiamonds' ],
			abilities: [ 'subjection' ]
		},
		'discord': {
			num: 23,
			name: "Discord",
			typing: [ 'CHAOS' ],
			race: 'mythicbeast',
			sex: 'M',
			img: 'Discord/stand_right.png',
			stats: {
				hp:  125,
				atk: 105,
				def: 130,
				spa: 120,
				spd: 85,
				spe: 85
			},
			moves: [ 'flitabout', 'kineticstrike', 'nightwind', 'hiddentalent', 'mirrorpond', 'dimensiontwist', 'burningpowder', 'surprisehit', 'wreakhavoc', 'dodge', 'joke', 'freezespell', 'chaosburst', 'scorchingbeam', 'rampage' ],
			abilities: [ 'chaosmagic' ]
		},
		'fancypants': {
			num: 24,
			name: "Fancypants",
			typing: [ 'HONESTY', 'NIGHT' ],
			race: 'unicorn',
			sex: 'M',
			img: 'Fancypants/stand_right.gif',
			stats: {
				hp:  80,
				atk: 65,
				def: 88,
				spa: 88,
				spd: 65,
				spe: 80
			},
			moves: [ 'hiddentalent', 'scorchingbeam', 'eeriesonata', 'surprisehit', 'repeat', 'chatter', 'magicshield', 'sonicbarrier', 'mirrorpond', 'dodge' ],
			abilities: [ 'nocturnality' ]
		},
		'fiddlesticks': {
			num: 25,
			name: "Fiddlesticks",
			typing: [ 'HONESTY', 'MUSIC' ],
			race: 'earthpony',
			sex: 'F',
			img: 'Fiddlesticks/stand_right.gif',
			stats: {
				hp:  94,
				atk: 70,
				def: 95,
				spa: 35,
				spd: 80,
				spe: 76
			},
			moves: [ 'tackle', 'hiddentalent', 'sonicbarrier', 'entrench', 'mirrorpond', 'dodge', 'dissonance' ],
			abilities: [ '' ]
		},
		'flam': {
			num: 26,
			name: "Flam",
			typing: [ 'CHAOS', 'LAUGHTER' ],
			race: 'unicorn',
			sex: 'M',
			img: 'Flam/stand_right.gif',
			stats: {
				hp:  98,
				atk: 60,
				def: 75,
				spa: 65,
				spd: 92,
				spe: 75
			},
			moves: [ 'hiddentalent', 'sonicbarrier', 'mirrorpond', 'taunt', 'dodge', 'chatter', 'magicblast', 'applebuck', 'hornbeam', 'freezespell' ],
			abilities: [ '' ]
		},
		'fleetfoot': {
			num: 27,
			name: "Fleetfoot",
			typing: [ 'LOYALTY', 'LOVE' ],
			race: 'pegasus',
			sex: 'F',
			img: 'Fleetfoot/stand_right.gif',
			stats: {
				hp:  80,
				atk: 50,
				def: 40,
				spa: 120,
				spd: 68,
				spe: 142
			},
			moves: [ 'tackle', 'heavymassage', 'hiddentalent', 'trailblazer', 'mirrorpond', 'daredevilry', 'practice', 'hopefulstrike', 'relayrace', 'schemeup', 'dodge', 'speedup', 'stormcloud', 'skydive' ],
			abilities: [ 'selfconfidence', 'lovebird' ]
		},
		'fleurdelis': {
			num: 28,
			name: "Fleur De Lis",
			typing: [ 'GENEROSITY', 'LIGHT' ],
			race: 'unicorn',
			sex: 'F',
			img: 'FleurDeLis/stand_right.gif',
			stats: {
				hp:  70,
				atk: 50,
				def: 85,
				spa: 85,
				spd: 105,
				spe: 70
			},
			moves: [ 'loveburst', 'spatreatment', 'hiddentalent', 'freezespell', 'eeriesonata', 'enlighten', 'mirrorpond', 'snuggle', 'bindup', 'dodge', 'duckface', 'gemstorm' ],
			abilities: [ 'shiningcoat', 'lovebird', 'appeal' ]
		},
		'flim': {
			num: 29,
			name: "Flim",
			typing: [ 'CHAOS', 'PASSION' ],
			race: 'unicorn',
			sex: 'M',
			img: 'Flim/stand_right.gif',
			stats: {
				hp:  75,
				atk: 75,
				def: 60,
				spa: 92,
				spd: 65,
				spe: 98
			},
			moves: [ 'nightwind', 'hiddentalent', 'sonicbarrier', 'mirrorpond', 'ragingspree', 'burningpowder', 'dodge', 'chatter', 'magicblast', 'applebuck', 'scorchingbeam' ],
			abilities: [ 'escapist' ]
		},
		'flufflepuff': {
			num: 30,
			name: "Fluffle Puff",
			typing: [ 'LAUGHTER', 'LOVE' ],
			race: 'earthpony',
			sex: 'F',
			img: 'FlufflePuff/stand_right.gif',
			stats: {
				hp:  150,
				atk: 70,
				def: 125,
				spa: 20,
				spd: 60,
				spe: 50
			},
			moves: [ 'heavymassage', 'hiddentalent', 'entrench', 'nap', 'mirrorpond', 'ragingspree', 'snuggle', 'hopefulstrike', 'bubbleburst', 'dodge', 'tackle', 'furrycoat' ],
			abilities: [ 'magicheal', 'spellrefractory' ]
		},
		'fluttershy': {
			num: 31,
			name: "Fluttershy",
			typing: [ 'KINDNESS' ],
			race: 'pegasus',
			sex: 'F',
			img: 'Fluttershy/stand_right.gif',
			stats: {
				hp:  115,
				atk: 65,
				def: 135,
				spa: 70,
				spd: 105,
				spe: 55
			},
			moves: [ 'tackle', 'heavymassage', 'spatreatment', 'hiddentalent', 'wildweed', 'talkout', 'nap', 'mirrorpond', 'practice', 'glomp', 'relayrace', 'poisonjoke', 'dodge', 'shyaway', 'lullaby', 'loveandcare', 'stare' ],
			abilities: [ 'compassion' ]
		},
		'gilda': {
			num: 32,
			name: "Gilda",
			typing: [ 'SHADOW', 'LOYALTY' ],
			race: 'gryphon',
			sex: 'F',
			img: 'Gilda/stand_right.gif',
			stats: {
				hp:  71,
				atk: 109,
				def: 75,
				spa: 42,
				spd: 94,
				spe: 99
			},
			moves: [ 'hiddentalent', 'mirrorpond', 'crazystunt', 'practice', 'surprisehit', 'sneakattack', 'dodge', 'bully', 'charge', 'skydive', 'rampage', 'shadowmist' ],
			abilities: [ 'subjection', 'aversion' ]
		},
		'grannysmith': {
			num: 33,
			name: "Granny Smith",
			typing: [ 'HONESTY' ],
			race: 'earthpony',
			sex: 'F',
			img: 'GrannySmith/stand_right.gif',
			stats: {
				hp:  100,
				atk: 78,
				def: 87,
				spa: 37,
				spd: 73,
				spe: 25
			},
			moves: [ 'tackle', 'hiddentalent', 'wildweed', 'entrench', 'mirrorpond', 'crazystunt', 'hopefulstrike', 'dodge', 'applebuck', 'loveandcare', 'hindkick', 'venompotion' ],
			abilities: [ '' ]
		},
		'homage': {
			num: 34,
			name: "Homage",
			typing: [ 'HONESTY', 'LOVE' ],
			race: 'unicorn',
			sex: 'F',
			img: 'Homage/stand_right.png',
			stats: {
				hp:  90,
				atk: 69,
				def: 99,
				spa: 86,
				spd: 66,
				spe: 75
			},
			moves: [ 'talkout', 'loveandcare', 'joke', 'glomp', 'freezespell', 'bindup', 'bassdrop', 'heavymassage', 'hiddentalent', 'enlighten', 'mirrorpond', 'hopefulstrike', 'schemeup', 'dodge', 'tackle', 'magicblast', 'telekinesis', 'sharpnails' ],
			abilities: [ 'integrity' ]
		},
		'ironwill': {
			num: 35,
			name: "Iron Will",
			typing: [ 'PASSION', 'HONESTY' ],
			race: 'mythicbeast',
			sex: 'M',
			img: 'IronWill/stand_right.gif',
			stats: {
				hp:  105,
				atk: 160,
				def: 80,
				spa: 40,
				spd: 35,
				spe: 105
			},
			moves: [ 'hiddentalent', 'mirrorpond', 'dodge', 'sharpnails', 'taunt', 'charge', 'hindkick', 'rampage', 'scareaway', 'martialarts', 'bully', 'ragingspree', 'rockcrush', 'hollerout' ],
			abilities: [ 'subjection', 'appeal' ]
		},
		'kingsombra': {
			num: 36,
			name: "King Sombra",
			typing: [ 'SHADOW' ],
			race: 'unicorn',
			sex: 'M',
			img: 'KingSombra/stand_right.gif',
			stats: {
				hp:  81,
				atk: 150,
				def: 79,
				spa: 145,
				spd: 65,
				spe: 100
			},
			moves: [ 'kineticstrike', 'nightwind', 'hiddentalent', 'sonicbarrier', 'stalking', 'mirrorpond', 'powerdisplay', 'scareaway', 'darkmagic', 'surprisehit', 'dodge', 'tackle', 'magicblast', 'freezespell', 'crystalshield', 'shadowmist' ],
			abilities: [ 'subjection', 'spellrefractory' ]
		},
		'lightningdust': {
			num: 37,
			name: "Lightning Dust",
			typing: [ 'PASSION' ],
			race: 'pegasus',
			sex: 'F',
			img: 'LightningDust/stand_right.gif',
			stats: {
				hp:  64,
				atk: 95,
				def: 60,
				spa: 95,
				spd: 60,
				spe: 126
			},
			moves: [ 'tackle', 'nightwind', 'hiddentalent', 'schemeup', 'innerfocus', 'mirrorpond', 'ragingspree', 'daredevilry', 'practice', 'sneakattack', 'dodge', 'speedup', 'charge', 'skydive' ],
			abilities: [ 'stubborn', 'determination' ]
		},
		'limestonepie': {
			num: 38,
			name: "Limestone Pie",
			typing: [ 'SPIRIT', 'NIGHT' ],
			race: 'earthpony',
			sex: 'F',
			img: 'LimestonePie/stand_right.gif',
			stats: {
				hp:  109,
				atk: 81,
				def: 65,
				spa: 40,
				spd: 72,
				spe: 83
			},
			moves: [ 'rockthrow', 'rectify', 'hiddentalent', 'surprisehit', 'stealthdiamonds', 'relax', 'innerfocus', 'gemstorm', 'eeriesonata', 'boulderbomb', 'hopefulstrike', 'mirrorpond', 'practice', 'sneakattack', 'dodge' ],
			abilities: [ 'ataraxy' ]
		},
		'littlepip': {
			num: 39,
			name: "Littlepip",
			typing: [ 'LIGHT', 'KINDNESS' ],
			race: 'unicorn',
			sex: 'F',
			img: 'Littlepip/stand_right.gif',
			stats: {
				hp:  89,
				atk: 85,
				def: 76,
				spa: 90,
				spd: 71,
				spe: 74
			},
			moves: [ 'kineticstrike', 'rectify', 'heavymassage', 'hiddentalent', 'meditation', 'enlighten', 'balefire', 'stalking', 'mirrorpond', 'daredevilry', 'hopefulstrike', 'surprisehit', 'schemeup', 'sneakattack', 'dodge', 'tackle', 'magicblast', 'telekinesis', 'sharpnails', 'bulletshower' ],
			abilities: [ 'leadership', 'diehard', 'toughbody' ]
		},
		'littlestrongheart': {
			num: 40,
			name: "Little Strongheart",
			typing: [ 'SPIRIT', 'PASSION' ],
			race: 'ungulate',
			sex: 'F',
			img: 'LittleStrongheart/stand_right.gif',
			stats: {
				hp:  75,
				atk: 90,
				def: 70,
				spa: 45,
				spd: 65,
				spe: 105
			},
			moves: [ 'tackle', 'hiddentalent', 'whirlinghoof', 'stalking', 'mirrorpond', 'hollerout', 'stampede', 'dodge', 'speedup', 'practice', 'hindkick' ],
			abilities: [ '' ]
		},
		'lotus': {
			num: 41,
			name: "Lotus",
			typing: [ 'GENEROSITY', 'LOVE' ],
			race: 'earthpony',
			sex: 'F',
			img: 'Lotus/stand_right.gif',
			stats: {
				hp:  60,
				atk: 90,
				def: 80,
				spa: 50,
				spd: 150,
				spe: 70
			},
			moves: [ 'heavymassage', 'spatreatment', 'hiddentalent', 'mirrorpond', 'snuggle', 'bindup', 'innerfocus', 'whine', 'loveandcare', 'duckface', 'dodge', 'relax' ],
			abilities: [ 'ataraxy' ]
		},
		'lyra': {
			num: 42,
			name: "Lyra",
			typing: [ 'MUSIC', 'MAGIC' ],
			race: 'unicorn',
			sex: 'F',
			img: 'Lyra/stand_right.gif',
			stats: {
				hp:  100,
				atk: 50,
				def: 85,
				spa: 120,
				spd: 60,
				spe: 85
			},
			moves: [ 'jingle', 'hiddentalent', 'sonicbarrier', 'mirrorpond', 'eeriesonata', 'hollerout', 'dodge', 'dissonance', 'magicblast', 'lullaby', 'freezespell', 'hornbeam', 'overture' ],
			abilities: [ '' ]
		},
		'marblepie': {
			num: 43,
			name: "Marble Pie",
			typing: [ 'KINDNESS', 'HONESTY' ],
			race: 'earthpony',
			sex: 'F',
			img: 'MarblePie/stand_right.gif',
			stats: {
				hp:  90,
				atk: 70,
				def: 100,
				spa: 30,
				spd: 90,
				spe: 70
			},
			moves: [ 'rockthrow', 'heavymassage', 'hiddentalent', 'talkout', 'mirrorpond', 'practice', 'sneakattack', 'dodge' ],
			abilities: [ '' ]
		},
		'maudpie': {
			num: 44,
			name: "Maud Pie",
			typing: [ 'HONESTY' ],
			race: 'earthpony',
			sex: 'F',
			img: 'MaudPie/stand_right.png',
			stats: {
				hp:  90,
				atk: 100,
				def: 80,
				spa: 70,
				spd: 90,
				spe: 20
			},
			moves: [ 'rockthrow', 'drumbang', 'hiddentalent', 'mirrorpond', 'daredevilry', 'relax', 'dodge', 'rockcrush', 'boulderbomb' ],
			abilities: [ 'indifference', 'senseofdanger', 'toughbody' ]
		},
		'milkyway': {
			num: 45,
			name: "Milky Way",
			typing: [ 'GENEROSITY' ],
			race: 'earthpony',
			sex: 'F',
			img: 'MilkyWay/stand_right.gif',
			stats: {
				hp:  100,
				atk: 76,
				def: 100,
				spa: 34,
				spd: 69,
				spe: 96
			},
			moves: [ 'hindkick', 'hiddentalent', 'startle', 'whine', 'tackle', 'stampede', 'snuggle', 'sonicbarrier', 'shyaway', 'rockthrow', 'mirrorpond', 'lullaby', 'loveandcare', 'hopefulstrike', 'glomp', 'dodge', 'stealthdiamonds', 'spatreatment' ],
			abilities: [ 'appeal' ]
		},
		'msharshwhinny': {
			num: 46,
			name: "Ms Harshwhinny",
			typing: [ 'LOYALTY' ],
			race: 'earthpony',
			sex: 'F',
			img: 'MsHarshwhinny/stand_right.gif',
			stats: {
				hp:  100,
				atk: 75,
				def: 70,
				spa: 40,
				spd: 95,
				spe: 40
			},
			moves: [ 'tackle', 'spatreatment', 'hiddentalent', 'whine', 'mirrorpond', 'dodge', 'hindkick', 'taunt' ],
			abilities: [ '' ]
		},
		'neonlights': {
			num: 47,
			name: "Neon Lights",
			typing: [ 'MUSIC', 'NIGHT' ],
			race: 'unicorn',
			sex: 'M',
			img: 'NeonLights/stand_right.gif',
			stats: {
				hp:  65,
				atk: 85,
				def: 53,
				spa: 103,
				spd: 70,
				spe: 89
			},
			moves: [ 'drumbang', 'surprisehit', 'repeat', 'magicblast', 'hindkick', 'glowinglaser', 'crazystunt', 'bubbleburst', 'hiddentalent', 'sonicbarrier', 'gethype', 'mirrorpond', 'hollerout', 'dodge', 'dissonance', 'bassdrop', 'basscannon' ],
			abilities: [ 'nocturnality' ]
		},
		'nightmaremoon': {
			num: 48,
			name: "Nightmare Moon",
			typing: [ 'NIGHT' ],
			race: 'alicorn',
			sex: 'F',
			img: 'NightmareMoon/stand_right.gif',
			stats: {
				hp:  110,
				atk: 90,
				def: 90,
				spa: 145,
				spd: 120,
				spe: 95
			},
			moves: [ 'nightwind', 'hiddentalent', 'mirrorpond', 'scareaway', 'teleportblast', 'darkmagic', 'surprisehit', 'schemeup', 'dodge', 'magicblast', 'shadowmist', 'eternalnight' ],
			abilities: [ 'subjection', 'nocturnality' ]
		},
		'nurseredheart': {
			num: 49,
			name: "Nurse Redheart",
			typing: [ 'KINDNESS', 'GENEROSITY' ],
			race: 'earthpony',
			sex: 'F',
			img: 'NurseRedheart/stand_right.gif',
			stats: {
				hp:  250,
				atk: 55,
				def: 10,
				spa: 10,
				spd: 105,
				spe: 70
			},
			moves: [ 'tackle', 'spatreatment', 'hiddentalent', 'talkout', 'nap', 'mirrorpond', 'snuggle', 'hopefulstrike', 'bindup', 'dodge', 'lullaby', 'loveandcare', 'relax' ],
			abilities: [ 'magicheal' ]
		},
		'octavia': {
			num: 50,
			name: "Octavia",
			typing: [ 'MUSIC' ],
			race: 'earthpony',
			sex: 'F',
			img: 'Octavia/stand_right.gif',
			stats: {
				hp:  120,
				atk: 79,
				def: 80,
				spa: 68,
				spd: 97,
				spe: 56
			},
			moves: [ 'rectify', 'hiddentalent', 'mirrorpond', 'eeriesonata', 'practice', 'dodge', 'dissonance', 'overture' ],
			abilities: [ 'indifference' ]
		},
		'pinkiepie': {
			num: 51,
			name: "Pinkie Pie",
			typing: [ 'LAUGHTER' ],
			race: 'earthpony',
			sex: 'F',
			img: 'PinkiePie/stand_right.gif',
			stats: {
				hp:  80,
				atk: 95,
				def: 55,
				spa: 105,
				spd: 70,
				spe: 140
			},
			moves: [ 'drumbang', 'jingle', 'hiddentalent', 'gethype', 'mirrorpond', 'glomp', 'snuggle', 'startle', 'bubbleburst', 'dodge', 'tackle', 'chatter', 'partycannon', 'duckface' ],
			abilities: [ 'optimism' ]
		},
		'pipsqueak': {
			num: 52,
			name: "Pipsqueak",
			typing: [ 'NIGHT', 'GENEROSITY' ],
			race: 'earthpony',
			sex: 'M',
			img: 'Pipsqueak/stand_right.gif',
			stats: {
				hp:  60,
				atk: 70,
				def: 75,
				spa: 20,
				spd: 70,
				spe: 90
			},
			moves: [ 'whirlinghoof', 'hiddentalent', 'wildweed', 'entrench', 'nap', 'mirrorpond', 'scareaway', 'burningpowder', 'relayrace', 'surprisehit', 'taunt', 'poisonjoke', 'dodge', 'joke', 'charge' ],
			abilities: [ 'stubborn', 'upperhoof' ]
		},
		'princesscadance': {
			num: 53,
			name: "Princess Cadance",
			typing: [ 'LOVE' ],
			race: 'alicorn',
			sex: 'F',
			img: 'PrincessCadance/stand_right.gif',
			stats: {
				hp:  130,
				atk: 55,
				def: 145,
				spa: 80,
				spd: 125,
				spe: 65
			},
			moves: [ 'spatreatment', 'hiddentalent', 'enlighten', 'mirrorpond', 'snuggle', 'hopefulstrike', 'relax', 'dodge', 'magicblast', 'magicshield', 'freezespell', 'gemstorm', 'canterlotvoice', 'crystalshield', 'loveburst' ],
			abilities: [ 'magicheal', 'optimism' ]
		},
		'princesscelestia': {
			num: 54,
			name: "Princess Celestia",
			typing: [ 'MAGIC', 'LIGHT' ],
			race: 'alicorn',
			sex: 'F',
			img: 'PrincessCelestia/stand_right.gif',
			stats: {
				hp:  120,
				atk: 120,
				def: 120,
				spa: 120,
				spd: 120,
				spe: 120
			},
			moves: [ 'rectify', 'spatreatment', 'hiddentalent', 'sonicbarrier', 'enlighten', 'mirrorpond', 'teleportblast', 'darkmagic', 'dodge', 'magicblast', 'hornbeam', 'friendshipcannon', 'raisesun', 'glowinglaser' ],
			abilities: [ 'solarmagic' ]
		},
		'princesserroria': {
			num: 55,
			name: "Princess Erroria",
			typing: [ 'LOVE', 'CHAOS' ],
			race: 'alicorn',
			sex: 'F',
			img: 'PrincessErroria/stand_right.gif',
			stats: {
				hp:  90,
				atk: 65,
				def: 65,
				spa: 40,
				spd: 40,
				spe: 15
			},
			moves: [ 'flitabout', 'hiddentalent', 'trailblazer', 'stare', 'sonicrainboom', 'raisesun', 'partycannon', 'evilplot', 'mutate', 'loveburst', 'joke', 'gemstorm', 'furrycoat', 'eternalnight', 'bulletshower', 'bizaam', 'bassdrop', 'basscannon', 'balefire', 'venompotion', 'lullaby', 'freezespell', 'chatter', 'burningpowder' ],
			abilities: [ '' ]
		},
		'princessluna': {
			num: 56,
			name: "Princess Luna",
			typing: [ 'MAGIC', 'NIGHT' ],
			race: 'alicorn',
			sex: 'F',
			img: 'PrincessLuna/stand_right.gif',
			stats: {
				hp:  65,
				atk: 66,
				def: 99,
				spa: 150,
				spd: 145,
				spe: 125
			},
			moves: [ 'nightwind', 'rectify', 'hiddentalent', 'sonicbarrier', 'stalking', 'mirrorpond', 'powerdisplay', 'scareaway', 'hollerout', 'darkmagic', 'dodge', 'tackle', 'magicblast', 'magicshield', 'canterlotvoice', 'friendshipcannon', 'eternalnight' ],
			abilities: [ 'subjection', 'nocturnality' ]
		},
		'rainbowdash': {
			num: 57,
			name: "Rainbow Dash",
			typing: [ 'LOYALTY' ],
			race: 'pegasus',
			sex: 'F',
			img: 'RainbowDash/stand_right.gif',
			stats: {
				hp:  82,
				atk: 130,
				def: 78,
				spa: 50,
				spd: 60,
				spe: 145
			},
			moves: [ 'tackle', 'nightwind', 'hiddentalent', 'nap', 'mirrorpond', 'crazystunt', 'hollerout', 'practice', 'relayrace', 'taunt', 'sneakattack', 'dodge', 'speedup', 'duckface', 'skydive', 'sonicrainboom', 'stormcloud' ],
			abilities: [ 'devotion', 'determination' ]
		},
		'rarity': {
			num: 58,
			name: "Rarity",
			typing: [ 'GENEROSITY' ],
			race: 'unicorn',
			sex: 'F',
			img: 'Rarity/stand_right.gif',
			stats: {
				hp:  90,
				atk: 60,
				def: 85,
				spa: 100,
				spd: 135,
				spe: 75
			},
			moves: [ 'tackle', 'nightwind', 'spatreatment', 'hiddentalent', 'talkout', 'enlighten', 'mirrorpond', 'snuggle', 'bindup', 'dodge', 'duckface', 'stealthdiamonds', 'relax', 'gemstorm', 'martialarts' ],
			abilities: [ 'mastery', 'charity', 'shiningcoat' ]
		},
		'roxie': {
			num: 59,
			name: "Roxie",
			typing: [ 'LOVE', 'SPIRIT' ],
			race: 'earthpony',
			sex: 'F',
			img: 'Roxie/stand_right.png',
			stats: {
				hp:  60,
				atk: 115,
				def: 50,
				spa: 70,
				spd: 65,
				spe: 108
			},
			moves: [ 'heavymassage', 'hiddentalent', 'talkout', 'mirrorpond', 'snuggle', 'chatter', 'dodge', 'relax', 'tackle', 'sneakattack', 'ragingspree', 'glomp' ],
			abilities: [ 'appeal' ]
		},
		'scootaloo': {
			num: 60,
			name: "Scootaloo",
			typing: [ 'PASSION' ],
			race: 'pegasus',
			sex: 'F',
			img: 'Scootaloo/stand_right.gif',
			stats: {
				hp:  70,
				atk: 110,
				def: 65,
				spa: 50,
				spd: 60,
				spe: 130
			},
			moves: [ 'tackle', 'drumbang', 'hiddentalent', 'stalking', 'mirrorpond', 'ragingspree', 'crazystunt', 'hollerout', 'practice', 'relayrace', 'dodge', 'speedup', 'duckface' ],
			abilities: [ '' ]
		},
		'screwball': {
			num: 61,
			name: "Screwball",
			typing: [ 'CHAOS' ],
			race: 'earthpony',
			sex: 'F',
			img: 'Screwball/stand_right.gif',
			stats: {
				hp:  60,
				atk: 60,
				def: 60,
				spa: 90,
				spd: 90,
				spe: 90
			},
			moves: [ 'hiddentalent', 'sonicbarrier', 'entrench', 'mirrorpond', 'dimensiontwist', 'stampede', 'wreakhavoc', 'dodge', 'joke', 'chaosburst' ],
			abilities: [ 'escapist' ]
		},
		'screwloose': {
			num: 62,
			name: "Screw Loose",
			typing: [ 'CHAOS' ],
			race: 'earthpony',
			sex: 'F',
			img: 'ScrewLoose/stand_right.gif',
			stats: {
				hp:  90,
				atk: 90,
				def: 90,
				spa: 60,
				spd: 60,
				spe: 60
			},
			moves: [ 'hiddentalent', 'gethype', 'mirrorpond', 'hollerout', 'surprisehit', 'wreakhavoc', 'dodge', 'joke', 'chaosburst' ],
			abilities: [ 'spellrefractory' ]
		},
		'seabreeze': {
			num: 63,
			name: "Sea Breeze",
			typing: [ 'LOYALTY', 'LIGHT' ],
			race: 'breezie',
			sex: 'M',
			img: 'SeaBreeze/stand_right.gif',
			stats: {
				hp:  35,
				atk: 75,
				def: 35,
				spa: 95,
				spd: 35,
				spe: 125
			},
			moves: [ 'tackle', 'flitabout', 'sonicbarrier', 'dissonance', 'ragingspree', 'hiddentalent', 'mirrorpond', 'practice', 'taunt', 'sneakattack', 'dodge', 'speedup' ],
			abilities: [ 'stubborn', 'devotion', 'swiftness' ]
		},
		'shiningarmor': {
			num: 64,
			name: "Shining Armor",
			typing: [ 'LOVE', 'LOYALTY' ],
			race: 'unicorn',
			sex: 'M',
			img: 'ShiningArmor/stand_right.gif',
			stats: {
				hp:  75,
				atk: 65,
				def: 125,
				spa: 90,
				spd: 130,
				spe: 40
			},
			moves: [ 'rectify', 'hiddentalent', 'mirrorpond', 'teleportblast', 'hopefulstrike', 'dodge', 'tackle', 'magicshield', 'hornbeam', 'loveburst' ],
			abilities: [ '' ]
		},
		'silverspoon': {
			num: 65,
			name: "Silver Spoon",
			typing: [ 'LOVE', 'SHADOW' ],
			race: 'earthpony',
			sex: 'F',
			img: 'SilverSpoon/stand_right.gif',
			stats: {
				hp:  90,
				atk: 50,
				def: 75,
				spa: 45,
				spd: 95,
				spe: 65
			},
			moves: [ 'bully', 'hiddentalent', 'sonicbarrier', 'entrench', 'mirrorpond', 'hopefulstrike', 'taunt', 'poisonjoke', 'dodge', 'chatter', 'loveandcare' ],
			abilities: [ 'lovebird' ]
		},
		'snails': {
			num: 66,
			name: "Snails",
			typing: [ 'LOYALTY', 'SPIRIT' ],
			race: 'unicorn',
			sex: 'M',
			img: 'Snails/stand_right.gif',
			stats: {
				hp:  64,
				atk: 39,
				def: 119,
				spa: 77,
				spd: 68,
				spe: 33
			},
			moves: [ 'nap', 'mustache', 'hiddentalent', 'mirrorpond', 'dodge', 'repeat', 'tackle' ],
			abilities: [ '' ]
		},
		'soarin': {
			num: 67,
			name: "Soarin",
			typing: [ 'LOYALTY' ],
			race: 'pegasus',
			sex: 'M',
			img: 'Soarin/stand_right.gif',
			stats: {
				hp:  68,
				atk: 88,
				def: 85,
				spa: 60,
				spd: 76,
				spe: 123
			},
			moves: [ 'tackle', 'hiddentalent', 'trailblazer', 'mirrorpond', 'crazystunt', 'practice', 'dodge', 'speedup', 'charge', 'skydive' ],
			abilities: [ '' ]
		},
		'spike': {
			num: 68,
			name: "Spike",
			typing: [ 'LOYALTY', 'MAGIC' ],
			race: 'mythicbeast',
			sex: 'M',
			img: 'Spike/stand_right.gif',
			stats: {
				hp:  70,
				atk: 65,
				def: 80,
				spa: 70,
				spd: 75,
				spe: 60
			},
			moves: [ 'drumbang', 'mustache', 'hiddentalent', 'wildweed', 'sonicbarrier', 'entrench', 'nap', 'stalking', 'mirrorpond', 'taunt', 'bubbleburst', 'dodge', 'tackle', 'sharpnails', 'loveandcare' ],
			abilities: [ 'dragonscales', 'mildness', 'pestresilience' ]
		},
		'spitfire': {
			num: 69,
			name: "Spitfire",
			typing: [ 'PASSION', 'LOYALTY' ],
			race: 'pegasus',
			sex: 'F',
			img: 'Spitfire/stand_right.gif',
			stats: {
				hp:  75,
				atk: 125,
				def: 65,
				spa: 40,
				spd: 85,
				spe: 135
			},
			moves: [ 'tackle', 'nightwind', 'hiddentalent', 'trailblazer', 'mirrorpond', 'crazystunt', 'practice', 'dodge', 'speedup', 'charge', 'skydive' ],
			abilities: [ 'devotion' ]
		},
		'starswirl': {
			num: 70,
			name: "Starswirl",
			typing: [ 'MAGIC' ],
			race: 'unicorn',
			sex: 'M',
			img: 'Starswirl/stand_right.png',
			stats: {
				hp:  100,
				atk: 100,
				def: 100,
				spa: 100,
				spd: 100,
				spe: 100
			},
			moves: [ 'rectify', 'hiddentalent', 'wildweed', 'nap', 'surprisehit', 'stealthdiamonds', 'stormcloud', 'wreakhavoc', 'talkout', 'repeat', 'powerdisplay', 'magicshield', 'lullaby', 'dimensiontwist', 'bindup', 'sonicbarrier', 'meditation', 'enlighten', 'balefire', 'mirrorpond', 'teleportblast', 'darkmagic', 'schemeup', 'dodge', 'magicblast', 'hornbeam', 'freezespell', 'scorchingbeam', 'glowinglaser' ],
			abilities: [ 'selfconfidence' ]
		},
		'sunsetshimmer': {
			num: 71,
			name: "Sunset Shimmer",
			typing: [ 'LIGHT', 'SHADOW' ],
			race: 'unicorn',
			sex: 'F',
			img: 'SunsetShimmer/stand_right.gif',
			stats: {
				hp:  75,
				atk: 60,
				def: 60,
				spa: 120,
				spd: 55,
				spe: 80
			},
			moves: [ 'magicblast', 'darkmagic', 'charge', 'nightwind', 'hiddentalent', 'mirrorpond', 'teleportblast', 'dodge', 'scorchingbeam', 'glowinglaser' ],
			abilities: [ 'shiningcoat', 'aversion' ]
		},
		'surprise': {
			num: 72,
			name: "Surprise",
			typing: [ 'LOYALTY', 'LAUGHTER' ],
			race: 'pegasus',
			sex: 'F',
			img: 'Surprise/stand_right.gif',
			stats: {
				hp:  90,
				atk: 78,
				def: 44,
				spa: 78,
				spd: 49,
				spe: 131
			},
			moves: [ 'tackle', 'snuggle', 'relayrace', 'hollerout', 'gethype', 'chatter', 'bubbleburst', 'hiddentalent', 'trailblazer', 'mirrorpond', 'practice', 'dodge', 'speedup', 'skydive' ],
			abilities: [ '' ]
		},
		'sweetiebelle': {
			num: 73,
			name: "Sweetie Belle",
			typing: [ 'GENEROSITY', 'MUSIC' ],
			race: 'unicorn',
			sex: 'F',
			img: 'SweetieBelle/stand_right.gif',
			stats: {
				hp:  100,
				atk: 62,
				def: 94,
				spa: 74,
				spd: 55,
				spe: 100
			},
			moves: [ 'dissonance', 'jingle', 'lullaby', 'hiddentalent', 'gethype', 'nap', 'mirrorpond', 'treat', 'snuggle', 'burningpowder', 'relayrace', 'schemeup', 'bindup', 'dodge', 'duckface', 'stealthdiamonds' ],
			abilities: [ '' ]
		},
		'tirek': {
			num: 74,
			name: "Tirek",
			typing: [ 'SHADOW', 'MAGIC' ],
			race: 'mythicbeast',
			sex: 'M',
			img: 'Tirek/stand_right.png',
			stats: {
				hp:  90,
				atk: 60,
				def: 80,
				spa: 70,
				spd: 80,
				spe: 85
			},
			moves: [ 'hiddentalent', 'mirrorpond', 'powerdisplay', 'daredevilry', 'darkmagic', 'surprisehit', 'schemeup', 'dodge', 'magicblast', 'freezespell', 'telekinesis', 'shadowmist' ],
			abilities: [ 'magicdrain' ]
		},
		'tracy': {
			num: 75,
			name: "Tracy",
			typing: [ 'SHADOW' ],
			race: 'earthpony',
			sex: 'F',
			img: 'Tracy/stand_right.png',
			stats: {
				hp:  60,
				atk: 95,
				def: 80,
				spa: 95,
				spd: 50,
				spe: 70
			},
			moves: [ 'hiddentalent', 'ragingspree', 'stalking', 'sharpnails', 'schemeup', 'scareaway', 'powerdisplay', 'mirrorpond', 'dissonance', 'chaosburst', 'bully' ],
			abilities: [ 'aversion' ]
		},
		'trenderhoof': {
			num: 76,
			name: "Trenderhoof",
			typing: [ 'KINDNESS' ],
			race: 'unicorn',
			sex: 'M',
			img: 'Trenderhoof/stand_right.png',
			stats: {
				hp:  120,
				atk: 65,
				def: 40,
				spa: 95,
				spd: 40,
				spe: 60
			},
			moves: [ 'hiddentalent', 'nap', 'stalking', 'hopefulstrike', 'mirrorpond', 'dodge', 'chatter' ],
			abilities: [ '' ]
		},
		'trixie': {
			num: 77,
			name: "Trixie",
			typing: [ 'MAGIC', 'PASSION' ],
			race: 'unicorn',
			sex: 'F',
			img: 'Trixie/stand_right.gif',
			stats: {
				hp:  90,
				atk: 40,
				def: 77,
				spa: 100,
				spd: 95,
				spe: 68
			},
			moves: [ 'hiddentalent', 'balefire', 'mirrorpond', 'teleportblast', 'hopefulstrike', 'taunt', 'dodge', 'tackle', 'magicblast', 'hornbeam', 'freezespell', 'scorchingbeam' ],
			abilities: [ 'boasting' ]
		},
		'twilightsparkle': {
			num: 78,
			name: "Twilight Sparkle",
			typing: [ 'MAGIC' ],
			race: 'unicorn',
			sex: 'F',
			img: 'TwilightSparkle/stand_right.gif',
			stats: {
				hp:  88,
				atk: 55,
				def: 71,
				spa: 140,
				spd: 127,
				spe: 64
			},
			moves: [ 'nightwind', 'rectify', 'hiddentalent', 'sonicbarrier', 'meditation', 'enlighten', 'balefire', 'mirrorpond', 'teleportblast', 'darkmagic', 'schemeup', 'dodge', 'tackle', 'magicblast', 'hornbeam', 'freezespell', 'scorchingbeam', 'friendshipcannon' ],
			abilities: [ 'leadership' ]
		},
		'vinylscratch': {
			num: 79,
			name: "Vinyl Scratch",
			typing: [ 'MUSIC', 'CHAOS' ],
			race: 'unicorn',
			sex: 'F',
			img: 'VinylScratch/stand_right.gif',
			stats: {
				hp:  95,
				atk: 45,
				def: 96,
				spa: 125,
				spd: 69,
				spe: 70
			},
			moves: [ 'nightwind', 'startle', 'snuggle', 'nap', 'hiddentalent', 'sonicbarrier', 'gethype', 'mirrorpond', 'ragingspree', 'hollerout', 'dodge', 'dissonance', 'bassdrop', 'basscannon' ],
			abilities: [ '' ]
		},
		'wildfire': {
			num: 80,
			name: "Wildfire",
			typing: [ 'HONESTY', 'PASSION' ],
			race: 'pegasus',
			sex: 'F',
			img: 'Wildfire/stand_right.gif',
			stats: {
				hp:  105,
				atk: 95,
				def: 105,
				spa: 60,
				spd: 50,
				spe: 65
			},
			moves: [ 'tackle', 'hiddentalent', 'mirrorpond', 'daredevilry', 'treat', 'hopefulstrike', 'stampede', 'sneakattack', 'dodge', 'hindkick', 'skydive', 'rockcrush', 'innerfocus' ],
			abilities: [ 'determination' ]
		},
		'xenith': {
			num: 81,
			name: "Xenith",
			typing: [ 'SPIRIT', 'SHADOW' ],
			race: 'zebra',
			sex: 'F',
			img: 'Xenith/stand_right.png',
			stats: {
				hp:  75,
				atk: 115,
				def: 72,
				spa: 46,
				spd: 69,
				spe: 123
			},
			moves: [ 'hiddentalent', 'balefire', 'stalking', 'mirrorpond', 'powerdisplay', 'scareaway', 'daredevilry', 'surprisehit', 'sneakattack', 'dodge', 'tackle', 'mysteriousbrew', 'martialarts', 'venompotion' ],
			abilities: [ 'bruteforce', 'diehard', 'pestresilience' ]
		},
		'zecora': {
			num: 82,
			name: "Zecora",
			typing: [ 'SPIRIT' ],
			race: 'zebra',
			sex: 'F',
			img: 'Zecora/stand_right.gif',
			stats: {
				hp:  80,
				atk: 95,
				def: 80,
				spa: 70,
				spd: 100,
				spe: 75
			},
			moves: [ 'drumbang', 'spatreatment', 'hiddentalent', 'wildweed', 'balefire', 'nap', 'mirrorpond', 'practice', 'burningpowder', 'poisonjoke', 'sneakattack', 'dodge', 'tackle', 'mysteriousbrew', 'martialarts', 'hindkick', 'venompotion' ],
			abilities: [ 'ataraxy', 'spellrefractory' ]
		}
	},
	moves: {
		'applebuck': {
			name: "Applebuck",
			type: 'HONESTY',
			movetype: 'PHYSICAL',
			pp: 25,
			damage: 70,
			accuracy: 100,
			prority: 0,
			description: "Inflicts regular damage."
		},
		'balefire': {
			name: "Balefire",
			type: 'SPIRIT',
			movetype: 'SPECIAL',
			pp: 5,
			damage: 250,
			accuracy: 100,
			prority: 0,
			description: "The user faints."
		},
		'basscannon': {
			name: "Bass Cannon",
			type: 'MUSIC',
			movetype: 'SPECIAL',
			pp: 5,
			damage: 120,
			accuracy: 100,
			prority: 0,
			description: "30% to confuse the user.<br>Ignore weakness and resistance."
		},
		'bassdrop': {
			name: "Bass Drop",
			type: 'CHAOS',
			movetype: 'SPECIAL',
			pp: 15,
			damage: 90,
			accuracy: 95,
			prority: 0,
			description: "20% to confuse the target."
		},
		'bindup': {
			name: "Bind Up",
			type: 'GENEROSITY',
			movetype: 'PHYSICAL',
			pp: 20,
			damage: 50,
			accuracy: 100,
			prority: 0,
			description: "Lowers enemy Spe by 1."
		},
		'bizaam': {
			name: "Bizaam",
			type: 'PASSION',
			movetype: 'SPECIAL',
			pp: 12,
			damage: 20,
			accuracy: 100,
			prority: 0,
			description: "+20/-20 for each positive/negative modifier (min. 20).<br>+10% to confuse for each 40 extra damage."
		},
		'boulderbomb': {
			name: "Boulder Bomb",
			type: 'HONESTY',
			movetype: 'PHYSICAL',
			pp: 5,
			damage: 120,
			accuracy: 50,
			prority: 0,
			description: "100% to paralyze the user."
		},
		'bubbleburst': {
			name: "Bubble Burst",
			type: 'LAUGHTER',
			movetype: 'SPECIAL',
			pp: 25,
			damage: 80,
			accuracy: 100,
			prority: 0,
			description: "20% to increase SpA by 1."
		},
		'bulletshower': {
			name: "Bullet Shower",
			type: 'SHADOW',
			movetype: 'SPECIAL',
			pp: 10,
			damage: 20,
			accuracy: 95,
			prority: 0,
			description: "Hits 2 to 5 times in a row.<br>High critical ratio."
		},
		'bully': {
			name: "Bully",
			type: 'SHADOW',
			movetype: 'PHYSICAL',
			pp: 25,
			damage: 0,
			accuracy: 100,
			prority: 0,
			description: "Inficts more damage if the user's<br>happiness is low."
		},
		'burningpowder': {
			name: "Burning Powder",
			type: 'LIGHT',
			movetype: 'STATUS',
			pp: 24,
			damage: 0,
			accuracy: 85,
			prority: 0,
			description: "Burns the target."
		},
		'canterlotvoice': {
			name: "Canterlot Voice",
			type: 'PASSION',
			movetype: 'SPECIAL',
			pp: 20,
			damage: 75,
			accuracy: 95,
			prority: 0,
			description: ""
		},
		'chaosburst': {
			name: "Chaos Burst",
			type: 'CHAOS',
			movetype: 'STATUS',
			pp: 15,
			damage: 0,
			accuracy: 80,
			prority: 0,
			description: "Uses a random damaging move from<br>a random member of the team."
		},
		'charge': {
			name: "Charge",
			type: 'HONESTY',
			movetype: 'PHYSICAL',
			pp: 15,
			damage: 80,
			accuracy: 95,
			prority: 0,
			description: "20% to flinch the target."
		},
		'chatter': {
			name: "Chatter",
			type: 'LAUGHTER',
			movetype: 'STATUS',
			pp: 25,
			damage: 0,
			accuracy: 75,
			prority: 0,
			description: "Confuses target."
		},
		'crazystunt': {
			name: "Crazy Stunt",
			type: 'PASSION',
			movetype: 'PHYSICAL',
			pp: 20,
			damage: 130,
			accuracy: 85,
			prority: 0,
			description: "If hit isn't successful, user loses 50% of its HP."
		},
		'crystalshield': {
			name: "Crystal Shield",
			type: 'LOVE',
			movetype: 'STATUS',
			pp: 15,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Raises Def by 2. 30% to heal status."
		},
		'daredevilry': {
			name: "Daredevilry",
			type: 'SPIRIT',
			movetype: 'PHYSICAL',
			pp: 15,
			damage: 120,
			accuracy: 100,
			prority: 0,
			description: "Lowers user Def and SpD by 1."
		},
		'darkmagic': {
			name: "Dark Magic",
			type: 'SHADOW',
			movetype: 'SPECIAL',
			pp: 20,
			damage: 85,
			accuracy: 95,
			prority: 0,
			description: "30% to paralyze target."
		},
		'dimensiontwist': {
			name: "Dimension Twist",
			type: 'CHAOS',
			movetype: 'PHYSICAL',
			pp: 10,
			damage: 120,
			accuracy: 100,
			prority: 0,
			description: "Switch out to random ally after hit."
		},
		'dissonance': {
			name: "Dissonance",
			type: 'MUSIC',
			movetype: 'SPECIAL',
			pp: 35,
			damage: 50,
			accuracy: 100,
			prority: 0,
			description: "Inflicts regular damage."
		},
		'dodge': {
			name: "Dodge",
			type: 'KINDNESS',
			movetype: 'STATUS',
			pp: 16,
			damage: 0,
			accuracy: -1,
			prority: 4,
			description: "Protects from moves. Priority +4"
		},
		'drumbang': {
			name: "Drum Bang",
			type: 'MUSIC',
			movetype: 'PHYSICAL',
			pp: 12,
			damage: 60,
			accuracy: 100,
			prority: 0,
			description: "50% to hit twice."
		},
		'duckface': {
			name: "Duck Face",
			type: 'GENEROSITY',
			movetype: 'STATUS',
			pp: 35,
			damage: 0,
			accuracy: 100,
			prority: 0,
			description: "Lowers target Def by 2."
		},
		'eeriesonata': {
			name: "Eerie Sonata",
			type: 'MUSIC',
			movetype: 'SPECIAL',
			pp: 20,
			damage: 70,
			accuracy: 100,
			prority: 0,
			description: "10% to petrify the target."
		},
		'enlighten': {
			name: "Enlighten",
			type: 'LIGHT',
			movetype: 'SPECIAL',
			pp: 32,
			damage: 80,
			accuracy: -1,
			prority: 0,
			description: "No secondary effect."
		},
		'entrench': {
			name: "Entrench",
			type: 'HONESTY',
			movetype: 'STATUS',
			pp: 32,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Halves incoming physical<br>damage for 5 turns."
		},
		'eternalnight': {
			name: "Eternal Night",
			type: 'NIGHT',
			movetype: 'STATUS',
			pp: 10,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Spawns Dark weather for 5 turns."
		},
		'evilplot': {
			name: "Evil Plot",
			type: 'SHADOW',
			movetype: 'PHYSICAL',
			pp: 10,
			damage: 100,
			accuracy: 90,
			prority: 0,
			description: "20% to raise user Evasion by 1."
		},
		'flitabout': {
			name: "Flit About",
			type: 'CHAOS',
			movetype: 'STATUS',
			pp: 24,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Raises user Evasion by 1."
		},
		'freezespell': {
			name: "Freeze Spell",
			type: 'MAGIC',
			movetype: 'STATUS',
			pp: 20,
			damage: 0,
			accuracy: 100,
			prority: 0,
			description: "Paralyzes target."
		},
		'friendshipcannon': {
			name: "Friendship Cannon",
			type: 'MAGIC',
			movetype: 'SPECIAL',
			pp: 5,
			damage: 0,
			accuracy: 0,
			prority: 0,
			description: "Can One-Hit-KO the target."
		},
		'furrycoat': {
			name: "Furry Coat",
			type: 'LAUGHTER',
			movetype: 'STATUS',
			pp: 15,
			damage: 0,
			accuracy: -1,
			prority: 1,
			description: "Raises Def and SpD by 1. Priority +1."
		},
		'gemstorm': {
			name: "Gem Storm",
			type: 'GENEROSITY',
			movetype: 'SPECIAL',
			pp: 5,
			damage: 25,
			accuracy: 100,
			prority: 0,
			description: "Hits 2 to 5 times in a row."
		},
		'gethype': {
			name: "Get Hype",
			type: 'LAUGHTER',
			movetype: 'STATUS',
			pp: 15,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Raises Atk and SpA by 1."
		},
		'glomp': {
			name: "Glomp",
			type: 'LOVE',
			movetype: 'PHYSICAL',
			pp: 15,
			damage: 85,
			accuracy: 100,
			prority: 0,
			description: "30% to paralyze the target"
		},
		'glowinglaser': {
			name: "Glowing Laser",
			type: 'LIGHT',
			movetype: 'SPECIAL',
			pp: 20,
			damage: 90,
			accuracy: 95,
			prority: 0,
			description: "10% to lower target SpD."
		},
		'heavymassage': {
			name: "Heavy Massage",
			type: 'KINDNESS',
			movetype: 'PHYSICAL',
			pp: 25,
			damage: 70,
			accuracy: 100,
			prority: 0,
			description: "Power doubles if enemy is statused.<br>Enemy heals from status."
		},
		'hiddentalent': {
			name: "Hidden Talent",
			type: 'HONESTY',
			movetype: 'SPECIAL',
			pp: 15,
			damage: 60,
			accuracy: 100,
			prority: 0,
			description: "Its type depends on the user's IV."
		},
		'hindkick': {
			name: "Hind Kick",
			type: 'SPIRIT',
			movetype: 'PHYSICAL',
			pp: 15,
			damage: 80,
			accuracy: 95,
			prority: 0,
			description: "30% to lower enemy Def by 1."
		},
		'hollerout': {
			name: "Holler Out",
			type: 'PASSION',
			movetype: 'SPECIAL',
			pp: 16,
			damage: 85,
			accuracy: 95,
			prority: 0,
			description: "10% to confuse the target."
		},
		'hopefulstrike': {
			name: "Hopeful Strike",
			type: 'LOVE',
			movetype: 'PHYSICAL',
			pp: 15,
			damage: 75,
			accuracy: 100,
			prority: 0,
			description: "10% to lower target Atk."
		},
		'hornbeam': {
			name: "Horn Beam",
			type: 'MAGIC',
			movetype: 'SPECIAL',
			pp: 20,
			damage: 75,
			accuracy: 90,
			prority: 0,
			description: "10% to confuse the target."
		},
		'innerfocus': {
			name: "Inner Focus",
			type: 'SPIRIT',
			movetype: 'STATUS',
			pp: 20,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Raises Atk by 2."
		},
		'jingle': {
			name: "Jingle",
			type: 'MUSIC',
			movetype: 'SPECIAL',
			pp: 25,
			damage: 70,
			accuracy: 100,
			prority: 0,
			description: "10% to lower target's SpD by 1."
		},
		'joke': {
			name: "Joke",
			type: 'CHAOS',
			movetype: 'PHYSICAL',
			pp: 25,
			damage: 50,
			accuracy: 100,
			prority: 0,
			description: "Swaps weakness and resistance<br>for damage calculation."
		},
		'kineticstrike': {
			name: "Kinetic Strike",
			type: 'MAGIC',
			movetype: 'SPECIAL',
			pp: 10,
			damage: 110,
			accuracy: 80,
			prority: 0,
			description: "15% to flinch target."
		},
		'loveandcare': {
			name: "Love And Care",
			type: 'KINDNESS',
			movetype: 'STATUS',
			pp: 16,
			damage: 0,
			accuracy: 100,
			prority: 0,
			description: "Heals the active pony at the<br>end of the next turn."
		},
		'loveburst': {
			name: "Love Burst",
			type: 'LOVE',
			movetype: 'SPECIAL',
			pp: 5,
			damage: 140,
			accuracy: 100,
			prority: 0,
			description: "Ignores target resistance.<br>1 turn to charge up."
		},
		'lullaby': {
			name: "Lullaby",
			type: 'MUSIC',
			movetype: 'STATUS',
			pp: 10,
			damage: 0,
			accuracy: 70,
			prority: 0,
			description: "Sets the target Asleep."
		},
		'magicblast': {
			name: "Magic Blast",
			type: 'MAGIC',
			movetype: 'SPECIAL',
			pp: 25,
			damage: 60,
			accuracy: 100,
			prority: 0,
			description: "Inflicts regular damage."
		},
		'magicshield': {
			name: "Magic Shield",
			type: 'MAGIC',
			movetype: 'STATUS',
			pp: 20,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Raises Def and SpD by 1,<br>but lowers Spe by 1."
		},
		'martialarts': {
			name: "Martial Arts",
			type: 'SPIRIT',
			movetype: 'PHYSICAL',
			pp: 15,
			damage: 90,
			accuracy: 100,
			prority: 0,
			description: "10% to flinch the target."
		},
		'meditation': {
			name: "Meditation",
			type: 'SPIRIT',
			movetype: 'STATUS',
			pp: 15,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Raises SpA and SpD by 1."
		},
		'mirrorpond': {
			name: "Mirror Pond",
			type: 'LAUGHTER',
			movetype: 'STATUS',
			pp: 16,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Spend 1/4 HP to create a<br>dummy target for the enemy."
		},
		'': {
			name: "",
			type: '',
			movetype: '',
			pp: 0,
			damage: 0,
			accuracy: 0,
			prority: 0,
			description: ""
		},
		'mustache': {
			name: "Mustache",
			type: 'LOVE',
			movetype: 'SPECIAL',
			pp: 20,
			damage: 60,
			accuracy: 95,
			prority: 0,
			description: "If opponent is female, deals +50%<br>and has 20% to lower a random stat."
		},
		'mutate': {
			name: "Mutate",
			type: 'SHADOW',
			movetype: 'STATUS',
			pp: 15,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: ""
		},
		'mysteriousbrew': {
			name: "Mysterious Brew",
			type: 'SPIRIT',
			movetype: 'STATUS',
			pp: 15,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Raises Atk and SpD by 1."
		},
		'nap': {
			name: "Nap",
			type: 'NIGHT',
			movetype: 'STATUS',
			pp: 10,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "User sleeps 2 turns to refill HP and cure status."
		},
		'nightwind': {
			name: "Night Wind",
			type: 'NIGHT',
			movetype: 'SPECIAL',
			pp: 20,
			damage: 80,
			accuracy: 95,
			prority: 0,
			description: "20% to lower target SpD."
		},
		'overture': {
			name: "Overture",
			type: 'MUSIC',
			movetype: 'SPECIAL',
			pp: 15,
			damage: 90,
			accuracy: 100,
			prority: 0,
			description: "10% to petrify the target."
		},
		'partycannon': {
			name: "Party Cannon",
			type: 'LAUGHTER',
			movetype: 'SPECIAL',
			pp: 10,
			damage: 90,
			accuracy: 100,
			prority: 0,
			description: "30% to confuse the target."
		},
		'poisonjoke': {
			name: "Poison Joke",
			type: 'SPIRIT',
			movetype: 'STATUS',
			pp: 10,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Enemies are poisoned on switch-in.<br>Flying races are immune.<br>Up to 2 layers."
		},
		'powerdisplay': {
			name: "Power Display",
			type: 'SHADOW',
			movetype: 'SPECIAL',
			pp: 25,
			damage: 120,
			accuracy: 100,
			prority: 0,
			description: "Lowers user's SpA and SpD by 1"
		},
		'practice': {
			name: "Practice",
			type: 'PASSION',
			movetype: 'STATUS',
			pp: 20,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Raises Atk and Def by 1."
		},
		'ragingspree': {
			name: "Raging Spree",
			type: 'HONESTY',
			movetype: 'SPECIAL',
			pp: 8,
			damage: 130,
			accuracy: 90,
			prority: 0,
			description: "Lowers user's SpA by 2"
		},
		'raisesun': {
			name: "Raise Sun",
			type: 'LIGHT',
			movetype: 'STATUS',
			pp: 5,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Spawns Sunny weather for 5 turns.<br>Resets user's negative boosts."
		},
		'rampage': {
			name: "Rampage",
			type: 'CHAOS',
			movetype: 'STATUS',
			pp: 10,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Raises Atk by 3, lowers Def and SpD by 2.<br>Confuses user after 2-3 turns."
		},
		'rectify': {
			name: "Rectify",
			type: 'LIGHT',
			movetype: 'PHYSICAL',
			pp: 15,
			damage: 90,
			accuracy: 90,
			prority: 0,
			description: "10% to reduce target's Atk by 1."
		},
		'relax': {
			name: "Relax",
			type: 'LIGHT',
			movetype: 'STATUS',
			pp: 25,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Heals 50% HP."
		},
		'relayrace': {
			name: "Relay Race",
			type: 'LOYALTY',
			movetype: 'STATUS',
			pp: 20,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Switch out the Active Pony passing all modifiers and volatiles to the new one."
		},
		'repeat': {
			name: "Repeat",
			type: 'CHAOS',
			movetype: 'STATUS',
			pp: 25,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Target repeats the last move for 3 turns."
		},
		'rockcrush': {
			name: "Rock Crush",
			type: 'HONESTY',
			movetype: 'PHYSICAL',
			pp: 15,
			damage: 110,
			accuracy: 75,
			prority: 0,
			description: "High critical ratio."
		},
		'rockthrow': {
			name: "Rock Throw",
			type: 'PASSION',
			movetype: 'PHYSICAL',
			pp: 25,
			damage: 40,
			accuracy: 100,
			prority: 0,
			description: "10% to lower target's defense."
		},
		'scareaway': {
			name: "Scare Away",
			type: 'NIGHT',
			movetype: 'SPECIAL',
			pp: 15,
			damage: 60,
			accuracy: 90,
			prority: -5,
			description: "Switches enemy out to a<br>random pony. Priority -5."
		},
		'schemeup': {
			name: "Scheme Up",
			type: 'MAGIC',
			movetype: 'STATUS',
			pp: 20,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Raises SpA by 2."
		},
		'scorchingbeam': {
			name: "Scorching Beam",
			type: 'MAGIC',
			movetype: 'SPECIAL',
			pp: 25,
			damage: 80,
			accuracy: 100,
			prority: 0,
			description: "30% to burn the target"
		},
		'shadowmist': {
			name: "Shadow Mist",
			type: 'SHADOW',
			movetype: 'SPECIAL',
			pp: 20,
			damage: 90,
			accuracy: 100,
			prority: 0,
			description: "Inflicts regular damage."
		},
		'sharpnails': {
			name: "Sharp Nails",
			type: 'SHADOW',
			movetype: 'STATUS',
			pp: 10,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Enemies are damaged on switch-in.<br>Flying races are immune."
		},
		'shyaway': {
			name: "Shy Away",
			type: 'KINDNESS',
			movetype: 'STATUS',
			pp: 24,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Raises user Evasion by 1."
		},
		'skydive': {
			name: "Sky Dive",
			type: 'LOYALTY',
			movetype: 'PHYSICAL',
			pp: 30,
			damage: 90,
			accuracy: 100,
			prority: 0,
			description: "Inflicts regular damage."
		},
		'sneakattack': {
			name: "Sneak Attack",
			type: 'NIGHT',
			movetype: 'PHYSICAL',
			pp: 25,
			damage: 40,
			accuracy: 100,
			prority: 1,
			description: "Usually hits first."
		},
		'snuggle': {
			name: "Snuggle",
			type: 'LOVE',
			movetype: 'PHYSICAL',
			pp: 16,
			damage: 35,
			accuracy: 100,
			prority: 3,
			description: "Fails unless it's the user's<br>first turn on the field.<br>100% to flinch target. Priority +3"
		},
		'sonicbarrier': {
			name: "Sonic Barrier",
			type: 'MUSIC',
			movetype: 'STATUS',
			pp: 32,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Halves incoming special<br>damage for 5 turns."
		},
		'sonicrainboom': {
			name: "Sonic Rainboom",
			type: 'LOYALTY',
			movetype: 'PHYSICAL',
			pp: 5,
			damage: 120,
			accuracy: 80,
			prority: 1,
			description: "Has 33% recoil."
		},
		'spatreatment': {
			name: "Spa Treatment",
			type: 'LIGHT',
			movetype: 'STATUS',
			pp: 25,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Heals team's negative statuses."
		},
		'speedup': {
			name: "Speed Up",
			type: 'LOYALTY',
			movetype: 'STATUS',
			pp: 25,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Raises Spe by 2."
		},
		'stalking': {
			name: "Stalking",
			type: 'NIGHT',
			movetype: 'PHYSICAL',
			pp: 32,
			damage: 40,
			accuracy: 100,
			prority: 0,
			description: "Inflics doubled damage if used on opponent's switch-out."
		},
		'stampede': {
			name: "Stampede",
			type: 'SPIRIT',
			movetype: 'PHYSICAL',
			pp: 15,
			damage: 90,
			accuracy: 90,
			prority: -6,
			description: "Switches enemy out to a<br>random pony. Priority -6."
		},
		'stare': {
			name: "Stare",
			type: 'KINDNESS',
			movetype: 'SPECIAL',
			pp: 5,
			damage: 120,
			accuracy: 70,
			prority: 0,
			description: "20% to petrify the target."
		},
		'startle': {
			name: "Startle",
			type: 'LAUGHTER',
			movetype: 'PHYSICAL',
			pp: 25,
			damage: 60,
			accuracy: 90,
			prority: 0,
			description: "10% to flinch enemy. Power doubles if target has status."
		},
		'stealthdiamonds': {
			name: "Stealth Diamonds",
			type: 'GENEROSITY',
			movetype: 'STATUS',
			pp: 10,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Damages enemies on switch-in;<br>based on Generosity."
		},
		'stormcloud': {
			name: "Storm Cloud",
			type: 'LOYALTY',
			movetype: 'SPECIAL',
			pp: 25,
			damage: 80,
			accuracy: 100,
			prority: 0,
			description: "10% to lower enemy SpD by 1."
		},
		'struggle': {
			name: "Struggle",
			type: 'HONESTY',
			movetype: 'PHYSICAL',
			pp: -1,
			damage: 40,
			accuracy: -1,
			prority: 0,
			description: "Has 25% of user's HP as recoil."
		},
		'surprisehit': {
			name: "Surprise Hit",
			type: 'NIGHT',
			movetype: 'PHYSICAL',
			pp: 8,
			damage: 80,
			accuracy: 100,
			prority: 1,
			description: "Priority +1. Fails if enemy used status move."
		},
		'tackle': {
			name: "Tackle",
			type: 'HONESTY',
			movetype: 'PHYSICAL',
			pp: 35,
			damage: 50,
			accuracy: 100,
			prority: 0,
			description: "Inflicts regular damage."
		},
		'talkout': {
			name: "Talk Out",
			type: 'KINDNESS',
			movetype: 'SPECIAL',
			pp: 24,
			damage: 50,
			accuracy: -1,
			prority: 0,
			description: "Removes all target's stat changes"
		},
		'taunt': {
			name: "Taunt",
			type: 'LAUGHTER',
			movetype: 'STATUS',
			pp: 25,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Target cannot use status moves for 2-5 turns."
		},
		'telekinesis': {
			name: "Telekinesis",
			type: 'MAGIC',
			movetype: 'STATUS',
			pp: 10,
			damage: 0,
			accuracy: -1,
			prority: 1,
			description: "Lowers target's SpD and Spe by 1."
		},
		'teleportblast': {
			name: "Teleport Blast",
			type: 'MAGIC',
			movetype: 'SPECIAL',
			pp: 15,
			damage: 70,
			accuracy: 100,
			prority: 0,
			description: "Switch out after hit."
		},
		'trailblazer': {
			name: "Trailblazer",
			type: 'LOYALTY',
			movetype: 'SPECIAL',
			pp: 8,
			damage: 100,
			accuracy: 90,
			prority: 0,
			description: "Higher chance for critical hit"
		},
		'treat': {
			name: "Treat",
			type: 'GENEROSITY',
			movetype: 'SPECIAL',
			pp: 20,
			damage: 65,
			accuracy: 100,
			prority: 0,
			description: "20% to burn the target"
		},
		'venompotion': {
			name: "Venom Potion",
			type: 'SPIRIT',
			movetype: 'STATUS',
			pp: 10,
			damage: 0,
			accuracy: 90,
			prority: 0,
			description: "Badly poisons target."
		},
		'whine': {
			name: "Whine",
			type: 'LOVE',
			movetype: 'STATUS',
			pp: 20,
			damage: 0,
			accuracy: -1,
			prority: 0,
			description: "Lowers target's Def and SpD by 1."
		},
		'whirlinghoof': {
			name: "Whirling Hoof",
			type: 'PASSION',
			movetype: 'PHYSICAL',
			pp: 35,
			damage: 20,
			accuracy: 100,
			prority: 0,
			description: "Removes hazards from ally field."
		},
		'wildweed': {
			name: "Wild Weed",
			type: 'HONESTY',
			movetype: 'STATUS',
			pp: 16,
			damage: 0,
			accuracy: 90,
			prority: 0,
			description: "1/8 of target's HP is restored<br>to user every turn."
		},
		'wreakhavoc': {
			name: "Wreak Havoc",
			type: 'CHAOS',
			movetype: 'SPECIAL',
			pp: 15,
			damage: 110,
			accuracy: 85,
			prority: 0,
			description: "No additional effect."
		}
	},
	abilities: {
		'appeal': {
			name: "Appeal",
			description: "This pony has 50% chance to avoid negative conditions."
		},
		'ataraxy': {
			name: "Ataraxy",
			description: "This pony can only take damage from damaging moves."
		},
		'aversion': {
			name: "Aversion",
			description: "Damages opponent by 1/8 HP when hit by a contact move."
		},
		'boasting': {
			name: "Boasting",
			description: "Raises user's SpA if enemy's SpA is greater."
		},
		'bruteforce': {
			name: "Brute Force",
			description: "Physical moves have +20% prob. to flinch."
		},
		'chaosmagic': {
			name: "Chaos Magic",
			description: "Acquire a random resistance on switch-in."
		},
		'charity': {
			name: "Charity",
			description: "Boosts Generosity moves' damage by 50% when HP is less or equal to 33%."
		},
		'compassion': {
			name: "Compassion",
			description: "Boosts Kindness moves' damage by 50% when HP is less or equal to 33%."
		},
		'determination': {
			name: "Determination",
			description: "Prevents this pony from flinching."
		},
		'devotion': {
			name: "Devotion",
			description: "Boosts Loyalty moves' damage by 50% when HP is less or equal to 33%."
		},
		'diehard': {
			name: "Die Hard",
			description: ""
		},
		'dragonscales': {
			name: "Dragon Scales",
			description: "Halves all special damage."
		},
		'escapist': {
			name: "Escapist",
			description: "Evasion rises by 1 when hit by supereffective moves."
		},
		'highscorer': {
			name: "High Scorer",
			description: "Copies the opponent's highest base stat (except HP)."
		},
		'hotheaded': {
			name: "Hot Headed",
			description: "Doubles Atk, halves Def."
		},
		'indifference': {
			name: "Indifference",
			description: "This pony cannot have its stats lowered."
		},
		'integrity': {
			name: "Integrity",
			description: "Boosts Honesty moves' damage by 50% when HP is less or equal to 33%."
		},
		'leadership': {
			name: "Leadership",
			description: "Boosts Magic moves' damage by 50% when HP is less or equal to 33%."
		},
		'lovebird': {
			name: "Lovebird",
			description: "This pony gets +1 SpA whenever<br>hit by a Love-type move."
		},
		'magicdrain': {
			name: "Magic Drain",
			description: "Boosts a stat per turn depending on opponent's race"
		},
		'magicheal': {
			name: "Magic Heal",
			description: "Heal negative status on switch-out."
		},
		'mastery': {
			name: "Mastery",
			description: "Ensures maximum number of hits in a multi-hit move."
		},
		'mildness': {
			name: "Mildness",
			description: "Boosts by 50% moves with a base power equal or less than 60."
		},
		'nocturnality': {
			name: "Nocturnality",
			description: "This pony cannot be set Asleep. +1/8 HP per turn during DARK weather."
		},
		'optimism': {
			name: "Optimism",
			description: "Boosts Laughter moves' damage by 50% when HP is less or equal to 33%."
		},
		'pestresilience': {
			name: "Pest Resilience",
			description: "This pony cannot be poisoned."
		},
		'selfconfidence': {
			name: "Self Confidence",
			description: "Adds +33% bonus to STAB moves."
		},
		'senseofdanger': {
			name: "Sense Of Danger",
			description: "Base Speed becomes 100 and Def halves when HP is less or equal than 1/3"
		},
		'shiningcoat': {
			name: "Shining Coat",
			description: "Prevents critical hits."
		},
		'simplicity': {
			name: "Simplicity",
			description: "-15% accuracy, +40% power to physical moves."
		},
		'solarmagic': {
			name: "Solar Magic",
			description: "Raises the Sun on switch-in."
		},
		'spellrefractory': {
			name: "Spell Refractory",
			description: "This pony is immune from moves based on rays or beams."
		},
		'stubborn': {
			name: "Stubborn",
			description: "Prevents one-hit KO."
		},
		'subjection': {
			name: "Subjection",
			description: "Decreases enemy's atk on switch-in."
		},
		'swiftness': {
			name: "Swiftness",
			description: "Raises user's Evasion by 1 on switch in."
		},
		'toughbody': {
			name: "Tough Body",
			description: "Super-effective damage is reduced by 25%."
		},
		'upperhoof': {
			name: "Upper Hoof",
			description: "Gives +1 priority to Status moves"
		}
	},
	items: {
		'alicornamulet': {
			name: "Alicorn Amulet",
			description: "Boosts damage by 30%, but damages user of 10% of its HP after attacks."
		},
		'choiceboots': {
			name: "Choice Boots",
			description: "User Speed is 1.5x, but can only use first move he selects."
		},
		'choicebridle': {
			name: "Choice Bridle",
			description: "User SpA is 1.5x, but can only use first move he selects."
		},
		'choicesaddle': {
			name: "Choice Saddle",
			description: "User Atk is 1.5x, but can only use first move he selects."
		},
		'darkcloak': {
			name: "Dark Cloak",
			description: "Boosts Shadow-type moves by 20%."
		},
		'diamondring': {
			name: "Diamond Ring",
			description: "Boosts Love-type moves by 20%."
		},
		'fashionscarf': {
			name: "Fashion Scarf",
			description: "Boosts Generosity-type moves by 20%."
		},
		'flightgoggles': {
			name: "Flight Goggles",
			description: "Boosts Loyalty-type moves by 20%."
		},
		'goldenlyre': {
			name: "Golden Lyre",
			description: "Boosts Music-type moves by 20%."
		},
		'magictiara': {
			name: "Magic Tiara",
			description: "Boosts Magic-type moves by 20%."
		},
		'mysticmask': {
			name: "Mystic Mask",
			description: "Boosts Spirit-type moves by 20%."
		},
		'partyhat': {
			name: "Party Hat",
			description: "Boosts Laughter-type moves by 20%."
		},
		'scooter': {
			name: "Scooter",
			description: "Boosts Passion-type moves by 20%."
		},
		'sparesnacks': {
			name: "Spare Snacks",
			description: "At the end of every turn, holder restores 1/16 of its max HP."
		},
		'zapapplejuice': {
			name: "Zap Apple Juice",
			description: "Prevents user OHKO"
		}
	},
}
