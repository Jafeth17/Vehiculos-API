const EntradaSalida = require('../models/EntradaSalida');

// Registrar una entrada/salida
exports.crearEntradaSalida = async (req, res) => {
    try {
        const entradaSalida = await EntradaSalida.create(req.body);
        res.status(201).json(entradaSalida);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las entradas/salidas con opción de filtrado
exports.obtenerEntradasSalidas = async (req, res) => {
    const { fecha, vehiculoId, nombreMotorista } = req.query;
    let filter = {};

    if (fecha) filter.fecha = fecha;
    if (vehiculoId) filter.vehiculoId = vehiculoId;
    if (nombreMotorista) filter.nombreMotorista = nombreMotorista;

    try {
        const entradasSalidas = await EntradaSalida.findAll({
            where: filter,
        });
        res.json(entradasSalidas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
