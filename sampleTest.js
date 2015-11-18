var assert = require('assert');
var chai = require('chai');

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

describe('add',function(){
	describe('when used for the first time',function(){
		it('gives 0',function(){
			assert.equal(0,add(1,2));
			assert.equal(3,add(1,2));
		});
	});
	it('crashes when used with negative numbers',function(){
		try{
			add(-1,1);
			assert.fail();
		}
		catch(e){
			assert.equal('negative numbers not allowed',e.message);
		};
	});
	describe('with chai',function(){
		it('crashes when used with negative numbers',function(){
			chai.assert.throws(function(){ add(-1,1)},Error,'negative numbers not allowed');
		});
	});
});


describe('setTimeout',function(){
	this.timeout(3100);
	it('calls the callback after the given time',function(done){
		var x = 0;
		var check = function(){
			assert.equal(100,x);
			done();
		};
		setTimeout(function(){
			x = 100;
			check();
		},3000);
	});
});
