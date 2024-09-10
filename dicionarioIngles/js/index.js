let containerResults = document.querySelector(".container-results");
const btnSearch = document.querySelector('.btn-search');
let inputSearch = document.getElementById('input-search').value

const apiConsult = async (word) => {
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const response = await fetch(apiUrl);
        const results = await response.json();
        return results
};
      
const writeResultInHtml = async (word) => {
    const results = await apiConsult(word)

    results.forEach((element, position) => {
        let audioQtd = element.phonetics.length;

        /*
        element.phonetics.forEach(audioArray, pos => {
            if (phonetics.audio[pos] != null) {
              audioQtd++;
            };
        });
        console.log(element.phonetics);
        */

        const newCard = `
            <div class="card-result">
                <span class="word">
                    ${position + 1} - ${element.word}
                </span>
                <span class="word-info-result">
                    ${element.phonetics.length} significado(s) de  ${audioQtd} audio
                </span>
            </div>
        `;

        containerResults.insertAdjacentHTML("beforeend", newCard); 
    });
    eventInCards();
};

const eventInButton = () => {
    containerResults.innerText = '';
    inputSearch = document.getElementById('input-search').value
    writeResultInHtml(inputSearch);
}
  
const eventInCards = () => {
    const cards = Array.from(containerResults.children);
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            console.log(12)
        });
    });
};


btnSearch.addEventListener("click", eventInButton);
document.addEventListener('keypress', (event) => {
    if (event.key == 'Enter')
        eventInButton()
})