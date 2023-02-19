const leftInputValue = document.querySelector('#left-input')
const rightInputValue = document.querySelector('#right-input')
const btn = document.querySelector('#main-btn')
const leftBtn = document.querySelectorAll('.left-input button')
const rightBtn = document.querySelectorAll('.right-input button')
let leftPTag = document.querySelector('.left-input p')
let rightPTag = document.querySelector('.right-input p')

let leftValue = 0
let leftCurrency = 'USD'
let rightValue = 0
let rightCurrency = 'AZN'

//will be removed for testing purpose
btn.addEventListener('click', function() {
    console.log(leftInputValue.value);} )


leftInputValue.addEventListener('keyup', async function() {
    leftValue=leftInputValue.value
    const exchangeRateResponse = await fetch(`https://api.exchangerate.host/latest?base=${leftCurrency}&symbols=${rightCurrency}`)
    const exchangeRateData = await exchangeRateResponse.json()
    const exchangeRate = exchangeRateData.rates[rightCurrency]
    rightInputValue.value = (leftValue * exchangeRate).toFixed(2);
})



leftBtn.forEach(button => {
    button.addEventListener('click', async function(event)  {


        leftBtn.forEach(button => button.classList.remove('active'));
        button.classList.add('active');


        leftCurrency = event.target.innerText 

        leftValue=leftInputValue.value
        const exchangeRateResponse = await fetch(`https://api.exchangerate.host/latest?base=${leftCurrency}&symbols=${rightCurrency}`)
        const exchangeRateData = await exchangeRateResponse.json()
        const exchangeRate = exchangeRateData.rates[rightCurrency]
        rightInputValue.value = (leftValue * exchangeRate).toFixed(2);

        leftPTag.innerText = `1 ${leftCurrency} = ${exchangeRate.toFixed(2)} ${rightCurrency}`

    });
});
      

rightBtn.forEach(button => {
    button.addEventListener('click', async function(event) {


        rightBtn.forEach(button => button.classList.remove('active'));
        button.classList.add('active');

        rightCurrency = event.target.innerText 

        leftValue=leftInputValue.value
        const exchangeRateResponse = await fetch(`https://api.exchangerate.host/latest?base=${leftCurrency}&symbols=${rightCurrency}`)
        const exchangeRateData = await exchangeRateResponse.json()
        const exchangeRate = exchangeRateData.rates[rightCurrency]
        rightInputValue.value = (leftValue * exchangeRate).toFixed(2);
        rightPTag.innerText = `1 ${rightCurrency} = ${(1/exchangeRate).toFixed(2)} ${leftCurrency}`

    });
});

