import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Doctor from '../models/Doctor.js';
import Testimonial from '../models/Testimonial.js';

dotenv.config();

const doctors = [
  {
    name: 'Dr. Gorakala Giribabu',
    specialization: 'Senior Nephrologist & Kidney Transplant Specialist',
    qualification: 'M.B.B.S, M.D. (Gen Med), D.M. (Nephrology)',
    experience: 12,
    languages: ['English', 'Telugu', 'Hindi'],
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      hours: '09:00 AM - 01:00 PM, 04:00 PM - 08:00 PM',
    },
    image: '/doctor.jpeg',
    socialLinks: {
      instagram: 'https://www.instagram.com/uddanamcarehealthclinic',
      facebook: '#',
      linkedin: '#',
      email: 'dr.giribabu@uddanamclinic.com',
    },
  },
  {
    name: 'Dr. Sunita Patnaik',
    specialization: 'Consultant Pediatrician',
    qualification: 'M.B.B.S, D.C.H (Pediatrics)',
    experience: 8,
    languages: ['English', 'Odia', 'Hindi', 'Telugu'],
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      hours: '10:00 AM - 02:00 PM, 05:00 PM - 07:00 PM',
    },
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
    socialLinks: {
      instagram: '#',
      facebook: '#',
      linkedin: '#',
      email: 'sunita.patnaik@uddanamclinic.com',
    },
  },
  {
    name: 'Dr. Amit Mishra',
    specialization: 'Orthopedic Surgeon',
    qualification: 'M.B.B.S, M.S. (Orthopedics)',
    experience: 10,
    languages: ['English', 'Hindi', 'Odia'],
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      hours: '11:00 AM - 03:00 PM, 06:00 PM - 08:00 PM',
    },
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
    socialLinks: {
      instagram: '#',
      facebook: '#',
      linkedin: '#',
      email: 'amit.mishra@uddanamclinic.com',
    },
  },
  {
    name: 'Dr. L. Gayatri',
    specialization: 'Obstetrician & Gynecologist',
    qualification: 'M.B.B.S, D.G.O, M.D. (Obstetrics & Gynecology)',
    experience: 14,
    languages: ['English', 'Telugu', 'Hindi'],
    availability: {
      days: ['Tuesday', 'Thursday', 'Saturday'],
      hours: '09:00 AM - 01:00 PM, 03:00 PM - 06:00 PM',
    },
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=300',
    socialLinks: {
      instagram: '#',
      facebook: '#',
      linkedin: '#',
      email: 'gayatri.l@uddanamclinic.com',
    },
  },
];

const testimonials = [
  {
    name: 'K. Rama Rao',
    rating: 5,
    review: 'Dr. Gorakala Giribabu is extremely patient and knowledgeable. He diagnosed my cardiovascular issues quickly and guided me through the treatment process. The clinic facilities, especially the ECG and Pharmacy, are excellent and clean.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Savitri Devi',
    rating: 5,
    review: 'The best clinic in Sompeta. Having diagnostic labs, X-ray, and Pharmacy under one roof saves so much time. The staff is polite, and the doctor is very reassuring. Strongly recommended!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'P. Manoj Kumar',
    rating: 4,
    review: 'Very professional doctors. I brought my son here for pediatric consultation with Dr. Sunita Patnaik. She was great with him, spoke Odia/Telugu fluently which made him comfortable, and the medicine was effective.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Minati Behera',
    rating: 5,
    review: 'Clean and modern clinic. We received very fast reports from the laboratory. The casualty service was prompt when my father had an emergency last month. Cashless insurance facility was very helpful.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB for seeding...');

    // Clear existing data
    await Doctor.deleteMany();
    await Testimonial.deleteMany();
    console.log('Existing Doctors and Testimonials deleted.');

    // Insert new data
    await Doctor.insertMany(doctors);
    await Testimonial.insertMany(testimonials);
    console.log('Doctors and Testimonials seeded successfully!');

    mongoose.connection.close();
    console.log('Database connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
