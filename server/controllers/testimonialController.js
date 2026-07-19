import mongoose from 'mongoose';
import Testimonial from '../models/Testimonial.js';

const fallbackTestimonials = [
  {
    _id: 'demo-testimonial-1',
    name: 'Madhavi',
    feedback: 'Excellent care and very friendly staff. The appointment process was smooth and quick.',
    rating: 5,
  },
  {
    _id: 'demo-testimonial-2',
    name: 'Ramesh',
    feedback: 'Clean facility and professional doctors. I felt comfortable throughout my visit.',
    rating: 5,
  },
];

export const getTestimonials = async (req, res) => {
  if (mongoose.connection.readyState !== 1) {
    return res.json(fallbackTestimonials);
  }

  try {
    const testimonials = await Testimonial.find({});
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Server Error fetching testimonials', error: error.message });
  }
};
