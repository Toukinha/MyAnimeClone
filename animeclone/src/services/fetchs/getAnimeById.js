export default async function getRecentAnime(id) {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}}`);
  const data = await response.json();
  return data;
}
