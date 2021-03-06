define(function() {
	var lvlOne = {
		time: 2,
		sum: 75,
		entities: [
			{name: 'GreenBalloon', velocity: -150, scale: 1},
			{name: 'OrangeBalloon', velocity: -80, scale: 1.2},
			{name: 'BlueBalloon', velocity: -140, scale: 1},
			{name: 'GreenBalloon', velocity: -85, scale: 1.1},
			{name: 'OrangeBalloon', velocity: -75, scale: 1.3},
			{name: 'BlueBalloon', velocity: -70, scale: 0.8},
			{name: 'OrangeBalloon', velocity: -90, scale: 0.9},
			{name: 'GreenBalloon', velocity: -150, scale: 0.7},
			{name: 'BlueBalloon', velocity: -130, scale: 0.8},
			{name: 'OrangeBalloon', velocity: -110, scale: 1.2},
			{name: 'BlueBalloon', velocity: -150, scale: 1.1},
			{name: 'GreenBalloon', velocity: -100, scale: 0.8},
			{name: 'BlueBalloon', velocity: -135, scale: 1.1},
			{name: 'OrangeBalloon', velocity: -145, scale: 0.9},
			{name: 'RedBalloon', theta: 75, scale: 0.9},
			{name: 'RedBalloon', theta: 85, scale: 1.3},
			{name: 'RedBalloon', theta: 70, scale: 1.0},
			{name: 'PurpleBalloon', velocity: -145, scale: 0.9},
			{name: 'PurpleBalloon', velocity: -125, scale: 1.1},
			{name: 'PurpleBalloon', velocity: -75, scale: 0.8},
			{name: 'PinkBalloon', velocity: -145, scale: 0.9},
			{name: 'PinkBalloon', velocity: -125, scale: 1.1},
			{name: 'PinkBalloon', velocity: -75, scale: 0.8},
			{name: 'PinkBalloon', velocity: -125, scale: 1.1},
			{name: 'PinkBalloon', velocity: -75, scale: 0.8},
			{name: 'WhiteBalloon', velocity: -145, scale: 0.9},
			{name: 'WhiteBalloon', velocity: -125, scale: 1.1},
			{name: 'WhiteBalloon', velocity: -75, scale: 0.8},
			{name: 'WhiteBalloon', velocity: -125, scale: 1.1},
			{name: 'WhiteBalloon', velocity: -75, scale: 0.8},
		],
		specials: [
			{name: 'Plane', velocity: 500, scale: 0.8},
		],
		environment: [
			{name: "Cloud", type: 1, velocity: 50, scale: 1.5, position: 5},
			{name: "Cloud", type: 2, velocity: -65, scale: 1, position: 2}
		]
	}
	return lvlOne;
});
