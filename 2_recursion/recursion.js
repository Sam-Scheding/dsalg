
const print = (idx, list) => {

  if(list[idx] === undefined){ return; }

  console.log(list[idx]);

  print(idx+1, list);
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

print(0, arr);
