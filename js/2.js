
// vystup do terminalu
console.log("Ahoj světe");

// prace s promenymi
x = 5;

// ruzne tpusoby deklerace

// 1) pomoci var platí v celem souboru nebo v podprogramu (funkce)
var y;

// 2) pomoci let funguje stejne jak v C#
let z;

// 3) pomoci const funguje jeko let ale nejde zmenit
const pi = 3.141592653589793238462643383279502884197133969937510;

// datove typy
console.log(typeof 3); 				//number
console.log(typeof 3.14); 			//number
console.log(typeof "abc"); 			//string
console.log(typeof 'a'); 			//string
console.log(typeof true);			//boolean
console.log(typeof false);			//boolean
console.log(typeof undefined);		// undefined

// datove struktuey

// 1) pole
let p = [1,2,-3,false,"abc",undefined]
console.log(p)
p[3]=true
console.log(p)

// 2) objekty
let o = {krestni: "Jakub", prijmeni: "Senkyr"};
console.log(o);
o.primeni= "Lattenberg"
console.log(o);
o["prijmeni"]= "Dusek"
console.log(o);

// 3) funkce
function secti (a,b) {
	return a + b;
}
let f = secti;
console.log(secti(2,3));
console.log(f(2,3));

let vetsi = function (a,b) {
	if (a>b)
		return a;					// ANONYMÍ FUNKCE
	else
		return b;	
};

LET MENSI = (a,b) => {
	if (a<b){
		return a;
	}
	else
		return b;
}
console.log(MENSI(2,3));