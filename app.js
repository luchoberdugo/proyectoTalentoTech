const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// Rutas
app.get('/', (req, res) => {
    res.render('index', { title: 'SolesFit - Inicio' });
});

// Agrega otras rutas según sea necesario

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});