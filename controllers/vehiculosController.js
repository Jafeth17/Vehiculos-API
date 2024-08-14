const Vehiculo = require('../models/vehiculo');

// Crear un nuevo vehículo
exports.crearVehiculo = async (req, res) => {
    try {
        const { placa } = req.body;
        const vehiculoExistente = await Vehiculo.findOne({ where: { placa } });
        
        if (vehiculoExistente) {
            return res.status(400).json({ error: 'Ya existe un vehículo con esta placa' });
        }

        const vehiculo = await Vehiculo.create(req.body);
        res.status(201).json(vehiculo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener todos los vehículos
exports.obtenerVehiculos = async (req, res) => {
    try {
        const vehiculos = await Vehiculo.findAll();
        res.json(vehiculos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un vehículo
exports.actualizarVehiculo = async (req, res) => {
    try {
        const { id } = req.params;
        const { placa } = req.body;
        const vehiculoExistente = await Vehiculo.findOne({ where: { placa, id: { [Op.ne]: id } } });

        if (vehiculoExistente) {
            return res.status(400).json({ error: 'Ya existe un vehículo con esta placa' });
        }

        const vehiculo = await Vehiculo.findByPk(id);
        if (!vehiculo) {
            return res.status(404).json({ error: 'Vehículo no encontrado' });
        }

        await vehiculo.update(req.body);
        res.json(vehiculo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un vehículo
exports.eliminarVehiculo = async (req, res) => {
    try {
        const deleted = await Vehiculo.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Vehículo eliminado' });
        } else {
            res.status(404).json({ error: 'Vehículo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
