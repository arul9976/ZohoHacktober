
// const matrix = [
//     [9, 8, 7],
//     [5, 3, 2],
//     [6, 6, 7]
// ];

function findValue(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length

    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            const num = matrix[i][j]
            const rowMax = Math.max(...matrix[i])
            const colMin = Math.min(...matrix.map(row => row[j]))

            if (num === rowMax && num === colMin) {
                return [i, j]
            }
        }
    }
    return null
}

// console.log(findValue(matrix));

const inputEl = document.querySelector('input')
const matrixEl = document.getElementById('matrix')
const btnEl = document.getElementById('btn')
const runEl = document.getElementById('run')
const resultEl = document.querySelector('.result')
let ValueList = new Array()

const CreateEl = (el, listEL) => {
    const b = document.createElement('b')
    b.textContent = el
    listEL.append(b)
    matrixEl.append(listEL)
}


btnEl.addEventListener('click', () => {
    const listEL = document.createElement('li')
    let value = inputEl.value
    let newVal = value.split(',')
    let listNum = []
    newVal = newVal.map(n => {
        let value = Number(n)
        listNum.push(value)
        CreateEl(value, listEL)
    })
    ValueList.push(listNum)
    inputEl.value = ''
})

runEl.addEventListener('click',() => {
    const ans = findValue(ValueList)
    const h1 = document.createElement('h1')
    if (ans){
        h1.textContent = ans

    }
    else{
        h1.textContent = 'No Saddle Point in Matrix'
    }
    resultEl.append(h1)
    console.log(ans);
})