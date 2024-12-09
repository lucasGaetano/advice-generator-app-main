const idAdvice = document.querySelector(".id-advice");
const adviceDescription = document.querySelector(".advice-description");
const btnAdvice = document.querySelector(".btn-advice");

async function genarateRandomAdvice() {
    const url = await fetch ("https://api.adviceslip.com/advice");
    const randomAdvice = await url.json();
    idAdvice.innerHTML = "ADIVICE #" + randomAdvice.slip.id;
    adviceDescription.innerHTML = randomAdvice.slip.advice;
}

genarateRandomAdvice();

btnAdvice.addEventListener('click', () => {
    genarateRandomAdvice();
})