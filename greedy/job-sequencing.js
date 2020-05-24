function maxProfits(names, profits, deadlines, days) {
  let jobs = [];
  let avail = [];

  for (let i = 0; i < profits.length; i++) {
    jobs.push({ name: names[i], profit: profits[i], deadline: deadlines[i] });
  }

  jobs.sort((a, b) => {
    return b.profit - a.profit;
  });

  let res = [];
  for (let i = 0; i < jobs.length; i++) {
    let currDeadline = jobs[i].deadline;
    if (currDeadline <= days) {
      for (let j = currDeadline; j > 0; j--) {
        if (avail[j] == undefined) {
          res.push({ name: jobs[i].name, day: j });
          avail[j] = true;
          break;
        }
      }
    }
  }

  return res;
}

console.log(
  maxProfits(
    ['a', 'b', 'c', 'd', 'e'],
    [100, 19, 27, 25, 3],
    [2, 1, 2, 1, 3],
    5
  )
);
