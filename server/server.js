import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {store as createStore} from '../src/createStore'
import {Provider} from 'react-redux';

import App from '../src/App'

const PORT = 8080
const app = express()

const router = express.Router()

const serverRenderer = async (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', async (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    
    let preloadedState = await createStore.getState()
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${renderToString(<Provider store={createStore}>
          <App />
        </Provider>)}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/recipes/server-rendering/#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>`
      )
    )
  })
}
router.use('^/$', serverRenderer)

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

// tell the app to use the above rules
app.use(router)

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})