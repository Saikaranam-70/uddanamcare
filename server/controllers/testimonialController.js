import mongoose from 'mongoose';
import Testimonial from '../models/Testimonial.js';

const fallbackTestimonials = [
  {
    _id: 'demo-testimonial-1',
    name: 'Bendi Apparao (Sompeta)',
    feedback: 'Dr. Gorakala Giribabu is a lifesaver! I was suffering from chronic kidney issues. The treatment and dialysis facilities here at Uddanam Care Hospital are top-notch and highly affordable. We saved so much money and travel time compared to city hospitals.',
    rating: 5,
  },
  {
    _id: 'demo-testimonial-2',
    name: 'Savara Kamamma (Mandasa)',
    feedback: 'We admitted my grandmother in the in-patient ward. The rooms are clean, nursing care is prompt 24/7, and the overall tariff is very reasonable. Under one roof, we got lab tests, digital X-Ray, and generic pharmacy medicines. Uddanam Care Hospital is a blessing for our local community.',
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
