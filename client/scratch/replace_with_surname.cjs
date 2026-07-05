const fs = require('fs');

const filesToUpdate = [
  'c:/Users/KARANAM SAI/Desktop/Clinic/client/src/components/Sections/Booking.jsx',
  'c:/Users/KARANAM SAI/Desktop/Clinic/client/src/components/Sections/Doctors.jsx',
  'c:/Users/KARANAM SAI/Desktop/Clinic/client/src/components/Sections/HealthTips.jsx',
  'c:/Users/KARANAM SAI/Desktop/Clinic/client/src/components/Sections/Hero.jsx',
  'c:/Users/KARANAM SAI/Desktop/Clinic/client/src/components/Sections/Services.jsx',
  'c:/Users/KARANAM SAI/Desktop/Clinic/client/src/components/Sections/Specialities.jsx',
  'c:/Users/KARANAM SAI/Desktop/Clinic/client/src/components/Sections/Testimonials.jsx',
  'c:/Users/KARANAM SAI/Desktop/Clinic/server/scripts/seed.js'
];

filesToUpdate.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // First replace Dr. Giribabu with Dr. Gorakala Giribabu
    content = content.split('Dr. Giribabu').join('Dr. Gorakala Giribabu');
    
    // Then replace any remaining raw Giribabu with Gorakala Giribabu
    content = content.split('Giribabu').join('Gorakala Giribabu');
    
    // Fix any potential doubles (e.g. Gorakala Gorakala Giribabu)
    content = content.split('Gorakala Gorakala Giribabu').join('Gorakala Giribabu');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`UPDATED: ${filePath}`);
    } else {
      console.log(`NO CHANGE: ${filePath}`);
    }
  } else {
    console.log(`NOT FOUND: ${filePath}`);
  }
});
