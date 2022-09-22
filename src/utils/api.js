const BASE_URL = 'https://swapi.dev/api';
const BASE_URL2 = 'https://api.nasa.gov/planetary/apod?';
const API_KEY = 'api_key=LHPgE9xmKJoOwHxIovXGDKsJjC35gB1YYXuqvI7u'
const GET = async (type) => {
  const res = await fetch(`${ BASE_URL }/${ type }`);
  const data = await res.json();

  return data;
}

const GET2 = async () => {
  const res = await fetch(`${ BASE_URL2 }${ API_KEY }`);
  const data = await res.json();

  return data;
}
export { GET, GET2 };
