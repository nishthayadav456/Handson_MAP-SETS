var a = "abcadeecfb"
let b = new Set(a)
b = [...b]
let c = b.join('')
console.log(c)


function countAlphabets(str){
    const alphabetCount = new Map()

    for(let char of str){
        if (alphabetCount.has(char))
        alphabetCount.set(char,alphabetCount.get(char)+1)
        else{
            alphabetCount.set(char,1)
        }
    }
    for(let [char,count] of alphabetCount){
        console.log(`${char} = ${count}`)
    }
}
countAlphabets("abcadeecfb")