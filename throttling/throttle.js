function throttle(fn,interval){
    let lasttime = 0;
    return function(...args){
        const now = Date.now();
        if(now - lasttime >= interval){
            fn.apply(this,args);
            lasttime= now;
        }
    }
}

function handleApiCall() {
    console.log("Calling...");
}
  
const throttlehandleApiCall = throttle(handleApiCall, 2000); 
throttlehandleApiCall();
setTimeout(throttlehandleApiCall,500);  // won't be called
setTimeout(throttlehandleApiCall,1000); // won't be called
setTimeout(throttlehandleApiCall,1500); // won't be called
