export async function getPokes(url: string, query: string = '') {
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/${url}${query}`,
  );
  return response.json();
}

export default getPokes;
