export default async function getSeasonNow() {
  const response = await fetch('https://api.jikan.moe/v4/seasons/now');
  const data = await response.json();
  return data;
}
