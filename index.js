const isW = require("is-wds");

function scream() {
	console.log("Faahh");
	return "Faahh";
}

function checkFaah(str) {
	return str === "Faahh";
}

function checkWds(str) {
	console.log("bug fixing, ", str); //bug fixing
	return isW(str);
}

module.exports = { scr: scream, checkFaah, checkWds };