import chroma from 'chroma-js';

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

export const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

export const getRNDarr = (arr, excluded=[]) => {
  const shuffled = shuffle(arr);
  if (!excluded[0]) {
    return shuffled[0]
  }
  let i = 0;
  while (shuffled[i]) {
    if (!excluded.includes(shuffled[i])) return(shuffled[i])
    i++;
  }
  return shuffled[i]
}

export const getNeighbors = (i, k) => {
  let totalTiles = k * k - (k / 2);
  let row = 0;
  let index = 0;
  let firstCol = i === 0 ? true : false;
  let lastCol = false;
  while (row < k-1) {
    index = row % 2 === 0 ? index + k : index + k - 1;
    if (i === index) {
      firstCol = true;
    }
    if (i === index-1) {
      lastCol = true;
    }
    if (i < index) {
      break;
    }
    row++;
  }
  if (row === 0 && i >= index) {
    row = k - 1; // Last row
    if (i === totalTiles - 1) {
      lastCol = true; // Last tile in the last row
    }
  }
  const pairCol = row % 2 === 0;
  
  let neighbors = [];
  //check NO
  if (row > 0 && !(firstCol && pairCol)) {
    neighbors.push(i - k);
  }
  //check NE
  if (row > 0 && !(lastCol  && pairCol)) {
    neighbors.push(i - k + 1);
  }
  //check E
  if (!lastCol) {
    neighbors.push(i + 1);
  }
  //check SE
  if (!(row === k - 1) && !(lastCol && pairCol)) {
    neighbors.push(i + k);
  }
  //check SO
  if (!(row === k - 1) && !(firstCol && pairCol)) {
    neighbors.push(i + k - 1);
  }
  //check O
  if (!firstCol) {
    neighbors.push(i - 1);
  }
  return neighbors;
}
export const startColor = (goal, moves, value) => {
  // Convert hex goal to [R, G, B] array if needed
  let rgbGoal = Array.isArray(goal)
    ? goal
    : chroma(goal).rgb(); // chroma returns [R, G, B]

  // Randomly distribute 'moves' steps among R, G, B
  let steps = [0, 0, 0];
  let remaining = moves;
  for (let i = 0; i < 2; i++) {
    steps[i] = getRandomInt(0, remaining + 1);
    remaining -= steps[i];
  }
  steps[2] = remaining;
  steps = shuffle(steps);

  // For each channel, pick direction and compute value
  const result = {};
  ['R', 'G', 'B'].forEach((ch, i) => {
    let dir = Math.random() < 0.5 ? 1 : -1;
    let candidate = rgbGoal[i] + dir * steps[i] * value;
    // If out of bounds, flip direction
    if (candidate < 0 || candidate > 255) {
      dir *= -1;
      candidate = rgbGoal[i] + dir * steps[i] * value;
      candidate = Math.max(0, Math.min(255, candidate));
    }
    result[ch] = {
      direction: dir === 1 ? '+' : '-',
      value: candidate
    };
  });
  return chroma(result.R.value, result.G.value, result.B.value).hex();
}

export const compareColors = (color1, color2) => {
  const rgb1 = chroma(color1).rgb();
  const rgb2 = chroma(color2).rgb();
  const redDiff = Math.abs(rgb1[0] - rgb2[0]);
  const greenDiff = Math.abs(rgb1[1] - rgb2[1]);
  const blueDiff = Math.abs(rgb1[2] - rgb2[2]);
  const totalDiff = redDiff + greenDiff + blueDiff;
  return (
    {
      red: redDiff,
      green: greenDiff,
      blue: blueDiff,
      total: totalDiff
    }
  );
};

export const getColor = (start, steps, value) => {
  const rgbStart = chroma(start).rgb();
  const rgbGoal = [0, 0, 0].map((_, i) => {
    let dir = Math.random() < 0.5 ? 1 : -1;
    let candidate = rgbStart[i] + dir * steps * value;
    if (candidate < 0 || candidate > 255) {
      dir *= -1;
      candidate = rgbStart[i] + dir * steps * value;
      candidate = Math.max(0, Math.min(255, candidate));
    }
    return candidate;
  });
  return chroma(rgbGoal[0], rgbGoal[1], rgbGoal[2]).hex();
}

