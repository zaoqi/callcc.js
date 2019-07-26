async function callcc(f){
    return await new Promise((resolve,reject)=>f(resolve).then(resolve).catch(reject))
}
exports.callcc=callcc;
