const mostOcurrences = (s) => {
	let maxLetter = null;
	let maxCount = 0;
	const map = {}
	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		//if is not a letter
		if (!(/[a-zA-Z]/.test(char))) continue
		map[char] = (map[char] || 0) + 1;
		//if exist take map [char] value. if not take 0
		if (map[char] > maxCount) {
			maxCount = map[char];
			maxLetter = char
		}
	}

	return maxLetter
}


console.log(mostOcurrences('AABDFGFFFFFFFAAADAFFFFFFFSD456FFFF123546546AFFFFA'))