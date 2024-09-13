let containerResults = document.querySelector(".container-results");
const btnSearch = document.querySelector('.btn-search');
let inputSearch = document.getElementById('input-search');

export const apiConsult = async (word) => {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const response = await fetch(apiUrl);
    const results = await response.json();
    return results;
};
      
const writeResultInHtml = async (word) => {
    const results = await apiConsult(word);
    localStorage.setItem('lastWord', word);

    results.forEach((result, position) => {
        let audioQtd = result.phonetics.length;
        let totalMeanings = totalDefinitions(result.meanings);

        const newCard = document.createElement('div');
        newCard.classList.add('card-result');

        newCard.innerHTML = `
            <span class="word">
                ${position + 1} - ${result.word}
            </span>
            <span class="word-info-result">
                ${totalMeanings} significado(s) de ${audioQtd} áudio(s)
            </span>
        `;

        newCard.addEventListener('click', () => {
            localStorage.setItem('wordDetails', JSON.stringify(result));
            window.location.href = 'details.html';
        });

        containerResults.appendChild(newCard); 
    });
};

const eventInButton = () => {
    containerResults.innerText = '';
    writeResultInHtml(inputSearch.value);
};

const resolveLastWord = () => {
    const lastWord = localStorage.getItem('lastWord');

    if (lastWord) {
        inputSearch.value = lastWord;
        writeResultInHtml(lastWord);
    }
}

const totalDefinitions = (meanings) => {
    let total = 0;
    meanings.forEach(meaning => {
        total += meaning.definitions.length;
    });
    return total;
};

resolveLastWord();
btnSearch.addEventListener("click", eventInButton);

document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        eventInButton();
    }
});
