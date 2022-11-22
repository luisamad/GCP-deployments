const express = require('express');

const app = express();
const PORT = 3078;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Backend home, try /hello");
});


app.get('/hello', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Your backend is running properly!</h1>");
})


app.listen(PORT, (error) => {
    if (!error)
        console.info("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.error("Error occurred, server can't start", error);
});