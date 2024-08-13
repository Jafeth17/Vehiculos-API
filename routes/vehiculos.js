const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const vehiculosController = require('../controllers/vehiculosController');

// Validaciones para Vehículos
const validarVehiculo = [
    body('marca').notEmpty().withMessage('La marca es obligatoria'),
    body('modelo').notEmpty().withMessage('El modelo es obligatorio'),
    body('placa')
        .notEmpty().withMessage('La placa es obligatoria')
        .isAlphanumeric().withMessage('La placa debe ser alfanumérica')
];

// Crear un nuevo vehículo
router.post('/', validarVehiculo, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}, vehiculosController.crearVehiculo);

// Obtener todos los vehículos
router.get('/', vehiculosController.obtenerVehiculos);

// Actualizar un vehículo
router.put('/:id', validarVehiculo, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}, vehiculosController.actualizarVehiculo);

// Eliminar un vehículo
router.delete('/:id', vehiculosController.eliminarVehiculo);

module.exports = router;
