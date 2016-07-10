define(['entity', 'loader'], function(Entity, loader) {

	/******************************
	*	takes as argument:		
	*	obj = {
	*		x: x,
	*		y: y,
	*		width: width,
	*		height: height,
	*		zIndex: zIndex
	*	},
	*	speed = 5,
	*	direction = 'right'
	*	
	******************************/

	function Cloud(obj, velocity) {
		Entity.call(this, obj);
		this.name = 'Cloud';
		this.velocity = velocity;
		if(this.velocity < 0) {
			this.x = 1280;
		} else {
			this.x = -this.width;
		}
		this.initialX = this.x;
		this.sprite = './img/cloud.png';
		
	};

	Cloud.prototype = Object.create(Entity.prototype);
	Cloud.prototype.constructor = Cloud;

	Cloud.prototype.update = function () {
		this.x += this.velocity;

		if(this.x > 1280 || this.x < 0 - this.width) {
			this.x = this.initialX;
		}
	};

	Cloud.prototype.render = function (ctx) {
		ctx.drawImage(loader.get(this.sprite), this.x, this.y, this.width, this.height);
	};

	return Cloud;

});