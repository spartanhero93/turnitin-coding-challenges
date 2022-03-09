// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay (ms) {
  return new Promise(res => setTimeout(res, ms))
}

// el: element node object
// moves the element to the right by 100px over a duration of 1 second
function animateRight(el) {
  const delay = i => setTimeout(() => {el.style.left = `${i}px`}, 100 * i);
  let count = 1
  el.style.position = 'relative'
  
  while(count <= 100){
    delay(count)
    count++
  }
}

// xs: array
// returns: a new array, with unique items
function removeDuplicates(xs) {
  return Array.from(new Set(xs))
}