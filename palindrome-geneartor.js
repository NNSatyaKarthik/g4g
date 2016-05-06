var swap = function(str, id1, id2){
    var id1c = str.charAt(id1);
    var id2c = str.charAt(id2);
    var newStr = str.slice(0).split('');
    newStr[id1] = id2c;
    newStr[id2] = id1c;
    // console.log(newStr.join(''));
    return newStr.join('');
};

var generatePalindrome = function(inputString, startIdx){
    // console.log(startIdx, inputString.length-1);
    if(inputString.length > 0 && startIdx < inputString.length){
        var endIdx = inputString.length;
        // console.log(inputString);
        for(var i = startIdx; i< endIdx; i++ ){
            generatePalindrome(swap(inputString, startIdx, i ),startIdx+1)
        }
    }else if(startIdx === inputString.length){
        console.log(inputString);
    }
};

var input = "ABC";
var startTime = new Date().getTime();
generatePalindrome(input, 0);
var endTime = new Date().getTime();
console.log('Palindrome numbers generated in : '+(endTime-startTime)+' milli seconds');