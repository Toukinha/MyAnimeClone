export default async function getRecentAnime() {
  const response = await fetch('https://api.jikan.moe/v4/recommendations/anime');
  const data = await response.json();
  return data;
}
