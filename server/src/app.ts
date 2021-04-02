import express, { json } from 'express';

const url = process.env.URL || 'http://localhost'
const app = express();
const port  = 3000;

app.get('/', (req, res) => {
    res.send('Node / Angular test')
})

app.listen(port, () => {
	return console.log(`server is listening on port ${port}. \n Open ${url}:${port}`)
})
