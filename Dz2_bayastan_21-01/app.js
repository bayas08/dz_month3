const blockInner = document.querySelector('.ball')
let positionX = 0
let positionY = 0
let move = () =>{
    if(positionX <= 440 && positionY <= 0){
        positionX += 16
        blockInner.style.left = `${positionX}px`
        setTimeout(move, 9)
    }else if(positionX >= 440 && positionY <= 440){
        positionY +=16
        blockInner.style.top = `${positionY}px`
        setTimeout(move, 9)
    } else if(positionY === 448 && positionX !==0){
        positionX -= 16
        blockInner.style.left = `${positionX}px`
        setTimeout(move, 9)
    } else {
        positionY -= 16
        blockInner.style.top = `${positionY}px`
        setTimeout(move,9)
    }

}
move()

//2
const num = document.getElementById('num')

let i = 0;

const int = setInterval(() => {
    i++
    num.innerText = i
}, 1000)

setTimeout(() => {
    clearInterval(int)
}, 60000)