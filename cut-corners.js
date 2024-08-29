function getIntPart(num) {
    if (num < 0) {
      num = -num;
    }
    let intPart = 0;
    while (num >= 1) {
      intPart++;
      num -= 1;
    }
    return intPart;
}
  
function round(num) {
    let intPart = getIntPart(num);
    let fracPart = num - intPart;
    if (num < 0) {
      intPart = -intPart;
      if (fracPart <= -0.5) {
        return intPart - 1;
      } else {
        return intPart;
      }
    } else {
      if (fracPart >= 0.5) {
        return intPart + 1;
      } else {
        return intPart;
      }
    }
}
  
function ceil(num) {
    let intPart = getIntPart(num);
    let fracPart = num - intPart;
    if (num < 0) {
      intPart = -intPart;
    }
    if (fracPart > 0) {
      return intPart + 1;
    } else {
      return intPart;
    }
}
  
function floor(num) {
    let intPart = getIntPart(num);
    let fracPart = num - intPart;
    if (num < 0) {
      intPart = -intPart;
    }
    if (fracPart < 0) {
      return intPart - 1;
    } else {
      return intPart;
    }
}
  
function trunc(num) {
    let intPart = getIntPart(num);
    if (num < 0) {
      return -intPart;
    } else {
      return intPart;
    }
}
  

// const nums = [3.7, -3.7, 3.1, -3.1];
// console.log(nums.map(round));
// console.log(nums.map(floor));
// console.log(nums.map(trunc));
// console.log(nums.map(ceil));