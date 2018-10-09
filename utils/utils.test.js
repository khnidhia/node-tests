
const utils = require('./utils');

const expect=require('expect');
it('should add two numbers',()=>{
	var res=utils.add(33,11);
	expect(res).toBe(44);
	//if(res!==44){
	//	throw new Error('VAlue not Correct');
	//}
});
it('asnc add to umbers',(done)=>{
	utils.asyncAdd(3,4,(sum)=>{
		expect(sum).toBe(10).toBeA('number');

	});
});

it('should be correct',()=>{
	var user={
		location:'nagda',
		age:78
	};
	var res=utils.setName(user,'andrew nagda');
	expect(res).toInclude({
		firstName:'andrew',
		lastName:'nagda'
	});
})


it('should square a number ',()=>{
	var res=utils.square(33);
	expect(res).toBe(33*33+1).toBeA('number');
	//if(res!==33*33){
	//	throw new Error('VAlue not Correct');
	//}
});


	