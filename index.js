const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
dotenv.config({ path: "./config.env" });


const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json());


const connection = require('./db/db')

app.use(require("./router/router"));

// app.get( '/', (req, res) => {
//     res.send(`Hello`);
//   });

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})