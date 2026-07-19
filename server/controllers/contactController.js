import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

export const createContactRequest = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Please enter a valid email address' });
    }

    if (mongoose.connection.readyState !== 1) {
      return res.status(201).json({
        success: true,
        message: 'Message sent successfully! We will get back to you shortly. (demo mode)',
        data: {
          name,
          email,
          phone,
          subject,
          message,
          createdAt: new Date().toISOString(),
        },
      });
    }

    const contact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
    });

    const savedContact = await contact.save();
    res.status(201).json({
      success: true,
      message: 'Message sent successfully! We will get back to you shortly.',
      data: savedContact,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error saving contact query', error: error.message });
  }
};
