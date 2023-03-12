//created rot13 function
function rot13(str) {
    //split input string
    let strl=str.split('');
    //shift each element of the strl list 13 point forward or backward within the aplhabetical range 
    //create a new list of this elements and join them
    return strl.reduce(function(encl,a){if(/[a-z0-9]/i.test(a)){
        if(a.charCodeAt(0)>='A'.charCodeAt(0)+13){ return encl.concat(String.fromCharCode(a.charCodeAt(0)-13)) }
        else { return encl.concat(String.fromCharCode(a.charCodeAt(0)+13)); }
    }else {return encl.concat(a); }},[]).join('')}
      
    
      