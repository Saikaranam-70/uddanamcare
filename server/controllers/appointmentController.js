import Appointment from '../models/Appointment.js';

export const createAppointment = async (req, res) => {
  try {
    const { name, phone, email, doctor, department, date, time, message } = req.body;

    // Simple validation
    if (!name || !phone || !email || !doctor || !department || !date || !time) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Please enter a valid email address' });
    }

    // Phone regex validation (minimum 10 digits)
    const phoneRegex = /^[+]?[0-9]{10,13}$/;
    if (!phoneRegex.test(phone.replace(/[\s-()]/g, ''))) {
      return res.status(400).json({ message: 'Please enter a valid phone number' });
    }

    const appointment = new Appointment({
      name,
      phone,
      email,
      doctor,
      department,
      date: new Date(date),
      time,
      message,
    });

    const savedAppointment = await appointment.save();
    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully!',
      data: savedAppointment,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error booking appointment', error: error.message });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({}).sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server Error fetching appointments', error: error.message });
  }
};
