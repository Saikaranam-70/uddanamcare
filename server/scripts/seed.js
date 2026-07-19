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
    name: 'Bendi Apparao (Sompeta)',
    rating: 5,
    review: 'Dr. Gorakala Giribabu is a lifesaver! I was suffering from chronic kidney issues. The treatment and dialysis facilities here at Uddanam Care Hospital are top-notch and highly affordable. We saved so much money and travel time compared to city hospitals.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Savara Kamamma (Mandasa)',
    rating: 5,
    review: 'We admitted my grandmother in the in-patient ward. The rooms are clean, nursing care is prompt 24/7, and the overall tariff is very reasonable. Under one roof, we got lab tests, digital X-Ray, and generic pharmacy medicines. Uddanam Care Hospital is a blessing for our local community.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Chintada Venkata Ramana (Palasa)',
    rating: 5,
    review: 'Last month, we had an emergency and rushed my brother to their 24/7 casualty unit. The emergency response was immediate and the doctor was very professional. Very transparent billing and excellent value for money.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Gedela Suryanarayana (Kaviti)',
    rating: 5,
    review: 'Having advanced diagnostic labs, digital X-ray, and senior specialists in Sompeta is an absolute game-changer. We no longer have to spend time and money travelling to Visakhapatnam or Bhubaneswar. Highly recommend Uddanam Care Hospital!',
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
