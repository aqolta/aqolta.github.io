"use strict"
function sum(...arr) {
    return arr.reduce((accumulator,item)=> {return accumulator+item});
}
function multiply(...arr) {
    return arr.reduce(
        (accumulator,item)=>{ return accumulator*item}
    );
}

function reverse(str){
    return str.split('').map((char,index)=>{
        return str[(str.length-1)-index];
    }).join("");
}

function filterLongWords(i,...words) {    
    return words.filter(word=>word.length>i);
}