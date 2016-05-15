/*
Following problem is implemented from here.
http://www.geeksforgeeks.org/reverse-an-array-without-affecting-special-characters/
Author : NNSatyaKarthik
*/

var splitSpecialCharacters = function(input){
    var ichars = '/[~`!#$%\^&*+=\-\[\]\\\';,/{}|\\":<>\?]/';
    var normalChars = "";
    var specialChars = "";
    input.split('').map(function(x){
        if(ichars.indexOf(x) > -1){
            normalChars += " ";
            specialChars += x;
        }else{
            normalChars += x;
            specialChars += " ";
        }
    });
    return [normalChars, specialChars];
};

var getReversedStringWithoutSpecialCharsReplacement = function(input){
    var splitArrays = splitSpecialCharacters(input);
    var normalChars = splitArrays[0];
    var specialChars = splitArrays[1];
    var reversedNormal = normalChars.split('').map(function(x){
        if(x !== ' '){
            return x;
        }
    }).reverse().join('');
    var specialCharsArr = specialChars.split('');
    reversedNormal.split('').map(function(x){
        var idx = specialCharsArr.indexOf(' ');
//        console.log(idx, specialChars)
        if(idx != -1){
            specialCharsArr[idx] = x;  
        } 
    });
    return specialCharsArr.join('');    
};

var startTime = new Date().getTime();
var input = "Ab,c,de!$";
var output = getReversedStringWithoutSpecialCharsReplacement(input);
var endTime = new Date().getTime();
console.log("Reverse of this "+input+" string without moving positions of special chars is "+ output +" found in : "+(endTime - startTime)+" milliseconds!");
