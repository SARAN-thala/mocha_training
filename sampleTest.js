var assert = require('assert');

var add = function(){
	var used;
	return function(a,b){
		if(a<0 || b<0){
			var error = new Error;
			error.message = 'negative numbers not allowed';
			throw error;
		};
		if(used)
			return a+b;
		used = true;
		return 0;
	};
}();

var amount = 0;
var increment = function(){
	amount++;
};

describe('amount',function(){
	beforeEach(function(){
		amount = 0;
	});
	it('is 0 in the beginning', function(){
		assert.equal(0,amount);
	});

	it('becomes 1 after an increment',function(){
		increment();
		assert.equal(1,amount);
	});
	it('becomes 2 after two increment',function(){
		increment();
		increment();
		assert.equal(2,amount);
	});
	it('should be implemented in some days');
});
