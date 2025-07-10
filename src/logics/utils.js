
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

export const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
export const getRNDarr = (arr) => {
  const shuffled = shuffle(arr);
  return shuffled[0]
}