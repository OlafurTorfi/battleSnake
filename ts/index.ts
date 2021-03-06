import { json } from 'body-parser'
import * as express from 'express'
import * as logger from 'morgan'
const app = express()
import { findMove } from './snake/findMove'
import { fallbackHandler, notFoundHandler, genericErrorHandler, poweredByHandler } from './handlers'

// For deployment to Heroku, the port needs to be set using ENV, so
// we check for the port number in process.env
app.set('port', process.env.PORT || 9001)

app.enable('verbose errors')

app.use(logger('dev'))
app.use(json())
app.use(poweredByHandler)

// --- SNAKE LOGIC GOES BELOW THIS LINE ---

// Handle POST request to '/start'
app.post('/start', (request, response) => {
  // NOTE: Do something here to start the game

  // Response data
  const data = {
    color: '#1351d8',
    headType: 'silly',
    tailType: 'curled',
  }

  return response.json(data)
})
// Handle POST request to '/move'
let printBoard = true
app.post('/move', (request, response) => {
  // NOTE: Do something here to generate your move
  if (printBoard) {
    console.log('InitialBoard ', JSON.stringify(request.body.board))
    printBoard = false
  }
  // Response data
  const data = {
    move: findMove(request.body), // one of: ['up','down','left','right']
  }

  return response.json(data)
})

app.post('/end', (request, response) => {
  // NOTE: Any cleanup when a game is complete.
  return response.json({})
})

app.post('/ping', (request, response) => {
  // Used for checking if this snake is still alive.
  return response.json({})
})

// --- SNAKE LOGIC GOES ABOVE THIS LINE ---

app.use('*', fallbackHandler)
app.use(notFoundHandler)
app.use(genericErrorHandler)

app.listen(app.get('port'), () => {
  console.log('Server listening on port %s', app.get('port'))
})
