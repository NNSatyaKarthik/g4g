var permutations = require("/permutationsGenerator");

var getGroups = function(inputStr){
    var groups = {};
    for(var i = 0; i < inputStr.length; i++){
        var chr = inputStr.charAt(i);
        if(groups[chr] === undefined){
            groups[chr] = 1;
        }else{
            groups[chr] = groups[chr] +1 ;
        }
    }
    return groups;
};

var isPalindromePossible = function(inputStr){
    var groups = getGroups(inputStr);
    var  count = (inputStr.length % 2 === 0)? 0: 1;
    for(var group in groups){
        if(groups[group] % 2 !== 0){
            count--;
        }
    return (count >= 0)? true: false;
    }
};

var getAllPalindromePermutations = function(inputStr){
    if(isPalindromePossible(inputStr)){
        var groups = getGroups(inputStr);
        var firstHalf = ""; 
        var middleChar;
        for(var group in groups){
            firstHalf += group.toString().repeat(groups[group]/2);
            if(groups[group] % 2!== 0){
                middleChar = group.toString();
            }
        }
        console.log(firstHalf, middleChar);
        console.log(permutations.generateAllPermutations(firstHalf));
    }else{ 
        return;
    }
};

console.log(getAllPalindromePermutations("aabbcadad"));