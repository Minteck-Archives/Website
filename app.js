
// Imports
const express = require('express')
const app = express()

// Port definition
if (typeof process.env.PORT != "undefined") {
    port = process.env.PORT;
} else {
    port = 8080;
}

// Static
app.use(express.static('public'));

// Renderer
app.set('views', './views');
app.set('view engine', 'ejs');

// Views
app.get('', (req, res) => {
    res.render('index', { req: req, fs: require('fs') })
})

// Startup
app.listen(port, () => console.info(`Listening on http://localhost:${port}`))