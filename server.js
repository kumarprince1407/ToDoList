//server.js
const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors'); //Add CORS middleware

const app = express();

const port = 3002;

app.use(bodyParser.json());
app.use(cors()); //Enable CORS

let todolistData = [];

app.get('/todolist/', (req, res) =>{

    // const data = [
    //     { userid: 101, id: 1, title: 'Title 1', completed: false },
    //     { userid: 102, id: 2, title: 'Title 2', completed: true },

    // ];

    res.json(todolistData);
});

app.post('/todolist', (req, res) =>{
    const receivedData = req.body;
    console.log('Received data:', receivedData);

    //Process the data or save it to a database
    todolistData.push(receivedData);

    res.status(200).send('Data received successfully');
});

app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`);
});

