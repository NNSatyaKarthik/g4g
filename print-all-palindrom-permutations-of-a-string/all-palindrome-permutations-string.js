var permutations = require("permutations-generator");

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
        var middleChar = "";
        for(var group in groups){
            firstHalf += group.toString().repeat(groups[group]/2);
            if(groups[group] % 2!== 0){
                middleChar = group.toString();
            }
        }
        var firstHalfPermutations = Array.from(new Set(permutations.generateAllPermutations(firstHalf, 0)));
	var fullPermutations = firstHalfPermutations.map(function(x){
	    return x + middleChar + x.split('').reverse().join('');
	});
	//console.log("hello baby ", fullPermutations);
	return fullPermutations;
    }else{ 
        return;
    }
};

var input = "aabbcadad";
var startTime = new Date().getTime();
var allPermutationsWhichArePalindromes = getAllPalindromePermutations(input);
var endTime = new Date().getTime();
console.log("All palindrome permutations for the string "+input+ "are : \n'"+ allPermutationsWhichArePalindromes +"'\n are obtained in :: "+(endTime-startTime) +" milliseconds!" );

