const md5 = require("md5");
const ts = Date.now();
const PUBLIC_API_KEY = process.env.PUBLIC_API_KEY;
const PRIVATE_API_KEY = process.env.PRIVATE_API_KEY;

export async function getMarvelsCharacters() {
  try {
    if (!PUBLIC_API_KEY || !PRIVATE_API_KEY) {
      throw new Error("The api key is not valid");
    }

    const hash = md5(ts + PRIVATE_API_KEY + PUBLIC_API_KEY);
    const res = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${PUBLIC_API_KEY}&hash=${hash}&limit=50`
    );

    return res.json();
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getMarvelsCharactersByName(query: string) {
  try {
    if (!PUBLIC_API_KEY || !PRIVATE_API_KEY) {
      throw new Error("The api key is not valid");
    }
    const hash = md5(ts + PRIVATE_API_KEY + PUBLIC_API_KEY);
    const res = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&limit=50&ts=${ts}&apikey=${PUBLIC_API_KEY}&hash=${hash}`
    );
    return res.json();
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getMarvelsCharacterDetails(id: string) {
  try {
    if (!PUBLIC_API_KEY || !PRIVATE_API_KEY) {
      throw new Error("The api key is not valid");
    }

    const hash = md5(ts + PRIVATE_API_KEY + PUBLIC_API_KEY);
    const res = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${PUBLIC_API_KEY}&hash=${hash}`
    );

    return res.json();
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getMarvelsCharacterComics(id: string) {
  try {
    if (!PUBLIC_API_KEY || !PRIVATE_API_KEY) {
      throw new Error("The api key is not valid");
    }

    const hash = md5(ts + PRIVATE_API_KEY + PUBLIC_API_KEY);
    const res = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?limit=20&ts=${ts}&apikey=${PUBLIC_API_KEY}&hash=${hash}`
    );

    return res.json();
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
