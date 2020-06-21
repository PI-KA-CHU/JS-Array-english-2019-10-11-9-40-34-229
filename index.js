// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
var ans = "";
if (a instanceof Array) {
	ans += "a是array类型"
}else{
	ans += "a不是array类型"
}
if (b instanceof Array) {
	ans += "，b是array类型"
}else{
	ans += "，b不是array类型"
}
console.log(ans)


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (var i = 0; i < a.length; i++) {
	a[i] = a[i] * 2;
}


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var h = [" ","+",","];
for (var i = 0; i < h.length; i++) {
	console.log("case " + (i+1) + ":");
	var ans = "";
	for (var j = 0; j < colors.length; j++) {
		if(j == 0){
			ans += colors[j];
		}else{
			ans += (h[i] + colors[j]);
		}
	}
	console.log(ans);
}


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(a, b){return b - a});
console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var count = a.reduce(function(allElement,element){
	if (element in allElement) {
		allElement[element] ++;
	}else{
		allElement[element] = 1;
	}
	return allElement;
},{})

let res = "";
let max = 0;
for(let r in count){
	if (count[r] > max) {
		max = count[r];
		res = r;
	}
}
console.log(res)