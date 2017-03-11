// require dependencies
let mongoose = require('mongoose')
let request = require('request-promise')
// require db models
let Movie = require('../models/Movie.js')
let User = require('../models/User.js')
let findFirstFive = (req, res) => {
//   let gbOptions = {
//     uri: 'http://api-public.guidebox.com/v2/movies',
//     headers: {
//       'User-Agent': 'Request-Promise',
//       'Authorization': '53d39189c3ecb7ab6757b6bc311f4e5b76c8f792'
//     },
//     json: true // Automatically parses the JSON string in the response
//   }
//   let popArr = []
//   request(gbOptions)
//  .then(resp => {
//    let length = resp.results.length
//    let tempArr = resp.results
//    let randomize = respArr => {
//      return Math.floor(Math.random() * length)
//    }
//    let i = 0
//    while (i < 5) {
//      let n = randomize(tempArr)
//      popArr.push(tempArr[n])
//      tempArr.splice(n, 1)
//      length = tempArr.length
//      i++
//    }
//    let resultArr = []
//    let checkForResult = arr => {
//      if (arr.length === 5) {
//        res.status(200).send(resultArr)
//      }
//    }
//    popArr.forEach(movie => {
//      console.log( 'testing for bug id = ', movie, movie.id)
//      Movie.find({guideboxId: movie.id})
//      .then(resp => {
//        console.log( 'testing for bug = ', resp[0].title, resp[0].thumbnail)
//        resultArr.push(resp[0])
//        checkForResult(resultArr)
//      })
//      .catch(function (err) {
//     console.log('error is', err)
//   })
//    })
//  })
Movie.find({}).limit(5)
.then(resp => {
  console.log('testing jesse 4 = ', resp)
  let resultArr = []
  resultArr.push(resp)
  res.status(200).send(resp)
})
}
module.exports = findFirstFive