/*
Following problem is implemented from here.
http://www.geeksforgeeks.org/1s-2s-complement-binary-number/
Author : NNSatyaKarthik
*/

}var getOnesComplement = function(input){
    return input.split('').map(function(x){
        return (x == 1)?0:1;
    }).join('');
};

var getTwosComplement = function(input){
    var onesC = getOnesComplement(input);
    onesC = onesC.split('');
    var twosCSetFlag = false;
    for(var i = onesC.length-1; i >= 0 ; i--){
        if(onesC[i] == 1){
            onesC[i] = '0';
        }else{
            onesC[i] = '1';
            twosCSetFlag = true;
            break;
        }
    }
    if(!twosCSetFlag){
        onesC.unshift('1');
    }
    return onesC.join('');
};

var startTime = new Date().getTime();
var input = "01000";
var output = getOnesComplement(input);
var endTime = new Date().getTime();
console.log("1's Complement of this "+input+" is "+ output +" found in : "+(endTime - startTime)+" milliseconds!");

startTime = new Date().getTime();
output = getTwosComplement(input);
endTime = new Date().getTime();
console.log("2's Complement of this "+input+" is "+ output +" found in : "+(endTime - startTime)+" milliseconds!");

