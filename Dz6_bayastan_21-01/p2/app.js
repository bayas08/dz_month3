    fetch('ajax.json')
        .then(resp => resp.json())
        .then(ajax =>{
            const div = document.createElement('div')
            document.body.append(div)
            ajax.map((e) =>{
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





