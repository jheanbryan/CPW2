export const apiConsult = async (word) => {
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const response = await fetch(apiUrl);
  const results = await response.json();

  return results
};
