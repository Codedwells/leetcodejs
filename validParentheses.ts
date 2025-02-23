/**EASY
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * Example 1:
 * Input: s = "()"
 * Output: true
 */
function isValid(s: string): boolean {
  let st: string[] = []

  const crp = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  for (let c of s) {
    if (c == '(' || c == '{' || c == '[') {
      st.push(c)
    } else if (st.length == 0 || st.pop() !== crp[c]) {
      return false
    }
  }

  return st.length === 0
}

console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
console.log(isValid('([])')) // true
