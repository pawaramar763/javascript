let n1 = 0;
let n2 = 1;
// console.log(n1);
// console.log(n2);
let fabo = `${n1} ${n2}` + " ";

for (let index = 0; index <= 10; index++) {
  let next = n1 + n2;
  n1 = n2;
  n2 = next;
  // console.log(next);
  fabo = fabo + " " + next;
}

console.log(fabo);

//0  1  1  2  3  5
