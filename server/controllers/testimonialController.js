import Testimonial from '../models/Testimonial.js';

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({});
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Server Error fetching testimonials', error: error.message });
  }
};
