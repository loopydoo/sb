const input = document.getElementById('input')
const output = document.getElementById('output')

function convert(text) {
    let result = 0
    for(let i=0; i<text.length;i++) {
        if(text[i] == '{') {
            result += Number(text[i+1])
        }
    }
    return result
}

function animate() {
    output.innerText = convert(input.value)
    requestAnimationFrame(animate)
}

animate()