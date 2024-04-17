import express from 'express';

const app = express();

app.listen(5001, () => console.log("Api Run on 5001"));

app.get('/', (req, res) => {
    res.json("Api Running, Base Route")
});