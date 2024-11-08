const pertanyaan = document.getElementById('pertanyaan')
const jawaban = document.getElementById('jawaban')

let init = 0

const botAsk = (data) => {
    return [
        `What's your name?`,
        `Hello ${data?.nama}, how old are you?`,
        `${data?.usia} years old and what is your hobby?`,
        `Your hobby is ${data?.hobi}. Do you have a bf/gf?`,
        `Oke so you ${data?.pacar}. OK BYE!`
    ]
}

pertanyaan.innerHTML = botAsk()[0]
let userData = []

function botStart() {
    init++
    if (init === 1) {
        botDelay({nama: jawaban.value})
    } else if (init === 2) {
        botDelay({usia: jawaban.value})
    } else if (init === 3) {
        botDelay({hobi: jawaban.value})
    } else if (init === 4) {
        botDelay({pacar: jawaban.value})
    } else if (init === 5) {
        finish()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    setTimeout(() => {
        pertanyaan.innerHTML = botAsk(jawabanUser)[init]
    }, 200)
    userData.push(jawaban.value)
    console.log(userData)
    jawaban.value = ""
}

function finish() {
    pertanyaan.innerHTML = `Thanks ${userData[0]} for playing and let's ${userData[2]} together sometimes.`
    jawaban.value = 'BYE'
}

function botEnd() {
    alert('Thanks and you will be directed to the main page now!')
    window.location.reload()
}