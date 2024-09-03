import { apiConsult } from "./fetch.js";

export const writeResultInHtml = async (word) => {
    const results = await apiConsult(word)
    console.log(results);

    const containerResults = document.querySelector(".container-results");

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
};
