export async function getPokes(url: string, query: string = '') {
  const response = await fetch(`${url}${query}`);
  return response.json();
}

export default getPokes;
