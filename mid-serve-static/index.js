//Carreon,John Zacqueo I.
//1.
//2.
//3.


const express = require('express');
const app = express();

//4. use the middleware required for serving static
app.use(express.static('public'));

//create the route to serve a static index.html

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');

});

//Setting the listener to ENV PORT info 
const port = process.nextTick.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

