function getMaxValue(weights, profits, cap) {
  let items = [];
  for (let i = 0; i < weights.length; i++) {
    items.push({ weight: weights[i], profit: profits[i] });
  }

  items.sort((a, b) => {
    return b.profit / b.weight - a.profit / a.weight;
  });

  let res = 0;
  for (let i of items) {
    let weight = i.weight;
    let profit = i.profit;

    if (cap - weight >= 0) {
      cap -= weight;
      res += profit;
    } else {
      //when item doesn't fit completely
      let frac = cap / weight;
      res += profit * frac;
      break;
    }
  }
  return res;
}

let weights = [10, 40, 20, 30];
let profits = [60, 40, 100, 120];

console.log(getMaxValue(weights, profits, 50));
