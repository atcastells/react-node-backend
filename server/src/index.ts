import app from "./app";

const url = process.env.URL || 'http://localhost'
const port = process.env.PORT || 3001

app.listen(port, () => {
    return console.log(`server is listening on port ${port}. \n Open ${url}:${port}`)
})
