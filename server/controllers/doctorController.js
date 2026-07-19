import mongoose from 'mongoose';
import Doctor from '../models/Doctor.js';

const fallbackDoctors = [
  {
    _id: 'demo-doctor-1',
    name: 'Dr. Sreeja Rao',
    specialty: 'General Medicine',
    experience: '15 years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
  },
  {
    _id: 'demo-doctor-2',
    name: 'Dr. Rahul Kumar',
    specialty: 'Cardiology',
    experience: '12 years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
  },
];

export const getDoctors = async (req, res) => {
  if (mongoose.connection.readyState !== 1) {
    return res.json(fallbackDoctors);
  }

  try {
    const doctors = await Doctor.find({});
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Server Error fetching doctors', error: error.message });
  }
};
