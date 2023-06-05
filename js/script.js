function funcSlice(str,from,to){
    let res = ''
    if (from < 0) {
        from += str.length;
      }
      if (to < 0) {
        to += str.length;
      }

    for (let i = from; i < to; i++){

        res +=str[i]
    }
    return res
}
let slc = funcSlice('homework',2,4)

console.log(slc);

console.log('homework'.slice(2,4));


function funcSubstring(str,from,to){
     let res = ''
    
    for (let i = from; i < to; i++){

        res +=str[i]
        
    }
    return res

}

let sub = funcSubstring('television',-1,4)

console.log(sub);
console.log('television'.substring(-1,4));



function funcindexOf(str,from){

    for(let i =0;i < str.length;i++){
        if(str[i] === from){
            return i
        }
    }
    return -1
}
let x = funcindexOf('open web','w')

// console.log(x);

// console.log('open web'.indexOf('w'));


////////////////////////////////////////////////

function includes(str,from){

    for(let i =0;i < str.length;i++){
        if(str[i] === from){
            return true
    }
}
   return false
}
let inc =includes('open web','w')


console.log(inc);
console.log('open web'.includes('w'));

/////////////////////////////////////////////////

function repeat(str,count){
    let res =''
 for(let i = 0;i< count;i++){
    res +=str
 }
 return res
}
let rep = repeat('open ',3)

console.log(rep);
console.log('open web'.repeat(3));

///////////////////////////////////////////////////

function startWidth(str,from,ind =0 ){
    
    
    for(let i = ind;i < str.length;i++){
        let x = str.slice(ind,from.length)

        // let j = str.slice(ind,str.length)

        // console.log(j);

        if(x === from){
            return true
        }else{
             return false
        }
      
    }
   
}
console.log(startWidth('umidjon safd','umidjon'))

// console.log('umidjon qads'.startsWith('umid'));


///////////////////////////////////////////////////

function endWidth(str,from){
    
    
    for(let i = str.length-1;i > 0;i--){
        // console.log(str[i]);
            
        if(str[i] === from){
            return true
        }else{
             return false
        }
      
    }
   
}
console.log(endWidth('umidjon', 'n'));