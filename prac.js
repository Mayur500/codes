function solver(curr, k, k1) {
  let arr = [];
  if (curr == 1) {
    let temp = (k + k1) / 2;
    arr.push(temp);
  } else if (curr == 2) {
    let y = (k + 2 * k1) / 3;
    let x = (2 * k + k1) / 3;
    arr.push(x);
    arr.push(y);
  } else if (curr == 3) {
    let x = (3 * k + k1) / 4;
    let y = (k + k1) / 2;
    let z = (k + 3 * k1) / 4;
    arr.push(x);
    arr.push(y);
    arr.push(z);
  } else if (curr == 4) {
    let a = (4 * k - k1) / 5;
    let b = (3 * k - 2 * k1) / 5;
    let c = (2 * k - 3 * k1) / 5;
    let d = (k - 4 * k1) / 5;
    arr.push(a);
    arr.push(b);
    arr.push(c);
    arr.push(d);
  } else {
    let a = 5 * k + k1;
    let b = 4 * k + k1;
    let c = 3 * k + k1;
    let d = 2 * k + k1;
    let e = k + k1;
    arr.push(a);
    arr.push(b);
    arr.push(c);
    arr.push(d);
    arr.push(e);
  }
  return arr;
}

function solution(D) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const obj = {
    0: "MON",
    1: "TUE",
    2: "WED",
    3: "THU",
    4: "FRI",
    5: "SAT",
    6: "SUN",
  };
  let ans = {
    MON: 0,
    TUE: 0,
    WED: 0,
    THU: 0,
    FRI: 0,
    SAT: 0,
    SUN: 0,
  };
  for (const day in D) {
    let dates = new Date(day);
    let date = dates.getDay();

    ans[days[date]] = ans[days[date]] + D[day];
  }
  let left, leftkey;
  let count = 0;
  let curr = 0;
  for (const an in ans) {
    if (ans[an] == 0) {
      curr++;
      count++;
      continue;
    }

    if (curr > 0) {
      let arr = solver(curr, left, ans[[an]]);
      leftkey++;
      arr.forEach(function (val) {
        ans[obj[leftkey]] = val;
        leftkey++;
      });
      curr = 0;
    }
    left = ans[an];
    leftkey = count;
    count++;
  }
  console.log(ans);
}
solution({
  "2020-01-01": 6,
  "2020-01-04": 12,
  "2020-01-05": 14,
  "2020-01-06": 2,
  "2020-01-07": 4,
});
