const express = require('express');
const sequelize = require('./config/db'); // Asegúrate de que la ruta sea correcta
const Vehiculo = require('./models/vehiculo');
const EntradaSalida = require('./models/EntradaSalida');

const vehiculosRouter = require('./routes/vehiculos');
const entradasSalidasRouter = require('./routes/entradasSalidas');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Registrar las rutas
app.use('/vehiculos', vehiculosRouter);
app.use('/entradas-salidas', entradasSalidasRouter);

// Sincronizar los modelos con la base de datos
sequelize.sync({ force: false })
    .then(() => {
        console.log('¡Base de datos y tablas creadas!');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error al sincronizar la base de datos:', err);
    });
