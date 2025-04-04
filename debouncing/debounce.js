function debounce(fn, delay) {
    let timer; 
    return function (...args) {
        clearTimeout(timer); 
        timer = setTimeout(() => { 
            fn.apply(this,args);
        }, delay);
    };
}

function search(){
    console.log("I am searching..");
}

const debounceSearch = debounce(search,1000);
debounceSearch();
setTimeout(debounceSearch,500)