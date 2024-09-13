const word = document.querySelector('.word');
const containerList = document.getElementById('container-list');
const audioElement = document.getElementById('audio');
const buttonElement = document.querySelector('.btn-return');
const containerAudio = document.querySelector('.container-audio');

const details = JSON.parse(localStorage.getItem('wordDetails'));
const meanings = details.meanings;

const writeInHtml = () => {
    word.innerText = details.word;

    for (let i = 0; i < meanings.length; i++) {
        const wordType = `
            <div class="wordType">
                ${meanings[i].partOfSpeech}:
            </div>
        `;
        containerList.innerHTML += wordType;

        meanings[i].definitions.forEach(item => {
            const listItem = `
                <li>
                    ${item.definition}
                </li>
            `;
            containerList.innerHTML += listItem;
        });
    };

    if (details.phonetics && details.phonetics.length > 0 && details.phonetics[0].audio)
        audioElement.src = details.phonetics[0].audio;
    else
        containerAudio.style.display = 'none';

};

const buttonReturn = () => {
    window.location.href = 'index.html';
};



writeInHtml()
buttonElement.addEventListener('click', buttonReturn)