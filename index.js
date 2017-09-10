const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var a = [...Kittens,name]
}