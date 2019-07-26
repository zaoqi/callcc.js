const {callcc}=require('./callcc.js');
test('test0',()=>{
    expect.assertions(2)
    expect(callcc(async function(k){await k(131)})).resolves.toBe(131)
    expect(callcc(async function(k){return 'Ha'})).resolves.toBe('Ha')
})
test('test1',()=>{
    expect.assertions(1)
    expect((()=>{
	async function q(k,v){
	    console.log('testing1')
	    await k(v)
	}
	return callcc(async function(k){
	    console.log('testing0')
	    await q(k,133)
	    console.error('test error')
	})
    })()).resolves.toBe(133)
})
