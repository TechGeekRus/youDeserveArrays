/******************
 * YOUR CODE HERE *
 ******************/
// 1. `getFirstItemFrom
function getFirstItemFrom(arr){
  return arr[0]
}

// 2. `getLastItemFrom
function getLastItemFrom(arr){
  return arr[arr.length - 1] 
}

// 3. `getIndex3
function getIndex3(arr){
  if (arr.length > 3) {
  return arr[3]
  } else {
   return arr[arr.length-1]
  }

}

// 4. `isLongList
function isLongList(arr){
  return arr.length >= 10
}

// 5. `firstItemIsNumber
function firstItemIsNumber(arr){
  if (arr && arr.length > 0 && typeof arr[0] === 'number'){
    return true
  }
    return false
}


// 6.  secondCharOThirdString
function secondCharOfThirdString(arr){
return  arr[2] [1] 
 }
 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
