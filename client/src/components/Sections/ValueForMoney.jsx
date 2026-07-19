import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FaRupeeSign, FaPlaneSlash, FaHandHoldingHeart, FaFileInvoiceDollar, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const ValueForMoney = () => {
  const { language } = useLanguage();

  // Localized texts
  const content = {
    en: {
      title: "Affordable Premium Healthcare",
      subtitle: "Why Uddanam Care Hospital stands for real value and trusted medical care without the corporate city markup.",
      cardTitle1: "Zero Travel & Lodge Costs",
      cardDesc1: "Top specialists in Nephrology, Cardiology, and Pediatrics in Sompeta. Save ₹5,000 - ₹10,000 in travel/stay to city hospitals.",
      cardTitle2: "All Diagnostics Under One Roof",
      cardDesc2: "Advanced lab, ECG, digital X-Ray, and pharmacy. Get all tests done in one visit at fraction of standard market prices.",
      cardTitle3: "Transparent Tariff",
      cardDesc3: "No hidden charges or unnecessary tests. Affordable consultations, generic medicine choices, and economical ward charges.",
      cardTitle4: "Cashless Insurance support",
      cardDesc4: "Hassle-free coverage through major insurance providers and local schemes, keeping your out-of-pocket expenses to zero.",
      compareTitle: "Treatment Comparison",
      compareSub: "See how local treatment compares to traveling to a corporate hospital in a distant city.",
      localLabel: "Uddanam Care Hospital (Sompeta)",
      cityLabel: "Corporate City Hospitals",
      feeLabel: "Consultation Fee",
      travelLabel: "Travel & Stay Costs",
      medicinesLabel: "Medicines & Labs",
      stressLabel: "Stress & Travel fatigue",
      localFee: "₹150 - ₹300 (Affordable & Local)",
      cityFee: "₹800 - ₹1,200 + Unnecessary Diagnostics",
      localTravel: "₹0 (Zero travel/lodge expenses)",
      cityTravel: "₹5,000 - ₹10,000+ (Vizag / Bhubaneswar)",
      localMedicines: "Reasonable tariffs & generic options",
      cityMedicines: "High markup medicines & diagnostic bills",
      localStress: "Zero travel fatigue, close to family",
      cityStress: "High stress, long queues & heavy travel"
    },
    te: {
      title: "అందరికీ అందుబాటులో నాణ్యమైన వైద్యం",
      subtitle: "ఖర్చు తక్కువ - వైద్యం ఎక్కువ. నగరాల్లోని కార్పొరేట్ ఆసుపత్రుల అధిక ఖర్చులు లేకుండా ఉద్దానం కేర్ హాస్పిటల్ లో తక్కువ ధరకే ప్రీమియం వైద్యం.",
      cardTitle1: "ప్రయాణ మరియు వసతి ఖర్చులు జీరో",
      cardDesc1: "నెఫ్రాలజీ, కార్డియాలజీ మరియు పీడియాట్రిక్స్ వంటి నిపుణులు సోంపేటలోనే కలరు. విశాఖపట్నం లేదా భువనేశ్వర్ వెళ్లే ₹5,000 - ₹10,000 ఖర్చు ఆదా.",
      cardTitle2: "అన్ని రకాల పరీక్షలు ఒకే చోట",
      cardDesc2: "అత్యాధునిక ల్యాబ్, ECG, డిజిటల్ X-రే మరియు ఫార్మసీ సేవలు ఒకే చోట లభించును. మార్కెట్ ధర కంటే అతి తక్కువ ధరలకే ల్యాబ్ పరీక్షలు.",
      cardTitle3: "పారదర్శకమైన ధరలు",
      cardDesc3: "ఎటువంటి దాచిన ఖర్చులు లేవు. అందుబాటులో ఉండే ఓపీ ఫీజు, జెనరిక్ మందుల లభ్యత మరియు తక్కువ బెడ్ చార్జీలు.",
      cardTitle4: "క్యాష్‌లెష్ బీమా సౌకర్యం",
      cardDesc4: "ప్రధాన బీమా సంస్థల నుండి ఉచిత ఇన్సూరెన్స్ సదుపాయం, దీనివల్ల మీ జేబు నుండి ఖర్చు సున్నా.",
      compareTitle: "చికిత్స ఖర్చుల పోలిక",
      compareSub: "నగరం లోని కార్పొరేట్ హాస్పిటల్ మరియు మన స్థానిక ఉద్దానం కేర్ హాస్పిటల్ ఖర్చుల పోలిక చూడండి.",
      localLabel: "ఉద్దానం కేర్ హాస్పిటల్ (సోంపేట)",
      cityLabel: "నగరాల్లోని కార్పొరేట్ హాస్పిటల్స్",
      feeLabel: "వైద్యుల ఓపీ ఫీజు",
      travelLabel: "ప్రయాణ & వసతి ఖర్చులు",
      medicinesLabel: "మందులు & ల్యాబ్ ఖర్చులు",
      stressLabel: "మానసిక ఒత్తిడి & అలసట",
      localFee: "₹150 - ₹300 (సాధారణ ధరలు)",
      cityFee: "₹800 - ₹1,200 + అనవసర పరీక్షలు",
      localTravel: "సున్నా ఖర్చు (సొంత ఊరిలోనే వైద్యం)",
      cityTravel: "₹5,000 - ₹10,000+ (విశాఖ / భువనేశ్వర్)",
      localMedicines: "సరసమైన ధరలు & జెనరిక్ మందులు",
      cityMedicines: "ఎక్కువ మార్జిన్ మందులు & ల్యాబ్ బిల్లులు",
      localStress: "అలసట లేదు, కుటుంబ సభ్యులు చెంతనే ఉంటారు",
      cityStress: "ఎక్కువ ఒత్తిడి, ప్రయాణ అలసట మరియు క్యూ లైన్లు"
    },
    hi: {
      title: "सस्ती और प्रीमियम स्वास्थ्य सेवा",
      subtitle: "उद्दानम केयर हॉस्पिटल क्यों है बेहतर - बिना किसी कॉर्पोरेट सिटी चार्ज के, उचित दाम पर भरोसेमंद चिकित्सा सेवा।",
      cardTitle1: "यात्रा और रुकने का शून्य खर्च",
      cardDesc1: "नेफ्रोलॉजी, कार्डियोलॉजी और पीडियाट्रिक्स के विशेषज्ञ सोमपेटा में ही। शहर जाने का ₹5,000 - ₹10,000 का खर्च बचाएं।",
      cardTitle2: "सभी जांच सुविधाएं एक ही छत के नीचे",
      cardDesc2: "उन्नत लैब, ईसीजी, डिजिटल एक्स-रे और फार्मेसी। बाजार से कम दामों पर सभी जांचे एक ही स्थान पर उपलब्ध।",
      cardTitle3: "पारदर्शी और उचित शुल्क",
      cardDesc3: "कोई छिपा हुआ शुल्क या फालतू जांच नहीं। उचित कंसल्टेशन, जेनेरिक दवाएं और बजट फ्रेंडली वार्ड शुल्क।",
      cardTitle4: "कैशलेस बीमा सहायता",
      cardDesc4: "प्रमुख बीमा कंपनियों के साथ आसान कैशलेस क्लेम की सुविधा, जिससे आपका खुद का खर्च न के बराबर हो।",
      compareTitle: "उपचार लागत की तुलना",
      compareSub: "देखिए कैसे सोमपेटा में इलाज कराना शहरों के महंगे अस्पतालों के मुकाबले आपकी बचत कराता है।",
      localLabel: "उद्दानम केयर हॉस्पिटल (सोमपेटा)",
      cityLabel: "शहरों के कॉर्पोरेट अस्पताल",
      feeLabel: "डॉक्टर की फीस",
      travelLabel: "यात्रा और रहने का खर्च",
      medicinesLabel: "दवाइयां और लैब जांच",
      stressLabel: "तनाव और यात्रा की थकान",
      localFee: "₹150 - ₹300 (किफायती दरें)",
      cityFee: "₹800 - ₹1,200 + फालतू जांचे",
      localTravel: "₹0 (शून्य यात्रा खर्च)",
      cityTravel: "₹5,000 - ₹10,000+ (विजाग / भुवनेश्वर)",
      localMedicines: "उचित शुल्क और जेनेरिक दवाओं के विकल्प",
      cityMedicines: "दवाइयों और जांच पर भारी बिल",
      localStress: "कोई थकान नहीं, परिवार के पास इलाज",
      cityStress: "लंबी कतारें, थकान और भारी तनाव"
    },
    or: {
      title: "ସୁଲଭ ମୂଲ୍ୟରେ ପ୍ରିମିୟମ ସ୍ୱାସ୍ଥ୍ୟ ସେବା",
      subtitle: "ଉଦ୍ଦାନମ କେୟାର ହସ୍ପିଟାଲ କାହିଁକି ଆପଣଙ୍କ ପାଇଁ ସର୍ବୋତ୍ତମ - ସହରର କର୍ପୋରେଟ୍ ଖର୍ଚ୍ଚ ବିନା ସ୍ଥାନୀୟ ଅଞ୍ଚଳରେ ଉଚ୍ଚମାନର ଚିକିତ୍ସା ।",
      cardTitle1: "ଯାତ୍ରା ଓ ରହଣି ଖର୍ଚ୍ଚ ସମ୍ପୂର୍ଣ୍ଣ ଶୂନ୍ୟ",
      cardDesc1: "ନେଫ୍ରୋଲୋଜି, କାର୍ଡିଓଲୋଜି ଓ ଶିଶୁରୋଗ ବିଶେଷଜ୍ଞ ଏବେ ସୋମପେଟାରେ । ବାହାର ସହରକୁ ଯିବାର ₹୫,୦୦୦ - ₹୧୦,୦୦୦ ବଞ୍ଚାନ୍ତୁ ।",
      cardTitle2: "ସମସ୍ତ ପରୀକ୍ଷା ଏକାଠି ଉପଲବ୍ଧ",
      cardDesc2: "ଲାବୋରେଟୋରୀ, ECG, ଡିଜିଟାଲ୍ X-ରେ ଏବଂ ଫାର୍ମାସୀ ଏକାଠି । ବଜାର ଦରଠାରୁ କମ୍ ମୂଲ୍ୟରେ ସମସ୍ତ ପରୀକ୍ଷା ସୁବିଧା ।",
      cardTitle3: "ସ୍ୱଚ୍ଛ ଓ ସରଳ ଦର ତାଲିକା",
      cardDesc3: "କୌଣସି ଲୁକ୍କାୟିତ ଚାର୍ଜ କିମ୍ବା ଅନାବଶ୍ୟକ ପରୀକ୍ଷା ନାହିଁ । ସୁଲଭ ଡାକ୍ତରୀ ଫି, ଜେନେରିକ୍ ଔଷଧ ଏବଂ ବଜେଟ୍ ୱାର୍ଡ ସୁବିଧା ।",
      cardTitle4: "କ୍ୟାସଲେସ ବୀମା ସୁବିଧା",
      cardDesc4: "ମୁଖ୍ୟ ବୀମା କମ୍ପାନୀଗୁଡ଼ିକ ସହ କ୍ୟାସଲେସ ସୁବିଧା, ଯାହା ଆପଣଙ୍କ ନିଜସ୍ୱ ଖର୍ଚ୍ଚକୁ ସମ୍ପୂର୍ଣ୍ଣ ଶୂନ୍ୟ ରଖେ ।",
      compareTitle: "ଚିକିତ୍ସା ଖର୍ଚ୍ଚର ତୁଳନା",
      compareSub: "ଦେଖନ୍ତୁ କିପରି ସ୍ଥାନୀୟ ଚିକିତ୍ସା ବାହାର ସହରର କର୍ପୋରେଟ୍ ହସ୍ପିଟାଲ୍ ତୁଳନାରେ ଶସ୍ତା ଓ ସହଜ ।",
      localLabel: "ଉଦ୍ଦାନମ କେୟାର ହସ୍ପିଟାଲ୍ (ସୋମପେଟା)",
      cityLabel: "ସହରର କର୍ପୋରେଟ୍ ହସ୍ପିଟାଲ୍",
      feeLabel: "ଡାକ୍ତରଙ୍କ ଫି",
      travelLabel: "ଯାତ୍ରା ଓ ରହଣି ଖର୍ଚ୍ଚ",
      medicinesLabel: "ଔଷଧ ଓ ଲ୍ୟାବ୍ ଖର୍ଚ୍ଚ",
      stressLabel: "ମାନସିକ ଚାପ ଓ ଯାତ୍ରା କଷ୍ଟ",
      localFee: "₹୧୫୦ - ₹୩୦୦ (ଅତି ସୁଲଭ)",
      cityFee: "₹୮୦୦ - ₹୧,୨୦୦ + ଅନାବଶ୍ୟକ ଟେଷ୍ଟ",
      localTravel: "₹୦ (ନିଜ ଅଞ୍ଚଳରେ ଚିକିତ୍ସା)",
      cityTravel: "₹୫,୦୦୦ - ₹୧୦, ୦୦୦+ (ଭିଜାଗ / ଭୁବନେଶ୍ୱର)",
      localMedicines: "ଉଚିତ୍ ମୂଲ୍ୟ ଏବଂ ଜେନେରିକ୍ ସୁବିଧା",
      cityMedicines: "ଔଷଧ ଏବଂ ଲ୍ୟାବ୍ ଉପରେ ମହଙ୍ଗା ବିଲ୍",
      localStress: "ଯାତ୍ରା କଷ୍ଟ ନାହିଁ, ନିଜ ପରିବାର ଗହଣରେ ଚିକିତ୍ସା",
      cityStress: "ଲମ୍ବା ଲାଇନ, ଚିନ୍ତା ଏବଂ ପ୍ରବଳ ଯାତ୍ରା କ୍ଳାନ୍ତି"
    }
  };

  const active = content[language] || content['en'];

  const valueCards = [
    {
      icon: <FaPlaneSlash size={26} />,
      title: active.cardTitle1,
      desc: active.cardDesc1,
      bg: 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/60',
      color: 'text-emerald-500'
    },
    {
      icon: <FaHandHoldingHeart size={26} />,
      title: active.cardTitle2,
      desc: active.cardDesc2,
      bg: 'bg-cyan-550/10 dark:bg-cyan-950/20 border-cyan-100 dark:border-cyan-900/40',
      color: 'text-cyan-500'
    },
    {
      icon: <FaFileInvoiceDollar size={26} />,
      title: active.cardTitle3,
      desc: active.cardDesc3,
      bg: 'bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-100 dark:border-indigo-900/60',
      color: 'text-indigo-500'
    },
    {
      icon: <FaRupeeSign size={26} />,
      title: active.cardTitle4,
      desc: active.cardDesc4,
      bg: 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/60',
      color: 'text-amber-500'
    }
  ];

  return (
    <section id="value" className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-100 dark:border-brand-900 mb-4"
          >
            <FaRupeeSign className="text-brand-500" size={12} />
            <span className="text-[10px] font-bold tracking-widest text-brand-700 dark:text-brand-400 uppercase font-sans">
              Value For Money
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight"
          >
            {active.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans"
          >
            {active.subtitle}
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {valueCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl bg-white dark:bg-slate-900/60 border ${card.bg} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left flex flex-col space-y-4`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 ${card.color}`}>
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-slate-800 dark:text-white font-sans">
                {card.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Board */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 md:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative"
        >
          {/* Subtle bg glow */}
          <div className="absolute -top-[30%] -right-[10%] w-[40%] h-[60%] rounded-full bg-brand-200/20 dark:bg-brand-950/15 blur-[80px]" />
          
          <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white font-sans">
              {active.compareTitle}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-sans">
              {active.compareSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative z-10">
            
            {/* Left: Local Hospital (Green Highlight) */}
            <div className="p-6 rounded-2xl bg-emerald-50/20 dark:bg-emerald-950/10 border border-emerald-250/30 dark:border-emerald-900/40 text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2.5 mb-5 border-b border-emerald-100 dark:border-emerald-900/50 pb-3">
                  <FaCheckCircle className="text-emerald-500 flex-shrink-0" size={20} />
                  <h4 className="text-base font-extrabold text-slate-800 dark:text-white uppercase tracking-wider font-sans">
                    {active.localLabel}
                  </h4>
                </div>
                
                <div className="space-y-4 text-xs">
                  <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                    <span className="font-bold text-slate-400 uppercase tracking-widest text-[9px]">{active.feeLabel}</span>
                    <span className="font-bold text-slate-850 dark:text-slate-200">{active.localFee}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                    <span className="font-bold text-slate-400 uppercase tracking-widest text-[9px]">{active.travelLabel}</span>
                    <span className="font-bold text-slate-850 dark:text-slate-200 text-emerald-600 dark:text-emerald-400">{active.localTravel}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                    <span className="font-bold text-slate-400 uppercase tracking-widest text-[9px]">{active.medicinesLabel}</span>
                    <span className="font-bold text-slate-850 dark:text-slate-200">{active.localMedicines}</span>
                  </div>
                  <div className="flex justify-between pb-2.5">
                    <span className="font-bold text-slate-400 uppercase tracking-widest text-[9px]">{active.stressLabel}</span>
                    <span className="font-bold text-slate-850 dark:text-slate-200">{active.localStress}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: City Hospitals (Red Highlight) */}
            <div className="p-6 rounded-2xl bg-rose-50/10 dark:bg-rose-950/5 border border-rose-100/40 dark:border-rose-950/20 text-left flex flex-col justify-between opacity-80">
              <div>
                <div className="flex items-center space-x-2.5 mb-5 border-b border-rose-100/20 dark:border-rose-950/30 pb-3">
                  <FaTimesCircle className="text-rose-500 flex-shrink-0" size={20} />
                  <h4 className="text-base font-extrabold text-slate-700 dark:text-slate-400 uppercase tracking-wider font-sans">
                    {active.cityLabel}
                  </h4>
                </div>
                
                <div className="space-y-4 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex justify-between border-b border-slate-100/40 dark:border-slate-800/40 pb-2.5">
                    <span className="font-bold uppercase tracking-widest text-[9px]">{active.feeLabel}</span>
                    <span className="font-semibold">{active.cityFee}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100/40 dark:border-slate-800/40 pb-2.5">
                    <span className="font-bold uppercase tracking-widest text-[9px]">{active.travelLabel}</span>
                    <span className="font-semibold text-rose-500">{active.cityTravel}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100/40 dark:border-slate-800/40 pb-2.5">
                    <span className="font-bold uppercase tracking-widest text-[9px]">{active.medicinesLabel}</span>
                    <span className="font-semibold">{active.cityMedicines}</span>
                  </div>
                  <div className="flex justify-between pb-2.5">
                    <span className="font-bold uppercase tracking-widest text-[9px]">{active.stressLabel}</span>
                    <span className="font-semibold">{active.cityStress}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ValueForMoney;
