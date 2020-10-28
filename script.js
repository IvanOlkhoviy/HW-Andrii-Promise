
function makePromiseResolveWith3(){
    return new Promise((resolve, reject) => resolve(3));
}

function makePromiseRejectWithBoo(){
    return new Promise((resolve, reject) => reject("Boo!"));
}

function makePromiseWithConstructor(itShouldResolve){
    return new Promise((resolve, reject) => itShouldResolve ? resolve(): reject());
}  

function makeDelayPromise(value, delayInMs){
    return new Promise((resolve, reject) => setTimeout( ()=> resolve(value), delayInMs));
}
  

function waitForPromise(promise, action){
    promise.then(action);
}

function consumePromise(promise, consumer, handler){
    promise.then(data => consumer(handler(data)));
}
  
  
  