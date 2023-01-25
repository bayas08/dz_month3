const request = new XMLHttpRequest()
request.open("GET", "ajax.json")
request.setRequestHeader("Content-type", "application/json")
request.send()
request.addEventListener('load', ()=>{
    const data = JSON.parse(request.response)
    const div = document.createElement('div')
    document.body.append(div)
    data.map((e) =>{
        const p = document.createElement('p')
        const span = document.createElement('span')
        const img = document.createElement('img')
        const div2 = document.createElement('div2')
        const btn = document.createElement('button')
        div2.setAttribute('class', 'div2')
        div2.append(img,p,span,btn)
        btn.style.border = 'none'
        btn.style.marginLeft = '20px'
        btn.style.cursor = 'pointer'
        btn.style.color = 'white'
        btn.style.background = 'blue'
        btn.style.marginTop = '20px'
        btn.innerText = e.button
        p.innerText =  e.name
        p.style.marginLeft = "20px"
        span.innerText = e.price
        img.src = e.url
        img.style.marginLeft = '20px'
        div.append(div2)
    })
})




