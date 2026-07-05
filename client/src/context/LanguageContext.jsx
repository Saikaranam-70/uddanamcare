import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About Us",
    navDoctors: "Doctors",
    navServices: "Services",
    navSpecialities: "Specialities",
    navGallery: "Gallery",
    navTestimonials: "Testimonials",
    navHealthTips: "Health Tips",
    navContact: "Contact",
    navBookNow: "Book Appointment",

    // Hero Section
    heroTitle: "Premium Healthcare for You and Your Family",
    heroSubtitle: "Experience world-class medical expertise, advanced diagnostics, and compassionate patient care at Uddanam Care Health Clinic.",
    heroCTA: "Book Appointment",
    heroContactCTA: "Contact Us",
    statPatients: "Patients Served",
    statDoctors: "Specialist Doctors",
    statSuccess: "Success Rate",
    statYears: "Years Experience",

    // About Section
    aboutTitle: "About Our Clinic",
    aboutSubtitle: "Committed to providing high-quality, compassionate healthcare in Sompeta and surrounding areas.",
    aboutIntro: "Uddanam Care Health Clinic is a state-of-the-art medical facility dedicated to delivering comprehensive healthcare services under one roof. Our team of experienced specialists is driven by medical excellence and patient well-being.",
    aboutMission: "Our Mission",
    aboutMissionText: "To provide accessible, premium, and trustworthy clinical and diagnostic services to our community using advanced technology.",
    aboutVision: "Our Vision",
    aboutVisionText: "To be the leading healthcare hub in the region, recognized for clinical excellence, ethical practices, and patient-centric care.",
    aboutChoose: "Why Choose Us?",
    aboutChoose1: "Experienced Specialists",
    aboutChoose1Text: "Dedicated clinical experts in cardiology, pediatrics, orthopedics, and general medicine.",
    aboutChoose2: "Complete Diagnostics",
    aboutChoose2Text: "In-house advanced lab, ECG, X-Ray, and pharmacy services.",
    aboutChoose3: "24/7 Casualty Care",
    aboutChoose3Text: "Round-the-clock medical emergency assistance for immediate care.",
    aboutChoose4: "Cashless Facilities",
    aboutChoose4Text: "Hassle-free cashless insurance support for major providers.",

    // Services Section
    servicesTitle: "Our Premium Services",
    servicesSubtitle: "Comprehensive clinical and diagnostic services designed around your wellness.",
    serviceLearnMore: "Learn More",
    serviceClose: "Close",

    // Specialities Section
    specialitiesTitle: "Our Medical Specialities",
    specialitiesSubtitle: "Expert medical care tailored to every member of your family.",
    specGenMed: "General Medicine",
    specPed: "Pediatrics",
    specCardio: "Cardiology",
    specOrtho: "Orthopedics",
    specGyn: "Gynecology",
    specDerma: "Dermatology",
    specNeuro: "Neurology",
    specDental: "Dental Care",
    specViewDetails: "View Details",

    // Facilities Section
    facilitiesTitle: "World-Class Facilities",
    facilitiesSubtitle: "Equipped with modern technologies to ensure comfort and precision.",
    facPharmacy: "24/7 Pharmacy",
    facLab: "Advanced Laboratory",
    facXray: "Digital X-Ray",
    facEcg: "ECG Diagnostics",
    facInPatient: "In-Patient Care",
    facCasualty: "24/7 Casualty",
    facAmbulance: "Emergency Ambulance",
    facInsurance: "Cashless Insurance",
    facParking: "Spacious Parking",
    facReports: "Digital Health Reports",

    // Gallery
    galleryTitle: "Our Gallery",
    gallerySubtitle: "A glimpse into our clinic, advanced departments, and patient-friendly environment.",

    // Booking Section
    bookingTitle: "Book An Appointment",
    bookingSubtitle: "Schedule your visit with our specialized doctors easily.",
    formName: "Full Name",
    formPhone: "Phone Number",
    formEmail: "Email Address",
    formDoctor: "Select Doctor",
    formDept: "Select Department",
    formDate: "Preferred Date",
    formTime: "Preferred TimeSlot",
    formMsg: "Brief Message (Optional)",
    formSubmit: "Confirm Booking",
    formBookingNow: "Booking...",
    formSuccess: "Appointment Booked Successfully!",
    formSuccessSub: "Our team will contact you shortly to confirm your slot.",

    // Health Tips Section
    healthTitle: "Health & Wellness Tips",
    healthSubtitle: "Stay informed and healthy with medical advice from our specialists.",
    readMore: "Read Article",
    searchTips: "Search articles...",

    // FAQ Section
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find quick answers to common questions about our services and policies.",

    // Contact Section
    contactTitle: "Contact Us",
    contactSubtitle: "Get in touch with us. We are here to assist you and answer your questions.",
    contactHours: "Working Hours",
    contactHoursWeek: "Mon - Sat: 9:00 AM - 1:00 PM & 4:00 PM - 8:00 PM",
    contactHoursSun: "Sunday: Emergency Casualty Only",
    contactAddress: "Clinic Address",
    contactPhone: "Call Us",
    contactEmail: "Email Us",
    contactFormTitle: "Send a Message",
    contactFormSubmit: "Send Message",
    contactFormSending: "Sending...",
    contactSuccess: "Message Sent!",
    contactSuccessSub: "Thank you. We will respond to your query shortly.",
    formSubject: "Subject",

    // Footer
    footerDesc: "Premium healthcare services including advanced diagnostics and specialist doctors located in Sompeta, Andhra Pradesh.",
    footerLinks: "Quick Links",
    footerContact: "Get in Touch",
    footerNewsletter: "Newsletter",
    footerNewsletterSub: "Subscribe to receive health tips and clinic updates.",
    footerNewsletterPlaceholder: "Enter your email",
    footerSubscribe: "Subscribe",
    footerSubscribed: "Subscribed!",
    footerRights: "All Rights Reserved.",
  },
  te: {
    // Navigation
    navHome: "హోమ్",
    navAbout: "మా గురించి",
    navDoctors: "వైద్యులు",
    navServices: "సేవలు",
    navSpecialities: "ప్రత్యేకతలు",
    navGallery: "గ్యాలరీ",
    navTestimonials: "రోగుల అనుభవాలు",
    navHealthTips: "ఆరోగ్య చిట్కాలు",
    navContact: "సంప్రదించండి",
    navBookNow: "అపాయింట్‌మెంట్ బుకింగ్",

    // Hero Section
    heroTitle: "మీకు మరియు మీ కుటుంబానికి ప్రీమియం వైద్య సంరక్షణ",
    heroSubtitle: "ఉద్దానం కేర్ హెల్త్ క్లినిక్ లో ప్రపంచ స్థాయి వైద్య నైపుణ్యం, అత్యాధునిక రోగ నిర్ధారణలు మరియు ప్రేమపూర్వక సంరక్షణను అనుభవించండి.",
    heroCTA: "అపాయింట్‌మెంట్ బుక్ చేయండి",
    heroContactCTA: "మమ్మల్ని సంప్రదించండి",
    statPatients: "సేవలు పొందిన రోగులు",
    statDoctors: "నిపుణులైన వైద్యులు",
    statSuccess: "విజయవంతమైన చికిత్సలు",
    statYears: "సంవత్సరాల అనుభవం",

    // About Section
    aboutTitle: "మా క్లినిక్ గురించి",
    aboutSubtitle: "సోంపేట మరియు పరిసర ప్రాంతాలలో అత్యుత్తమమైన, నమ్మకమైన వైద్య సేవలు అందించడమే మా లక్ష్యం.",
    aboutIntro: "ఉద్దానం కేర్ హెల్త్ క్లినిక్ అనేది ఒకే చోట అన్ని రకాల వైద్య సేవలు అందించే ఒక అత్యాధునిక వైద్య కేంద్రం. మా నిపుణులైన వైద్య బృందం మీ ఆరోగ్య రక్షణకు నిరంతరం కట్టుబడి ఉంటుంది.",
    aboutMission: "మా ధ్యేయం",
    aboutMissionText: "అత్యాధునిక సాంకేతికతను ఉపయోగించి మా ప్రజలకు సులభంగా అందుబాటులో ఉండేలా నాణ్యమైన చికిత్స, మరియు ల్యాబ్ సేవలను అందించడం.",
    aboutVision: "మా విజన్",
    aboutVisionText: "రోగి సంరక్షణలో నైతిక విలువలతో కూడిన చికిత్స అందిస్తూ, ఈ ప్రాంతంలోనే అగ్రగామి వైద్య కేంద్రంగా నిలవడం.",
    aboutChoose: "మమ్మల్ని ఎందుకు ఎంచుకోవాలి?",
    aboutChoose1: "అనుభవజ్ఞులైన నిపుణులు",
    aboutChoose1Text: "కార్డియాలజీ, పీడియాట్రిక్స్, ఆర్థోపెడిక్స్ మరియు జనరల్ మెడిసిన్ లో నిపుణులైన వైద్యులు.",
    aboutChoose2: "సమగ్ర రోగ నిర్ధారణలు",
    aboutChoose2Text: "ఇన్-హౌస్ ల్యాబ్, ఇసిజి, ఎక్స్-రే మరియు ఫార్మసీ సేవలు ఒకే చోట.",
    aboutChoose3: "24/7 అత్యవసర సేవలు",
    aboutChoose3Text: "అత్యవసర పరిస్థితుల్లో తక్షణ వైద్యం అందించడానికి 24 గంటల సేవలు.",
    aboutChoose4: "క్యాష్‌లెష్ బీమా సౌకర్యం",
    aboutChoose4Text: "ప్రధాన బీమా సంస్థల నుండి ఉచిత క్యాష్‌లెష్ వైద్య సహాయం.",

    // Services Section
    servicesTitle: "మా ప్రీమియం వైద్య సేవలు",
    servicesSubtitle: "మీ ఆరోగ్య రక్షణ కోసం రూపొందించబడిన సమగ్ర క్లినికల్ మరియు ల్యాబ్ సేవలు.",
    serviceLearnMore: "మరింత సమాచారం",
    serviceClose: "మూసివేయి",

    // Specialities Section
    specialitiesTitle: "మా వైద్య విభాగాలు",
    specialitiesSubtitle: "మీ కుటుంబంలోని ప్రతి ఒక్కరికి తగిన ప్రత్యేక వైద్య సేవలు.",
    specGenMed: "జనరల్ మెడిసిన్",
    specPed: "పిల్లల వైద్యం (పీడియాట్రిక్స్)",
    specCardio: "గుండె జబ్బుల వైద్యం (కార్డియాలజీ)",
    specOrtho: "ఎముకల వైద్యం (ఆర్థోపెడిక్స్)",
    specGyn: "స్త్రీల వైద్యం (గైనకాలజీ)",
    specDerma: "చర్మ వ్యాధుల వైద్యం (డెర్మటాలజీ)",
    specNeuro: "నరాల వైద్యం (న్యూరాలజీ)",
    specDental: "దంత వైద్యం (డెంటల్)",
    specViewDetails: "వివరాలు చూడు",

    // Facilities Section
    facilitiesTitle: "ప్రపంచ స్థాయి సదుపాయాలు",
    facilitiesSubtitle: "ఖచ్చితమైన మరియు సౌకర్యవంతమైన చికిత్స కోసం ఆధునిక సాంకేతిక పరికరాలు.",
    facPharmacy: "24/7 ఫార్మసీ",
    facLab: "అత్యాధునిక ల్యాబొరేటరీ",
    facXray: "డిజిటల్ ఎక్స్-రే",
    facEcg: "ఇసిజి నిర్ధారణ",
    facInPatient: "ఇన్-పేషెంట్ సేవలు",
    facCasualty: "24/7 క్యాజువాలిటీ",
    facAmbulance: "అత్యవసర అంబులెన్స్",
    facInsurance: "క్యాష్‌లెష్ ఇన్సూరెన్స్",
    facParking: "విశాలమైన పార్కింగ్",
    facReports: "డిజిటల్ హెల్త్ రిపోర్ట్స్",

    // Gallery
    galleryTitle: "మా ఫోటో గ్యాలరీ",
    gallerySubtitle: "మా క్లినిక్ పరిసరాలు, విభాగాలు మరియు వైద్య సదుపాయాల చిత్రాలు.",

    // Booking Section
    bookingTitle: "అపాయింట్‌మెంట్ తీసుకోండి",
    bookingSubtitle: "మా నిపుణులైన వైద్యులతో మీ అపాయింట్‌మెంట్ సులభంగా బుక్ చేసుకోండి.",
    formName: "పూర్తి పేరు",
    formPhone: "ఫోన్ నెంబర్",
    formEmail: "ఈమెయిల్ అడ్రస్",
    formDoctor: "వైద్యుడిని ఎంచుకోండి",
    formDept: "విభాగాన్ని ఎంచుకోండి",
    formDate: "తేదీ",
    formTime: "సమయం",
    formMsg: "సందేశం (ఐచ్ఛికం)",
    formSubmit: "బుకింగ్ నిర్ధారించు",
    formBookingNow: "బుక్ అవుతోంది...",
    formSuccess: "అపాయింట్‌మెంట్ విజయవంతంగా బుక్ చేయబడింది!",
    formSuccessSub: "త్వరలోనే మీ సమయాన్ని నిర్ధారించడానికి మా బృందం మిమ్మల్ని సంప్రదిస్తుంది.",

    // Health Tips Section
    healthTitle: "ఆరోగ్య సమాచారం & చిట్కాలు",
    healthSubtitle: "మా నిపుణులైన వైద్యుల సలహాలతో ఆరోగ్యంగా ఉండండి.",
    readMore: "పూర్తిగా చదవండి",
    searchTips: "వ్యాసాల కోసం వెతకండి...",

    // FAQ Section
    faqTitle: "తరచుగా అడిగే ప్రశ్నలు (FAQ)",
    faqSubtitle: "మా సేవలు మరియు నిబంధనల గురించి సాధారణ ప్రశ్నలకు సమాధానాలు.",

    // Contact Section
    contactTitle: "మమ్మల్ని సంప్రదించండి",
    contactSubtitle: "ఏదైనా సందేహం ఉంటే మమ్మల్ని సంప్రదించండి. సహాయం చేయడానికి మేము సిద్ధంగా ఉన్నాము.",
    contactHours: "పనివేళలు",
    contactHoursWeek: "సోమ - శని: ఉదయం 9:00 - మధ్యాహ్నం 1:00 & సాయంత్రం 4:00 - రాత్రి 8:00",
    contactHoursSun: "ఆదివారం: అత్యవసర కేసులు మాత్రమే",
    contactAddress: "క్లినిక్ చిరునామా",
    contactPhone: "ఫోన్ చేయండి",
    contactEmail: "ఈమెయిల్ చేయండి",
    contactFormTitle: "సందేశాన్ని పంపండి",
    contactFormSubmit: "సందేశం పంపు",
    contactFormSending: "పంపుతోంది...",
    contactSuccess: "సందేశం పంపబడింది!",
    contactSuccessSub: "ధన్యవాదాలు. మేము త్వరలోనే మీ సందేహానికి సమాధానం ఇస్తాము.",
    formSubject: "విషయం",

    // Footer
    footerDesc: "సోంపేట (ఆంధ్రప్రదేశ్) లో అత్యాధునిక ల్యాబ్స్ మరియు నిపుణులైన వైద్యులతో కూడిన అత్యుత్తమ వైద్య సేవలు.",
    footerLinks: "త్వరిత లింకులు",
    footerContact: "సంప్రదించండి",
    footerNewsletter: "వార్తాలేఖ (Newsletter)",
    footerNewsletterSub: "ఆరోగ్య చిట్కాలు మరియు అప్‌డేట్స్ పొందడానికి సబ్‌స్క్రైబ్ చేయండి.",
    footerNewsletterPlaceholder: "మీ ఈమెయిల్ ఎంటర్ చేయండి",
    footerSubscribe: "సబ్‌స్క్రైబ్",
    footerSubscribed: "సబ్‌స్క్రైబ్ అయ్యారు!",
    footerRights: "సర్వ హక్కులు ప్రత్యేకించబడినవి.",
  },
  hi: {
    // Navigation
    navHome: "होम",
    navAbout: "हमारे बारे में",
    navDoctors: "चिकित्सक",
    navServices: "सेवाएं",
    navSpecialities: "विशेषताएं",
    navGallery: "गैलरी",
    navTestimonials: "प्रशंसापत्र",
    navHealthTips: "स्वास्थ्य टिप्स",
    navContact: "संपर्क करें",
    navBookNow: "अपॉइंटमेंट लें",

    // Hero Section
    heroTitle: "आपके और आपके परिवार के लिए प्रीमियम स्वास्थ्य सेवा",
    heroSubtitle: "उद्दानम केयर हेल्थ क्लिनिक में विश्व स्तरीय चिकित्सा विशेषज्ञता, उन्नत निदान और दयालु रोगी देखभाल का अनुभव करें।",
    heroCTA: "अपॉइंटमेंट बुक करें",
    heroContactCTA: "संपर्क करें",
    statPatients: "रोगी सेवा",
    statDoctors: "विशेषज्ञ डॉक्टर",
    statSuccess: "सफलता दर",
    statYears: "वर्षों का अनुभव",

    // About Section
    aboutTitle: "हमारे क्लिनिक के बारे में",
    aboutSubtitle: "सोमपेटा और आसपास के क्षेत्रों में उच्च गुणवत्ता वाली, दयालु स्वास्थ्य सेवा प्रदान करने के लिए प्रतिबद्ध।",
    aboutIntro: "उद्दानम केयर हेल्थ क्लिनिक एक अत्याधुनिक चिकित्सा सुविधा है जो एक ही छत के नीचे व्यापक स्वास्थ्य सेवाएं प्रदान करने के लिए समर्पित है।",
    aboutMission: "हमारा उद्देश्य",
    aboutMissionText: "उन्नत तकनीक का उपयोग करके हमारे समुदाय को सुलभ, प्रीमियम और विश्वसनीय नैदानिक ​​और लैब सेवाएं प्रदान करना।",
    aboutVision: "हमारी दृष्टि",
    aboutVisionText: "नैदानिक ​​उत्कृष्टता, नैतिक प्रथाओं और रोगी-केंद्रित देखभाल के लिए पहचाने जाने वाले क्षेत्र में अग्रणी स्वास्थ्य सेवा केंद्र बनना।",
    aboutChoose: "हमें क्यों चुनें?",
    aboutChoose1: "अनुभवी विशेषज्ञ",
    aboutChoose1Text: "कार्डियोलॉजी, बाल रोग, हड्डी रोग और सामान्य चिकित्सा में समर्पित नैदानिक ​​विशेषज्ञ।",
    aboutChoose2: "पूर्ण नैदानिक ​​जांच",
    aboutChoose2Text: "एक ही स्थान पर इन-हाउस लैब, ईसीजी, एक्स-रे और फार्मेसी सेवाएं।",
    aboutChoose3: "24/7 कैजुअल्टी सेवा",
    aboutChoose3Text: "तत्काल देखभाल के लिए चौबीसों घंटे चिकित्सा आपातकालीन सहायता उपलब्ध है।",
    aboutChoose4: "कैशलेस सुविधाएं",
    aboutChoose4Text: "प्रमुख बीमा प्रदाताओं के साथ परेशानी मुक्त कैशलेस बीमा सहायता।",

    // Services Section
    servicesTitle: "हमारी प्रीमियम सेवाएं",
    servicesSubtitle: "आपके कल्याण के लिए डिज़ाइन की गई व्यापक नैदानिक ​​और लैब सेवाएं।",
    serviceLearnMore: "अधिक जानें",
    serviceClose: "बंद करें",

    // Specialities Section
    specialitiesTitle: "चिकित्सीय विशेषताएं",
    specialitiesSubtitle: "आपके परिवार के प्रत्येक सदस्य के लिए तैयार की गई विशेषज्ञ चिकित्सा देखभाल।",
    specGenMed: "सामान्य चिकित्सा",
    specPed: "बाल रोग विभाग",
    specCardio: "हृदय रोग विभाग",
    specOrtho: "अस्थि रोग विभाग",
    specGyn: "स्त्री रोग विभाग",
    specDerma: "त्वचा रोग विभाग",
    specNeuro: "न्यूरोलॉजी",
    specDental: "दंत चिकित्सा",
    specViewDetails: "विवरण देखें",

    // Facilities Section
    facilitiesTitle: "विश्व स्तरीय सुविधाएं",
    facilitiesSubtitle: "सटीकता और आराम सुनिश्चित करने के लिए आधुनिक तकनीकों से लैस।",
    facPharmacy: "24/7 फार्मेसी",
    facLab: "अत्याधुनिक प्रयोगशाला",
    facXray: "डिजिटल एक्स-रे",
    facEcg: "ईसीजी निदान",
    facInPatient: "इन-पेशेंट केयर",
    facCasualty: "24/7 कैजुअल्टी",
    facAmbulance: "आपातकालीन एम्बुलेंस",
    facInsurance: "कैशलेस बीमा",
    facParking: "विशाल पार्किंग",
    facReports: "डिजिटल स्वास्थ्य रिपोर्ट",

    // Gallery
    galleryTitle: "हमारी गैलरी",
    gallerySubtitle: "हमारे क्लिनिक, उन्नत विभागों और रोगी-अनुकूल वातावरण की एक झलक।",

    // Booking Section
    bookingTitle: "अपॉइंटमेंट बुक करें",
    bookingSubtitle: "हमारे विशेषज्ञ डॉक्टरों के साथ आसानी से अपनी अपॉइंटमेंट शेड्यूल करें।",
    formName: "पूरा नाम",
    formPhone: "फ़ोन नंबर",
    formEmail: "ईमेल पता",
    formDoctor: "डॉक्टर चुनें",
    formDept: "विभाग चुनें",
    formDate: "पसंदीदा तिथि",
    formTime: "पसंदीदा समय",
    formMsg: "संदेश (वैकल्पिक)",
    formSubmit: "बुकिंग की पुष्टि करें",
    formBookingNow: "बुकिंग हो रही है...",
    formSuccess: "अपॉइंटमेंट सफलतापूर्वक बुक हो गया!",
    formSuccessSub: "हमारी टीम जल्द ही आपकी टाइम स्लॉट की पुष्टि के लिए आपसे संपर्क करेगी।",

    // Health Tips Section
    healthTitle: "स्वास्थ्य एवं कल्याण युक्तियाँ",
    healthSubtitle: "हमारे विशेषज्ञों की चिकित्सा सलाह के साथ सूचित और स्वस्थ रहें।",
    readMore: "लेख पढ़ें",
    searchTips: "लेख खोजें...",

    // FAQ Section
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faqSubtitle: "हमारी सेवाओं और नीतियों के बारे में सामान्य प्रश्नों के त्वरित उत्तर पाएं।",

    // Contact Section
    contactTitle: "संपर्क करें",
    contactSubtitle: "हमसे संपर्क करें। हम आपकी सहायता करने और आपके प्रश्नों का उत्तर देने के लिए यहां हैं।",
    contactHours: "कार्य के घंटे",
    contactHoursWeek: "सोम - शनि: सुबह 9:00 - दोपहर 1:00 और शाम 4:00 - रात 8:00",
    contactHoursSun: "रविवार: केवल आपातकालीन सेवाएं",
    contactAddress: "क्लिनिक का पता",
    contactPhone: "हमें कॉल करें",
    contactEmail: "हमें ईमेल करें",
    contactFormTitle: "संदेश भेजें",
    contactFormSubmit: "संदेश भेजें",
    contactFormSending: "भेजा जा रहा है...",
    contactSuccess: "संदेश भेज दिया गया!",
    contactSuccessSub: "धन्यवाद। हम जल्द ही आपकी पूछताछ का जवाब देंगे।",
    formSubject: "विषय",

    // Footer
    footerDesc: "सोमपेटा, आंध्र प्रदेश में उन्नत नैदानिक जांच और विशेषज्ञ डॉक्टरों सहित प्रीमियम स्वास्थ्य सेवाएं।",
    footerLinks: "त्वरित लिंक्स",
    footerContact: "संपर्क में रहें",
    footerNewsletter: "न्यूज़लेटर",
    footerNewsletterSub: "स्वास्थ्य टिप्स और क्लिनिक अपडेट प्राप्त करने के लिए सदस्यता लें।",
    footerNewsletterPlaceholder: "अपना ईमेल दर्ज करें",
    footerSubscribe: "सदस्यता लें",
    footerSubscribed: "सदस्यता ली गई!",
    footerRights: "सर्वाधिकार सुरक्षित।",
  },
  or: {
    // Navigation
    navHome: "ହୋମ୍",
    navAbout: "ଆମ ବିଷୟରେ",
    navDoctors: "ଡାକ୍ତର",
    navServices: "ସେବାସମୂହ",
    navSpecialities: "ବିଶେଷତ୍ୱ",
    navGallery: "ଗ୍ୟାଲେରୀ",
    navTestimonials: "ରୋଗୀଙ୍କ ଅନୁଭୂତି",
    navHealthTips: "ସ୍ୱାସ୍ଥ୍ୟ ଟିପ୍ସ",
    navContact: "ଯୋଗାଯୋଗ",
    navBookNow: "ଅପଏଣ୍ଟମେଣ୍ଟ ବୁକିଂ",

    // Hero Section
    heroTitle: "ଆପଣଙ୍କ ଏବଂ ଆପଣଙ୍କ ପରିବାର ପାଇଁ ପ୍ରିମିୟମ ସ୍ୱାସ୍ଥ୍ୟ ସେବା",
    heroSubtitle: "ଉଦ୍ଦାନମ କେୟାର ହେଲଥ କ୍ଲିନିକରେ ବିଶ୍ୱସ୍ତରୀୟ ଚିକିତ୍ସା, ଅତ୍ୟାଧୁନିକ ରୋଗ ନିରୂପଣ ଏବଂ ସହାନୁଭୂତିପୂର୍ଣ୍ଣ ରୋଗୀ ସେବାର ଅନୁଭବ କରନ୍ତୁ ।",
    heroCTA: "ଅପଏଣ୍ଟମେଣ୍ଟ ବୁକ୍ କରନ୍ତୁ",
    heroContactCTA: "ଯୋଗାଯୋଗ କରନ୍ତୁ",
    statPatients: "ରୋଗୀ ସେବା",
    statDoctors: "ବିଶେଷଜ୍ଞ ଡାକ୍ତର",
    statSuccess: "ସଫଳତା ହାର",
    statYears: "ବର୍ଷର ଅନୁଭବ",

    // About Section
    aboutTitle: "ଆମ କ୍ଲିନିକ ବିଷୟରେ",
    aboutSubtitle: "ସୋମପେଟା ଏବଂ ଆଖପାଖ ଅଞ୍ଚଳରେ ଉଚ୍ଚ ଗୁଣବତ୍ତା ସମ୍ପନ୍ନ ସ୍ୱାସ୍ଥ୍ୟ ସେବା ଯୋଗାଇବା ପାଇଁ ପ୍ରତିଶ୍ରୁତିବଦ୍ଧ ।",
    aboutIntro: "ଉଦ୍ଦାନମ କେୟାର ହେଲଥ କ୍ଲିନିକ ହେଉଛି ଏକ ଅତ୍ୟାଧୁନିକ ଚିକିତ୍ସା କେନ୍ଦ୍ର ଯେଉଁଠାରେ ଏକାଠି ସମସ୍ତ ସ୍ୱାସ୍ଥ୍ୟ ସେବା ଉପଲବ୍ଧ ଅଟେ । ଆମର ଅଭିଜ୍ଞ ଡାକ୍ତରୀ ଦଳ ରୋଗୀଙ୍କ ସୁସ୍ଥତା ପାଇଁ ସଦା ସର୍ବଦା ନିୟୋଜିତ ।",
    aboutMission: "ଆମର ଲକ୍ଷ୍ୟ",
    aboutMissionText: "ଅତ୍ୟାଧୁନିକ ବୈଷୟିକ ଜ୍ଞାନକୌଶଳ ବ୍ୟବହାର କରି ଆମ ସମାଜକୁ ସୁଲଭ ଏବଂ ବିଶ୍ୱାସନୀୟ ଚିକିତ୍ସା ତଥା ଲ୍ୟାବ୍ ସେବା ଯୋଗାଇ ଦେବା ।",
    aboutVision: "ଆମର ଦୂରଦୃଷ୍ଟି",
    aboutVisionText: "ଚିକିତ୍ସା କ୍ଷେତ୍ରରେ ଉତ୍କୃଷ୍ଟତା, ନୈତିକ ଆଚରଣ ଏବଂ ରୋଗୀ କଲ୍ୟାଣ ପାଇଁ ଏହି ଅଞ୍ଚଳର ଏକ ଅଗ୍ରଣୀ ସ୍ୱାସ୍ଥ୍ୟ କେନ୍ଦ୍ର ଭାବେ ଉଭା ହେବା ।",
    aboutChoose: "ଆମକୁ କାହିଁକି ବାଛିବେ?",
    aboutChoose1: "ଅଭିଜ୍ଞ ବିଶେଷଜ୍ଞ",
    aboutChoose1Text: "ହୃଦରୋଗ, ଶିଶୁରୋଗ, ଅସ୍ଥିଶଲ୍ୟ ଏବଂ ସାଧାରଣ ଚିକିତ୍ସାରେ ଅଭିଜ୍ଞ ଡାକ୍ତର ।",
    aboutChoose2: "ସମ୍ପୂର୍ଣ୍ଣ ରୋଗ ନିରୂପଣ",
    aboutChoose2Text: "ନିଜସ୍ୱ ଲ୍ୟାବ୍, ଇସିଜି, ଏକ୍ସ-ରେ ଏବଂ ଔଷଧ ଦୋକାନ (ଫାର୍ମାସୀ) ସେବା ।",
    aboutChoose3: "୨୪/୭ ଜରୁରୀକାଳୀନ ସେବା",
    aboutChoose3Text: "ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତିରେ ତୁରନ୍ତ ଚିକିତ୍ସା ପାଇଁ ୨୪ ଘଣ୍ଟା ସେବା ।",
    aboutChoose4: "କ୍ୟାସଲେସ ସୁବିଧା",
    aboutChoose4Text: "ପ୍ରମୁଖ ବୀମା କମ୍ପାନୀଗୁଡ଼ିକରୁ କ୍ୟାସଲେସ ଚିକିତ୍ସା ସୁବିଧା ।",

    // Services Section
    servicesTitle: "ଆମର ପ୍ରିମିୟମ ସେବାସମୂହ",
    servicesSubtitle: "ଆପଣଙ୍କ ସୁସ୍ଥତା ପାଇଁ ଡିଜାଇନ କରାଯାଇଥିବା ସମଗ୍ର ଚିକିତ୍ସା ଏବଂ ଲ୍ୟାବ୍ ସେବା ।",
    serviceLearnMore: "ଅଧିକ ଜାଣନ୍ତୁ",
    serviceClose: "ବନ୍ଦ କରନ୍ତୁ",

    // Specialities Section
    specialitiesTitle: "ଆମର ବିଭାଗସମୂହ",
    specialitiesSubtitle: "ଆପଣଙ୍କ ପରିବାରର ପ୍ରତ୍ୟେକ ସଦସ୍ୟଙ୍କ ପାଇଁ ସ୍ୱତନ୍ତ୍ର ସ୍ୱାସ୍ଥ୍ୟ ସେବା ।",
    specGenMed: "ସାଧାରଣ ଚିକିତ୍ସା (ମେଡିସିନ)",
    specPed: "ଶିଶୁ ରୋଗ ବିଭାଗ",
    specCardio: "ହୃଦରୋଗ ବିଭାଗ",
    specOrtho: "ଅସ୍ଥି ରୋଗ ବିଭାଗ",
    specGyn: "ସ୍ତ୍ରୀ ରୋଗ ବିଭାଗ",
    specDerma: "ଚର୍ମ ରୋଗ ବିଭାଗ",
    specNeuro: "ସ୍ନାୟୁ ରୋଗ ବିଭାଗ (ନ୍ୟୁରୋ)",
    specDental: "ଦନ୍ତ ଚିକିତ୍ସା",
    specViewDetails: "ବିବରଣୀ ଦେଖନ୍ତୁ",

    // Facilities Section
    facilitiesTitle: "ବିଶ୍ୱସ୍ତରୀୟ ସୁବିଧା ସୁଯୋଗ",
    facilitiesSubtitle: "ସଠିକ ଚିକିତ୍ସା ଏବଂ ଆରାମ ପାଇଁ ଆଧୁନିକ ଜ୍ଞାନକୌଶଳର ବ୍ୟବହାର ।",
    facPharmacy: "୨୪/୭ ଫାର୍ମାସୀ",
    facLab: "ଅତ୍ୟାଧୁନିକ ଲାବୋରେଟୋରୀ",
    facXray: "ଡିଜିଟାଲ ଏକ୍ସ-ରେ",
    facEcg: "ଇସିଜି ନିରୂପଣ",
    facInPatient: "ଇନ୍-ପେସେଣ୍ଟ ସେବା",
    facCasualty: "୨୪/৭ କାଜୁଆଲଟି",
    facAmbulance: "ଜରୁରୀକାଳୀନ ଆମ୍ବୁଲାନ୍ସ",
    facInsurance: "କ୍ୟାସଲେସ ବୀମା ସେବା",
    facParking: "ପ୍ରଶସ୍ତ ପାର୍କିଂ",
    facReports: "ଡିଜିଟାଲ ସ୍ୱାସ୍ଥ୍ୟ ରିପୋର୍ଟ",

    // Gallery
    galleryTitle: "ଆମର ଗ୍ୟାଲେରୀ",
    gallerySubtitle: "ଆମ କ୍ଲିନିକ, ଆଧୁନିକ ବିଭାଗ ଏବଂ ରୋଗୀ ଅନୁକୂଳ ପରିବେଶର କିଛି ଝଲକ ।",

    // Booking Section
    bookingTitle: "ଅପଏଣ୍ଟମେଣ୍ଟ ବୁକ୍ କରନ୍ତୁ",
    bookingSubtitle: "ଆମର ବିଶେଷଜ୍ଞ ଡାକ୍ତରଙ୍କ ସହିତ ସହଜରେ ଅପଏଣ୍ଟମେଣ୍ଟ ନିର୍ଦ୍ଧାରଣ କରନ୍ତୁ ।",
    formName: "ପୂରା ନାମ",
    formPhone: "ଫୋନ ନମ୍ବର",
    formEmail: "ଇମେଲ ଠିକଣା",
    formDoctor: "ଡାକ୍ତର ବାଛନ୍ତୁ",
    formDept: "ବିଭାଗ ବାଛନ୍ତୁ",
    formDate: "ତାରିଖ",
    formTime: "ସମୟ",
    formMsg: "ସନ୍ଦେଶ (ଇଚ୍ଛାଧୀନ)",
    formSubmit: "ବୁକିଂ ନିଶ୍ଚିତ କରନ୍ତୁ",
    formBookingNow: "ବୁକିଂ ଚାଲିଛି...",
    formSuccess: "ଅପଏଣ୍ଟମେଣ୍ଟ ସଫଳତାର ସହ ବୁକ୍ ହୋଇଛି!",
    formSuccessSub: "ଆମର ଟିମ୍ ଖୁବ୍ ଶୀଘ୍ର ଆପଣଙ୍କ ସହ ଯୋଗାଯୋଗ କରି ସମୟ ନିଶ୍ଚିତ କରିବେ ।",

    // Health Tips Section
    healthTitle: "ସ୍ୱାସ୍ଥ୍ୟ ଏବଂ ସୁସ୍ଥତା ଟିପ୍ସ",
    healthSubtitle: "ଆମର ବିଶେଷଜ୍ଞ ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ମାଧ୍ୟମରେ ସୁସ୍ଥ ରୁହନ୍ତୁ ।",
    readMore: "ଆର୍ଟିକିଲ ପଢନ୍ତୁ",
    searchTips: "ଆର୍ଟିକିଲ ସନ୍ଧାନ କରନ୍ତୁ...",

    // FAQ Section
    faqTitle: "ସାଧାରଣ ପ୍ରଶ୍ନୋତ୍ତର (FAQ)",
    faqSubtitle: "ଆମର ସେବା ଏବଂ ନିୟମାବଳୀ ବିଷୟରେ ସାଧାରଣ ପ୍ରଶ୍ନର ଉତ୍ତର ପାଆନ୍ତୁ ।",

    // Contact Section
    contactTitle: "ଯୋଗାଯୋଗ କରନ୍ତୁ",
    contactSubtitle: "ଆମ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ । ଆମେ ଆପଣଙ୍କୁ ସାହାଯ୍ୟ କରିବାକୁ ପ୍ରସ୍ତୁତ ଅଛୁ ।",
    contactHours: "କାର୍ଯ୍ୟ ସମୟ",
    contactHoursWeek: "ସୋମ - ଶନି: ସକାଳ ୯:୦୦ - ଦିପହର ୧: ୦୦ ଏବଂ ସନ୍ଧ୍ୟା ୪: ୦୦ - ରାତି ୮: ୦୦",
    contactHoursSun: "ରବିବାର: କେବଳ ଜରୁରୀକାଳୀନ ସେବା",
    contactAddress: "କ୍ଲିନିକ ଠିକଣା",
    contactPhone: "ଫୋନ୍ କରନ୍ତୁ",
    contactEmail: "ଇମେଲ୍ କରନ୍ତୁ",
    contactFormTitle: "ସନ୍ଦେଶ ପଠାନ୍ତୁ",
    contactFormSubmit: "ସନ୍ଦେଶ ପଠାନ୍ତୁ",
    contactFormSending: "ପଠାଯାଉଛି...",
    contactSuccess: "ସନ୍ଦେଶ ପଠାଗଲା!",
    contactSuccessSub: "ଧନ୍ୟବାଦ। ଆମେ ଖୁବ୍ ଶୀଘ୍ର ଆପଣଙ୍କ ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବୁ।",
    formSubject: "ବିଷୟ",

    // Footer
    footerDesc: "ଆନ୍ଧ୍ରପ୍ରଦେଶର ସୋମପେଟାରେ ଉନ୍ନତ ରୋଗ ନିରୂପଣ ଏବଂ ବିଶେଷଜ୍ଞ ଡାକ୍ତରଙ୍କ ଦ୍ୱାରା ପ୍ରିମିୟମ ସ୍ୱାସ୍ଥ୍ୟ ସେବା ।",
    footerLinks: "କ୍ୱିକ୍ ଲିଙ୍କସ୍",
    footerContact: "ଯୋଗାଯୋଗରେ ରୁହନ୍ତୁ",
    footerNewsletter: "ନ୍ୟୁଜଲେଟର",
    footerNewsletterSub: "ସ୍ୱାସ୍ଥ୍ୟ ଟିପ୍ସ ଏବଂ ଅପଡେଟ ପାଇବା ପାଇଁ ସବସ୍କ୍ରାଇବ କରନ୍ତୁ ।",
    footerNewsletterPlaceholder: "ଇମେଲ୍ ଦିଅନ୍ତୁ",
    footerSubscribe: "ସବସ୍କ୍ରାଇବ",
    footerSubscribed: "ସବସ୍କ୍ରାଇବ ହୋଇଗଲା!",
    footerRights: "ସର୍ବସତ୍ତ୍ୱ ସଂରକ୍ଷିତ ।",
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('clinic_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('clinic_lang', language);
  }, [language]);

  const t = (key) => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
