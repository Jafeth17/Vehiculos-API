const EntradaSalida = require('../models/EntradaSalida');
const vehiculo = require('../models/vehiculo');

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
            include: [{
                model: vehiculo,
                attributes: ['placa'], 
            }]
        });
        res.json(entradasSalidas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.actualizarEntradaSalida = async (req, res) => {
    const { id } = req.params;

    try {
        const entradaSalida = await EntradaSalida.findByPk(id);
        if (!entradaSalida) {
            return res.status(404).json({ error: 'Entrada/Salida no encontrada' });
        }

        await entradaSalida.update(req.body);
        res.json(entradaSalida);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.eliminarEntradaSalida = async (req, res) => {
    const { id } = req.params;

    try {
        const entradaSalida = await EntradaSalida.findByPk(id);
        if (!entradaSalida) {
            return res.status(404).json({ error: 'Entrada/Salida no encontrada' });
        }

        await entradaSalida.destroy();
        res.status(204).end();  
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
