async function callcc(f){
    return await new Promise((resolve,reject)=>{
	const resolve_packed=(v)=>{
	    resolve(v)
	    return new Promise((resolve,reject)=>{})
	}
	f(resolve_packed).then(resolve).catch(reject)
    })
}
exports.callcc=callcc;
