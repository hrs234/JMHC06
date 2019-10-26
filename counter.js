let data = [];

let generateNum = many => {
  data = [];
  for (let a = 1; a <= many; a++) {
    data.push(a);
  }
};
generateNum(60);

// left rotator
let rightRotateOne = arrData => {
  let a;
  let temp = arrData[0];
  for (a = 0; a <= arrData.length - 1; a++) {
    arrData[a] = arrData[a + 1];
  }
  arrData[a - 1] = temp;
};

// right rotator
let leftRotateOne = arrData => {
  let a;
  let temp = arrData[arrData.length - 1];
  for (a = arrData.length - 1; a >= 0; a--) {
    arrData[a] = arrData[a - 1];
  }
  arrData[0] = temp;
};

let rotator = (mode, many) => {
  for (let rotate = 0; rotate < many; rotate++) {
    if (mode === "right") {
      rightRotateOne(data);
    } else {
      leftRotateOne(data);
    }
  }
};

let counterDecision = code => {
  for (let init = 1; init <= code.length - 1; init++) {
    if (code[init] == "a") {
      rotator("right", 1);
    } else if (code[init] == "i") {
      rotator("left", 1);
    }
  }
};

counterDecision("aaaiaiaiiiiaaai");
console.log("#h0: ", data[data.length - 1]);
generateNum(60);
counterDecision("aaaaaaaaaaaaaaaaaaaaaa");
console.log("#h1: ", data[data.length - 1]);
generateNum(60);
counterDecision("aiaiaiaiaiaiaiai");
console.log("#h2: ", data[data.length - 1]);
generateNum(60);
counterDecision("aaiiaa");
console.log("#h3: ", data[data.length - 1]);
