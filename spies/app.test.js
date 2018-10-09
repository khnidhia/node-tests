const expect=require('expect');
describe('app',()=>{
	
	it("should call spy correctly",()=>{
		var spy=expect.createSpy();
		spy();
		expect(spy).toHaveBeenCalled();

	}
})