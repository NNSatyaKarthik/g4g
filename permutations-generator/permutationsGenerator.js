"use strict";
var self = module.exports = {
    swap : function(str, id1, id2){
    var id1c = str.charAt(id1);
    var id2c = str.charAt(id2);
    var newStr = str.slice(0).split('');
    newStr[id1] = id2c;
    newStr[id2] = id1c;
    // console.log(newStr.join(''));
    return newStr.join('');
    },

    generateAllPermutations : function(inputString, startIdx){
    // console.log(startIdx, inputString.length-1);
    var result = [];
    if(inputString.length > 0 && startIdx < inputString.length){
        var endIdx = inputString.length;
        // console.log(inputString);
        for(var i = startIdx; i< endIdx; i++ ){
            var temp = self.generateAllPermutations(self.swap(inputString, startIdx, i ),startIdx+1);
    	    result = result.concat(temp);
        }
    }else if(startIdx === inputString.length){
        result.push(inputString);
    }
	return result;
    }
};
/*
// Uncomment this code to see how it works for the sample string
var input = "ABC";
var startTime = new Date().getTime();
console.log(self.generateAllPermutations(input, 0));
var endTime = new Date().getTime();
console.log('all Permutations of a given String generated in : '+(endTime-startTime)+' milli seconds');
*/
