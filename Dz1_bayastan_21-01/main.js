//1
const email = document.querySelector('#email')
const btn = document.querySelector('.check')
const result = document.querySelector('.result')

const regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.(com|ru)$/

btn.addEventListener('click', () => {
    if (regExp.test(email.value)){
        result.innerText = 'ok'
        result.style.color = 'blue'
    } else { result.innerText = 'not ok'
        result.style.color = 'red'
    }
})

//2
const block = document.querySelector('.smallBlock')
let position = 0
let move = () =>{
    if(position < 450){
        position++
        block.style.left = `${position}px`
        setTimeout(move, 1)}
}
move()