var family_file = JSON.stringify([
	{"name" : "Kordabay Daniyar" , "born" : 1999 , "father" : "Maigaziyev Nurlan" , "mother" : "Balabekova Mansiya"},
	{"name" : "Maigaziyev Nurlan" , "born" : 1964 , "father" : "Maigaziyev Kordabay" , "mother" : "Maigaziyeva Ultay"},
	{"name" : "Balabekova Mansiya" , "born" : 1967 , "father" : "Balabekov MAdibek" , "mother" : "Balabekova Tursyn"},
]);

var string = JSON.stringify({name : "X" , born : 1980});
console.log(string);

//1
var family = JSON.parse(family_file);
console.log(family.length);

console.log(family[0].name);

console.log(family[1].name , family[2].name);

console.log(family[1].born , family[2].born); 

console.log(family.filter(function(person){
	return person.born <= 1980;
}));

var age = family.reduce((function(a , b){
	if(a.born < b.born) return a;
	else return b;
}));
console.log(age.born);