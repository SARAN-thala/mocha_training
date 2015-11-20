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

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

// describe('User', function() {
//   describe('#save()', function() {
//     it('should save without error', function(done) {
//       var user = new User('Luna');
//       user.save(done);

//     });
//   });
// });

// describe('setTimeout',function(){
// 	this.timeout(3100);
// 	it('calls the callback after the given time',function(done){
// 		var x = 0;
// 		var check = function(){
// 			assert.equal(100,x);
// 			done();
// 		};
// 		setTimeout(function(){
// 			x = 100;
// 			check();
// 		},3000);
// 	});
// });

//-----------------------------------------------------------------------------------------

function add1() {
	return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
		return prev + curr;
	}, 0);
};

describe('add1()', function() {
	var tests = [
		{args: [1, 2],       expected: 3},
		{args: [1, 2, 3],    expected: 6},
		{args: [1, 2, 3, 4], expected: 10},
		{args: [1,2,-3],	 expected: 0}
	];

	tests.forEach(function(test) {
		it('correctly adds ' + test.args.length + ' args', function() {
			var res = add1.apply(null, test.args);
			assert.equal(res, test.expected);
		});
	});
});

//--------------------------------------------------------------------------------------

// suite('Array', function() {
//  	setup(function() {
 		
//     });

//   suite('#indexOf()', function() {
//     test('should return -1 when not present', function() { 
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });
//----------------------------------------------------------------------------------

