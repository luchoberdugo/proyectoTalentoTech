const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const multer = require('multer'); // Importar multer

const app = express();
const PORT = 3000;

// Configuración de multer para guardar las imágenes
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname); // Nombrar los archivos con un sufijo único
    }
});

const upload = multer({ storage: storage }); // Configurar multer con el almacenamiento

// Configuración de conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'solfit1',         // Usuario por defecto en XAMPP
    password: '123456',         // Sin contraseña por defecto
    database: 'solfit1',   // Nombre de la base de datos
});

// Conectar a la base de datos
db.connect(err => {
    if (err) {
        console.error('Error de conexión: ' + err.stack); // Imprimir el error en la consola
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname))); // Servir archivos estáticos

// Servir archivos subidos
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Servir las páginas HTML
app.get('/recetas', (req, res) => {
    res.sendFile(path.join(__dirname, 'recetas.html')); // Ruta para la página de recetas
});

// API para crear receta
app.post('/api/recetas', (req, res) => {
    console.log(req.body); // Agregar esto para depurar
    const { nombre, imagen, descripcion, ingredientes, pasos } = req.body;
    db.query('INSERT INTO recetas (nombre, imagen, descripcion, ingredientes, pasos) VALUES (?, ?, ?, ?, ?)', 
    [nombre, imagen, descripcion, ingredientes, pasos], (err) => {
        if (err) {
            console.error('Error al crear la receta:', err);
            return res.status(500).send('Error al guardar la receta');
        }
        res.sendStatus(201); // Respuesta OK
    });
});


// API para obtener recetas
app.get('/api/recetas', (req, res) => {
    db.query('SELECT * FROM recetas', (err, results) => {
        if (err) {
            console.error('Error al obtener recetas:', err);
            return res.status(500).send('Error al obtener las recetas');
        }
        res.json(results);
    });
});

// API para obtener una receta por nombre
app.get('/api/recetas/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    db.query('SELECT * FROM recetas WHERE nombre = ?', [nombre], (err, results) => {
        if (err) {
            console.error('Error al obtener la receta:', err);
            return res.status(500).send('Error al obtener la receta');
        }
        if (results.length === 0) {
            return res.status(404).send('Receta no encontrada');
        }
        res.json(results[0]); // Enviar solo el primer resultado
    });
});


// API para editar receta
app.put('/api/recetas/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const { imagen, descripcion, ingredientes, pasos } = req.body;
    db.query('UPDATE recetas SET imagen = ?, descripcion = ?, ingredientes = ?, pasos = ? WHERE nombre = ?', 
    [imagen, descripcion, ingredientes, pasos, nombre], (err) => {
        if (err) throw err;
        res.sendStatus(200);
    });
});

// API para eliminar receta
app.delete('/api/recetas/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    db.query('DELETE FROM recetas WHERE nombre = ?', [nombre], (err) => {
        if (err) throw err;
        res.sendStatus(204);
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});