function receivesAFunction (spy) {
    return spy()
}

function returnsANamedFunction() {
    function innerFunction () {
      console.log("spy")
    }
    return innerFunction
}


function returnsAnAnonymousFunction() {
    return function () {
      console.log('over')
    }
}
returnsAnAnonymousFunction()


















// function Spy () {
//   console.log("This works")
// }

// function receivesAFunction (Spy) {
//     return Spy()
// }
// receivesAFunction(Spy)


// //
// function returnsANamedFunction () {
//   function innerFunction () {
//     console.log('Inner')
//   }
//   return innerFunction
// }
// returnsANamedFunction()
// //



// function returnsAnAnonymousFunction () {
// return function () {console.log("please")}
// }
// console.log(returnsAnAnonymousFunction())

// // function fn (name) {
// // let fn=returnsAnAnonymousFunction()
// //   return fn
// // }