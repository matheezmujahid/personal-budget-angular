const express = require('express');
const fileSystem = require('fs');
const app = express();
const port = 3000;
const importJSON = fileSystem.readFileSync('budgetdata.json', 'utf8');
const budgetData = JSON.parse(importJSON);
const importJSOND3Js = fileSystem.readFileSync('budgetDataD3js.json', 'utf8');
const budgetDataD3Js = JSON.parse(importJSOND3Js);

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/budget', (req, res) => {
    res.json(budgetData);
});
app.get('/budgetD3js', (req, res) => {
    res.json(budgetDataD3Js);
});


app.use('/', express.static('public'));