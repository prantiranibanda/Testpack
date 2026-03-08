const isW = require("is-wds");

function scream() {
	console.log("Faahh");
	return "Faahh";
}

function checkFaah(str) {
	return str === "Faahh";
}

function checkWds(str) {
	return isW(str);
}

module.exports = { scr: scream, checkFaah, checkWds };