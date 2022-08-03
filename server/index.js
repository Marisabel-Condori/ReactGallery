import express  from "express";
const app = express()

app.set('port', process.env.PORT || 4000);
app.get('/', (req, res) => res.send('hello world'))
app.listen(app.get('port'))
console.log('Server on port: ', app.get('port'))