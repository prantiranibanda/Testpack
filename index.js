const isW = require("is-wds");

function scream() {
	console.log("Faahh");
	return "Faahh";
}

function checkFaah(str) {
	return str === "Faahh";
}

function checkWds(str, num) {
	console.log("bug fixing, ", str, num*num); //bug fixing
	return isW(str);
}

module.exports = { scr: scream, checkFaah, checkWds };