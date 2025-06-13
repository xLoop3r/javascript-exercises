const repeatString = function(str, count) {
    if(count < 0) return "ERROR";
    let string = "";
    for(let i=0; i<count; i++) {
        string = str + string; 
        console.log(str);
        
    }

    return string;
};

const number = Math.floor(Math.random()*1000);
repeatString('hey', number);


// Do not edit below this line
module.exports = repeatString;    
