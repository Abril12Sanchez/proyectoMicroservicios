// /backend/reservas/reservas.js
const express = require('express');
const router = express.Router();
const db = require('./firebase-config');

// Creación de una reserva
router.post('/create', async (req, res) => {
  const { usuarioId, rideId, reservaTime } = req.body;

  if (!usuarioId || !rideId || !reservaTime) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const reservaRef = db.collection('reservas').doc(); 
    await reservaRef.set({
      usuarioId,
      rideId,
      reservaTime,
      status: 'pendiente',
      crearAt: new Date().toISOString()
    });

    res.status(201).json({ message: 'Reserva creada con éxito', reservationId: reservaRef.id });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la reserva', error });
  }
});

// Obtener una reserva por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const reserva = await db.collection('reservas').doc(id).get();
    if (!reserva.exists) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }

    res.status(200).json({ reserva: reserva.data() });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la reserva', error });
  }
});

module.exports = router;
