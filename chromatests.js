import chroma from "chroma-js";
import { getRandomInt, shuffle } from "./src/logics/utils.js";
/* console.log(chroma.mix('red', 'blue', 0.5, 'rgb').hex());
console.log(chroma.mix('red', 'blue', 0.5, 'hsl').hex());
console.log(chroma.mix('red', 'blue', 0.5, 'lab').hex());
console.log(chroma.mix('red', 'blue', 0.5, 'lch').hex());
console.log(chroma.mix('red', 'blue', 0.5, 'lrgb').hex());
console.log(chroma.blend('red', 'blue', 'multiply').hex());
console.log(chroma.blend('red', 'blue', 'darken').hex());
console.log(chroma.blend('red', 'blue', 'lighten').hex());
console.log(chroma.blend('red', 'blue', 'screen').hex());
console.log(chroma.blend('red', 'blue', 'overlay').hex());
console.log(chroma.blend('red', 'blue', 'burn').hex());
console.log(chroma.blend('red', 'blue', 'dodge').hex()); */

const x = chroma.mix('fff', 'ff0')
console.log('mix', x);

console.log(chroma.mix('#000000', '#ffffff' ,0.5, 'rgb'));
console.log(chroma.mix('#0000ff', '#ffffff' ,0.5, 'rgb'));
console.log(chroma.mix('#008888', '#ffffff' ,0.5, 'rgb'));
console.log(chroma.mix('#0000d6', '#ffffff' ,0.5, 'rgb'));
console.log(chroma.mix('#e54304', '#ffffff' ,0.5, 'rgb'));

console.log(chroma.mix('#efe5fd', '#ffffff' ,0.5, 'rgb'));
console.log(chroma.mix('#d4bff9', '#ffffff' ,0.5, 'rgb'));
console.log(chroma.mix('#f2fde4', '#ffffff' ,0.5, 'rgb'));
console.log(chroma.mix('#eee6ff', '#ffffff' ,0.5, 'rgb'));
console.log(chroma.mix('#fae4fc', '#ffffff' ,0.5, 'rgb'));
console.log(chroma.mix('#fbe2f0', '#ffffff' ,0.5, 'rgb'));

/* export const startColor = (goal, moves, value) => {
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
    let candidate = goal[i] + dir * steps[i] * value;
    // If out of bounds, flip direction
    if (candidate < 0 || candidate > 255) {
      dir *= -1;
      candidate = goal[i] + dir * steps[i] * value;
      // Clamp to [0,255] just in case
      candidate = Math.max(0, Math.min(255, candidate));
    }
    result[ch] = {
      direction: dir === 1 ? '+' : '-',
      value: candidate
    };
  });
  //console.log(result);
  return chroma(result.R.value, result.G.value, result.B.value).hex();
}
const test1 = startColor([100, 100, 100], 6, 10);
console.log('[100, 100, 100], 6, 10', test1);
const test2 = startColor([200, 150, 50], 8, 5);
console.log('[200, 150, 50], 8, 5', test2);
const test3 = startColor([0, 255, 0], 10, 20);
console.log('[0, 255, 0], 10, 20', test3);
const test4 = startColor([255, 0, 0], 5, 15);
console.log('[255, 0, 0], 5, 15', test4);
const test5 = startColor([0, 0, 255], 12, 8);
console.log('[0, 0, 255], 12, 8', test5);
const test6 = startColor([255, 255, 0], 7, 10);
console.log('[255, 255, 0], 7, 10', test6);
const test7 = startColor([0, 255, 255], 9, 5);
console.log('[0, 255, 255], 9, 5', test7);
const test8 = startColor([255, 0, 255], 11, 12);
console.log('[255, 0, 255], 11, 12', test8);
const test9 = startColor([128, 128, 128], 4, 20);
console.log('[128, 128, 128], 4, 20', test9);
const test10 = startColor([255, 128, 64], 3, 15);
console.log('[255, 128, 64], 3, 15', test10);
 */