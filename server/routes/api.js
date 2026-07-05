import express from 'express';
import { getDoctors } from '../controllers/doctorController.js';
import { createAppointment, getAppointments } from '../controllers/appointmentController.js';
import { createContactRequest } from '../controllers/contactController.js';
import { getTestimonials } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/doctors', getDoctors);
router.get('/testimonials', getTestimonials);
router.post('/appointments', createAppointment);
router.get('/appointments', getAppointments);
router.post('/contact', createContactRequest);

export default router;
