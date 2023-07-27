const resultEl = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submit = document.getElementById('submit')
const add = document.getElementById('add')
const decrease = document.getElementById('decrease')
let action = '+'


add.onclick = function () {
    action = "+"
}

decrease.onclick = function () {
    action = '-'
}

function resultPrint(result) {
    resultEl.textContent = 'Result: ' + result
}

function Action(inp1, inp2, actionS) {
    const sum = +inp1.value + +inp2.value
    const minus = +inp1.value - +inp2.value
    if (actionS === '+') {
        // resultEl.textContent = 'Result: ' + sum
        resultPrint(sum)
    } else if (actionS === '-') {
        //     resultEl.textContent = 'Result: ' + minus
        resultPrint(minus)

    }
    printResult(actionS === '+' ? sum : minus)
}

submit.onclick = function () {
    Action(input1, input2, action)

}

function printResult(result) {
    if (result < 0) {
        resultEl.style.color = 'red'
    } else {
        resultEl.style.color = 'green'
    }
    // resultEl.textContent = result
}


