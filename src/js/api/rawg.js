const RAWG_API_URL = 'https://api.rawg.io/api';

// FILTER FROM ADULT CONTENT
const blockedTerms = /\b(hentai|porn|pornographic|nsfw|erotic|sex game|sexual content)\b/i;

function isAppropriateGame(game) {
  const title = game.name ?? '';

  const tags = (game.tags ?? []).map((tag) => `${tag.name} ${tag.slug}`).join(' ');

  return !blockedTerms.test(`${title} ${tags}`);
}

// GET API AFTER FILTER!
export async function getPopularGames(pageSize = 8) {
  const apiKey = import.meta.env.VITE_RAWG_API_KEY;

  if (!apiKey) {
    throw new Error('RAWG API key is missing. Check your .env file.');
  }

  const params = new URLSearchParams({
    key: apiKey,
    page_size: String(pageSize * 2),
    ordering: '-rating',
  });

  const response = await fetch(`${RAWG_API_URL}/games?${params.toString()}`);

  if (!response.ok) {
    throw new Error(`RAWG API error: ${response.status}`);
  }

  const data = await response.json();

  return (data.results ?? [])
    .filter(isAppropriateGame)
    .map((game) => ({
      id: game.id,
      title: game.name,
      image: game.background_image,
      rating: game.rating,
      released: game.released,
      genres: (game.genres ?? []).map((genre) => genre.name),
    }))
    .slice(0, pageSize);
}

// Explore Page
export async function searchGames(query, pageSize = 20) {
  const apiKey = import.meta.env.VITE_RAWG_API_KEY;

  if (!apiKey) {
    throw new Error('RAWG API key is missing. Check your .env file.');
  }

  const params = new URLSearchParams({
    key: apiKey,
    search: query,
    page_size: String(pageSize * 2),
  });

  const response = await fetch(`${RAWG_API_URL}/games?${params.toString()}`);

  if (!response.ok) {
    throw new Error(`RAWG API error: ${response.status}`);
  }

  const data = await response.json();

  return (data.results ?? [])
    .filter(isAppropriateGame)
    .map((game) => ({
      id: game.id,
      title: game.name,
      image: game.background_image,
      rating: game.rating,
      released: game.released,
      genres: (game.genres ?? []).map((genre) => genre.name),
    }))
    .slice(0, pageSize);
}

// Game Details page
export async function getGameDetails(id) {
  const apiKey = import.meta.env.VITE_RAWG_API_KEY;

  if (!apiKey) {
    throw new Error('RAWG API key is missing. Check your .env file.');
  }

  const params = new URLSearchParams({
    key: apiKey,
  });

  const response = await fetch(
    `${RAWG_API_URL}/games/${id}?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`RAWG API error: ${response.status}`);
  }

  return await response.json();
}