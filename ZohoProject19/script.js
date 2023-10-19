const inputEl = document.querySelector('input')
const matrixEl = document.getElementById('matrix')
const btnEl = document.getElementById('btn')
const resultEl = document.querySelector('.result')

const Wordlist = new Array('ZOHO')
const CreateEl = (el, listEL, rmEl) => {
    const b = document.createElement('b')
    rmEl.innerHTML = '<i class="bi bi-x-circle-fill"></i>'
    b.textContent = el
    b.append(rmEl)
    listEL.append(b)
    matrixEl.append(listEL)
}
let count = 0

btnEl.addEventListener('click', () => {
    if (inputEl.value !== '') {
        count += 1
        const removeBtn = document.createElement('button')
        removeBtn.id = 'button'
        const list = document.createElement('li')
        list.id = 'listEl'
        let word = inputEl.value.toUpperCase()
        Wordlist.push(word)
        CreateEl(word, list, removeBtn)
        console.log(Wordlist);
        removeBtn.addEventListener('click', () => {
            const liEL = removeBtn.parentElement.parentElement
            let ReWord = removeBtn.parentElement.textContent
            Wordlist.splice(Wordlist.indexOf(ReWord), 1)
            console.log(Wordlist);
            liEL.remove()

        })
        // Runcount += 1
        const h5 = document.createElement('b')
        Wordlist.map(word => {
            const ans = VowelFind(word)
            h5.className = 'd-block'
            h5.textContent = `Word : ${word} || Output ${ans}`
            resultEl.append(h5)

        })
        if (count > 2) {
            matrixEl.innerHTML = ''
            count = 0
            Wordlist.length = 0
            resultEl.innerHTML = ''
            console.log(Wordlist);
        }
        inputEl.value = ''
    }
    else {
        alert('Enter Input Please!')
    }

})



const removeEl = document.querySelector('#remove')
removeEl.addEventListener('click', () => {
    removeEl.parentElement.parentElement.remove()
    Wordlist.length = 0
})

function VowelFind(word) {
    const vowels = 'AEIOU'
    let Vowelcount = 0
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            Vowelcount += 1
        }
    }
    console.log(Vowelcount);
    if (Vowelcount % 2 == 0) {
        Vowelcount = 0
        return 'PLUMP'
    }
    else {
        Vowelcount = 0
        return 'SUPERPLUMP'
    }
}
const h5 = document.createElement('b')
Wordlist.map(word => {
    const ans = VowelFind(word)
    h5.className = 'd-block'
    h5.textContent = `Word : ${word} || Output ${ans}`
    resultEl.append(h5)
    console.log(ans);

})