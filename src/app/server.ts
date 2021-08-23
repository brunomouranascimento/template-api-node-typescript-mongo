import app from './app'

const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`✅ - API running on port ${port}`)
  console.log('➖ - Attempting to connect to Database')
})
