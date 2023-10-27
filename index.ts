import express from "express"
import { config } from "dotenv"
config()
const target = process.env["TARGET"]
const app = express()
app.use((req, res) => {
  console.log("redirecting to " + target + req.path)
  res.redirect(target + req.path)
})

app.listen(process.env["PORT"] || 3003, () =>
  console.log("redireting to " + target)
)
