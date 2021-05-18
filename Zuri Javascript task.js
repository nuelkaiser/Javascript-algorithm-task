function convertFahrToCelsius (x) {
    if (x == parseFloat(x)) {
        return ( (x - 32) * 5/9 ).toFixed(4)
    } else if(x === true) {
        return console.log(`${ x }  is not a valid number rather and boolean value`)
    }else if (x === false) {
        return console.log(`${ x } is not a valid number rather a boolean value`)
    }
    else if (  Array.isArray(x) ) {
        return console.log (`${ JSON.stringify(x) } is not a valid number rather an array`)
    }
    else if (typeof x === 'object'  ) {
        return console.log(`${ JSON.stringify(x) } is not a valid number rather an object`)
    }

}
convertFahrToCelsius( 32 )

function checkYuGiOh(x) {
    let result = [];

    if (isNaN(x) || parseInt(x) < 1 ) {
        return `invalid Parameter ${x}`;
    }

   for (let i = 0; i <= x; i++) {
       let str = '';
       let arr = [];

       (i % 2 == 0) ? (arr.push('yu')) : '' ;
       (i % 3 == 0) ? (arr.push('gi')) : '' ;
       (i % 5 == 0) ? (arr.push('oh')) : '' ;
        

       str = arr.join('-');
       (str) ? result.push(str) : result.push(i) 
    }
    
    return result
} 
checkYuGiOh(10)