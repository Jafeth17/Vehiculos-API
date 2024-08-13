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
    body('vehiculoId').notEmpty().withMessage('El ID del vehículo es obligatorio'),
    body('tipo').isIn(['entrada', 'salida']).withMessage('El tipo debe ser "entrada" o "salida"')  // Nueva validación
];

const manejarErrores = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Registrar una entrada/salida
router.post('/', validarEntradaSalida, manejarErrores, entradasSalidasController.crearEntradaSalida);

// Obtener todas las entradas/salidas
router.get('/', entradasSalidasController.obtenerEntradasSalidas);

// Actualizar una entrada/salida
router.put('/:id', validarEntradaSalida, manejarErrores, entradasSalidasController.actualizarEntradaSalida);

// Eliminar una entrada/salida
router.delete('/:id', entradasSalidasController.eliminarEntradaSalida);

module.exports = router;
