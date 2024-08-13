const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const entradasSalidasController = require('../controllers/entradasSalidasController');

// Validaciones para Entradas/Salidas
const validarEntradaSalida = [
    body('nombreMotorista').notEmpty().withMessage('El nombre del motorista es obligatorio'),
    body('fecha').isISO8601().withMessage('La fecha debe tener un formato válido (YYYY-MM-DD)'),
    body('hora').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('La hora debe estar en formato HH:mm'),
    body('kilometraje').isInt({ min: 0 }).withMessage('El kilometraje debe ser un número entero positivo'),
    body('vehiculoId').notEmpty().withMessage('El ID del vehículo es obligatorio')
];

// Registrar una entrada/salida
router.post('/', validarEntradaSalida, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}, entradasSalidasController.crearEntradaSalida);

// Obtener todas las entradas/salidas
router.get('/', entradasSalidasController.obtenerEntradasSalidas);

module.exports = router;
