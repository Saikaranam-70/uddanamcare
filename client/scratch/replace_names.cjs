const fs = require('fs');

const filesToUpdate = [
  {
    path: 'c:/Users/KARANAM SAI/Desktop/Clinic/client/src/components/Sections/Booking.jsx',
    replacements: [
      { from: 'Dr. B. Rajesh Kumar', to: 'Dr. Gorakala Giribabu' },
      { from: 'dept: "Cardiology"', to: 'dept: "General Medicine"' }
    ]
  },
  {
    path: 'c:/Users/KARANAM SAI/Desktop/Clinic/client/src/components/Sections/Doctors.jsx',
    replacements: [
      { from: 'Dr. B. Rajesh Kumar', to: 'Dr. Gorakala Giribabu' },
      { from: 'General Physician & Cardiologist', to: 'Senior Nephrologist & Kidney Transplant Specialist' },
      { from: 'M.B.B.S, M.D. (General Medicine), D.Card', to: 'M.B.B.S, M.D. (Gen Med), D.M. (Nephrology)' },
      { from: 'rajesh.kumar@uddanamclinic.com', to: 'dr.giribabu@uddanamclinic.com' }
    ]
  },
  {
    path: 'c:/Users/KARANAM SAI/Desktop/Clinic/client/src/components/Sections/HealthTips.jsx',
    replacements: [
      { from: 'Dr. B. Rajesh Kumar', to: 'Dr. Gorakala Giribabu' },
      { from: 'Dr. Rajesh Kumar', to: 'Dr. Gorakala Giribabu' }
    ]
  },
  {
    path: 'c:/Users/KARANAM SAI/Desktop/Clinic/client/src/components/Sections/Hero.jsx',
    replacements: [
      { from: 'Dr. B. Rajesh Kumar', to: 'Dr. Gorakala Giribabu' }
    ]
  },
  {
    path: 'c:/Users/KARANAM SAI/Desktop/Clinic/client/src/components/Sections/Services.jsx',
    replacements: [
      { from: 'Dr. Rajesh Kumar', to: 'Dr. Gorakala Giribabu' }
    ]
  },
  {
    path: 'c:/Users/KARANAM SAI/Desktop/Clinic/client/src/components/Sections/Specialities.jsx',
    replacements: [
      { from: 'Dr. B. Rajesh Kumar', to: 'Dr. Gorakala Giribabu' }
    ]
  },
  {
    path: 'c:/Users/KARANAM SAI/Desktop/Clinic/client/src/components/Sections/Testimonials.jsx',
    replacements: [
      { from: 'Dr. Rajesh Kumar', to: 'Dr. Gorakala Giribabu' }
    ]
  },
  {
    path: 'c:/Users/KARANAM SAI/Desktop/Clinic/server/scripts/seed.js',
    replacements: [
      { from: 'Dr. B. Rajesh Kumar', to: 'Dr. Gorakala Giribabu' },
      { from: 'General Physician & Cardiologist', to: 'Senior Nephrologist & Kidney Transplant Specialist' },
      { from: 'M.B.B.S, M.D. (General Medicine), D.Card', to: 'M.B.B.S, M.D. (Gen Med), D.M. (Nephrology)' },
      { from: 'rajesh.kumar@uddanamclinic.com', to: 'dr.giribabu@uddanamclinic.com' },
      { from: 'Dr. Rajesh Kumar', to: 'Dr. Gorakala Giribabu' }
    ]
  }
];

filesToUpdate.forEach(file => {
  if (fs.existsSync(file.path)) {
    let content = fs.readFileSync(file.path, 'utf8');
    let original = content;
    file.replacements.forEach(rep => {
      content = content.split(rep.from).join(rep.to);
    });
    if (content !== original) {
      fs.writeFileSync(file.path, content, 'utf8');
      console.log(`UPDATED: ${file.path}`);
    } else {
      console.log(`NO CHANGE: ${file.path}`);
    }
  } else {
    console.log(`NOT FOUND: ${file.path}`);
  }
});
