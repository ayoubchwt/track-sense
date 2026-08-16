export const GENRE_KEYWORDS: Record<string, string[]> = {
  pop: [
    "pop hits",
    "top 40",
    "dance pop",
    "synthpop",
    "indie pop",
    "2010s pop",
    "2020s pop",
    "billboard pop",
    "pop classics",
  ],
  rock: [
    "classic rock",
    "alternative rock",
    "hard rock",
    "indie rock",
    "90s rock",
    "80s rock",
    "punk rock",
    "soft rock",
  ],
  hiphop: [
    "hip hop hits",
    "rap classics",
    "trap hits",
    "90s hip hop",
    "2000s hip hop",
    "boom bap",
    "chart hip hop",
  ],
  rnb: ["r&b hits", "90s rnb", "modern rnb", "soul hits", "neo soul"],
  global: ["global hits", "chart toppers", "grammy winners", "stadium anthems"],
};
export function getRandomGenreKeyword(genre: string): string {
  const normalizedGenre = genre.toLocaleLowerCase();
  console.log(normalizedGenre);
  const keywords = GENRE_KEYWORDS[normalizedGenre] || GENRE_KEYWORDS.global;
  return keywords[Math.floor(Math.random() * keywords.length)];
}
