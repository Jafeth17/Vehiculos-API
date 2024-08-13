const Vehiculo = require('../models/vehiculo');

// Crear un nuevo vehículo
exports.crearVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.create(req.body);
        res.status(201).json(vehiculo);
    } catch (error) {
        res.status(400).json({ error: error.message });
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
        const [updated] = await Vehiculo.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const vehiculo = await Vehiculo.findByPk(req.params.id);
            res.json(vehiculo);
        } else {
            res.status(404).json({ error: 'Vehículo no encontrado' });
        }
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
