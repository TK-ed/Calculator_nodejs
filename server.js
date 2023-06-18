import express from 'express'
import bodyParser from 'body-parser'
import path from 'path';
import {fileURLToPath} from 'url';

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// __dirname not defined 
// 👇️ "C:\Projects\Calculator_nodejs\server.js"
const __filename = fileURLToPath(import.meta.url);
// console.log(__filename)

// // 👇️ "directory-name 👉️ C:\Projects\Calculator_nodejs"
const __dirname = path.dirname(__filename);
// console.log('directory-name 👉️', __dirname);

// // 👇️ "C:\Projects\Calculator_nodejs\dist\index.html"
// console.log(path.join(__dirname, '/dist', 'index.html'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res) {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)
    var result = num1 + num2
    console.log(res);
    // res.send('The result is ' + result)
    res.status(200).send('The result is ' + result);
})

app.listen(3000, () => {
    console.log(`Server listenin' on port 3000!`)
})




