// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = []
  
  for(var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  
  return array
}

function johnLennonFacts(facts) {
  var array = []
  var i = 0
  
  while (i < facts.length) {
    array.push(facts[i] + "!!!")
    i ++
  }
  return array
}

function iLoveTheBeatles(num) {
  var array = []
  var i = num
  
  do {
    array.push("I love the Beatles!")
    i ++
  } while (i < 15) 
return array
}