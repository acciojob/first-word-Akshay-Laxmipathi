function firstWord(s) {
  // your code here
	let trims = s.trim();
	let split = trims.split(" ");
	return split[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
