let tahmin = document.querySelector('.tahmin')
let btns = document.querySelectorAll('.color-button')
let boshlash = document.querySelector('.start')
let ball = document.querySelector('.ball')
let ranglar = ["qizil", "yashil", "kok", "sariq",]
// let colors = [" rgb(255, 0, 0)", rgb(0, 128, 0), rgb(0, 0, 255), rgb(255, 255, 0)]
let number = Math.floor(Math.random() * ranglar.length)// son 
let ballll = 0
// boshlash.addEventListener('click', () => {
//     
//     tahmin.innerText = ranglar[number]


// })

// 


for (let i = 0; i < ranglar.length; i++) {
    btns[i].addEventListener('click', function colorbtns(e) {
        let colors = window.getComputedStyle(e.target).backgroundColor
        // console.log(colors)
        switch (colors) {
            case 'rgb(255, 0, 0)':

                if (tahmin.innerHTML === 'qizil') {
                    ball.innerHTML = ++ballll
                    randomButtonColors()
                } else {
                    ball.innerHTML = --ballll
                    randomButtonColors()
                }
                break
            case 'rgb(0, 128, 0)':
                if (tahmin.innerHTML === 'yashil') {
                    ball.innerHTML = ++ballll
                    randomButtonColors()
                } else {
                    ball.innerHTML = --ballll
                    randomButtonColors()
                }
                break

            case 'rgb(0, 0, 255)':
                if (tahmin.innerHTML === 'kok') {
                    ball.innerHTML = ++ballll
                    randomButtonColors()
                } else {
                    ball.innerHTML = --ballll
                    randomButtonColors()
                }
                break
            case 'rgb(255, 255, 0)':
                if (tahmin.innerHTML === 'sariq') {
                    ball.innerHTML = ++ballll
                    randomButtonColors()
                } else {
                    ball.innerHTML = --ballll
                    randomButtonColors()
                }
                break
        }

    })
}
function randomButtonColors() {
    let random = Math.floor(Math.random() * ranglar.length)
    tahmin.innerHTML = ranglar[random]
}
boshlash.addEventListener('click', function boshlash() {
    tahmin.textContent = ranglar[number];
    for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = false

    }
})
// let ranglars = ranglars = window.getComputedStyle(btns[1]).backgroundColor
// if (tahmin === 'qizil') {

//     btn1.addEventListener('click', () => {
//         ball.textContent = +1
//     })
// }



// if (tahmin === 'sariq') {

//     btnn2.addEventListener('click', () => {
//         ball.textContent = +1
//     })
// }

// ranglar.forEach(e => {
//     boshlash.addEventListener('click', ()=> {
//         tahmin.textContent = Math.floor(Math.random() * e)
//         console.log(e);
//     } )
// });
// let tahmin1 = ranglar.length

//  else if (ranglar === "2") {
//     btnn2.addEventListener('click', () => {
//         ball.innerText = +ball.innerText + 1
//     })
// } else if (ranglar === "3") {
//     btnn3.addEventListener('click', () => {
//         ball.innerText = +ball.innerText + 1
//     })
// } else if(ranglar === "4") {
//     btnn4.addEventListener('click', () => {
//         ball.innerText = +ball.innerText + 1
//     })
// }
// switch(tahmin1){
// case 1 :
//      btnn1.addEventListener('click', () => {
//         ball.innerText = +ball.innerText + 1
//     })
// }
