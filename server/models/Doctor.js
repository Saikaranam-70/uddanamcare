import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    languages: {
      type: [String],
      required: true,
    },
    availability: {
      days: {
        type: [String],
        required: true,
      },
      hours: {
        type: String,
        required: true,
      },
    },
    image: {
      type: String,
      required: true,
    },
    socialLinks: {
      instagram: String,
      facebook: String,
      linkedin: String,
      email: String,
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;
