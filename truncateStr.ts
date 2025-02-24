
function validate(s: string, numChar: number) {
	if (s.length < numChar) return s

	let w = s.split(' ')

	let st: string[] = []
	for (let i = 0; i < w.length; i++) {
		if (st.join(' ').length > numChar - 4) {
			return st.slice(0, i - 1 ).join(' ') + ' ...'
		}

        st.push(w[i])
	}

    return w.join(' ')
}

console.log(validate('Hello world my name is Ab!', 10))
console.log(validate('Hello world my name is Ab!', 20))
console.log(validate('Hello world my name is Ab!', 30))
console.log(validate('Hello world my name is Ab!', 50))
