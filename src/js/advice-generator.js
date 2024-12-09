const idAdvice = document.querySelector(".id-advice");
const adviceDescription = document.querySelector(".advice-description");
const btnAdvice = document.querySelector(".btn-advice");

async function genarateRandomAdvice() {
    try {
        const url = await fetch ("https://api.adviceslip.com/advice");

        if(!url.ok){
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        }

        const randomAdvice = await url.json();
        idAdvice.innerText = `ADIVICE #${randomAdvice.slip.id}`;
        adviceDescription.innerText = `"${randomAdvice.slip.advice}"`;

    } catch (error) {
        console.error("Erro ao tentar buscar as informações da API", error)
    }
}

genarateRandomAdvice();

btnAdvice.addEventListener('click', () => genarateRandomAdvice());