import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutCard = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/about');
  };

  return (
    <div className="bg-gray-100 p-4 lg:p-8 flex flex-col items-start gap-3 w-full">
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-2xl lg:text-3xl font-bold text-center lg:text-left mb-4 w-full">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय
          </span>
        </h1>
        <p className="text-base lg:text-lg text-justify lg:text-left leading-relaxed overflow-y-auto max-h-[60vh] w-full">
         रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय की स्थापना स्वर्गीय पंडित कृष्ण मोहन ठाकुर ने भारतीय संस्कृति और संस्कृत भाषा को बढ़ावा देने और संरक्षित करने के लिए 1981 में नेपाली खपरा, वाराणसी में की थी। इस महाविद्यालय की स्थापना कामेश्वर सिंह संस्कृत विश्वविद्यालय, दरभंगा, बिहार के तत्कालीन कुलपति प्रो. जयमंत मिश्रा की अध्यक्षता में हुई थी। पर्याप्त स्थान की कमी के कारण 1992-93 में महाविद्यालय को नेपाली खपरा, वाराणसी से इंद्रपुर, शिवपुर, वाराणसी में स्थानांतरित कर दिया गया था। महाविद्यालय के न्यासी प्रो. उदयकांत चौधरी - अध्यक्ष, पंडित शिशिर नाथ मिश्रा - उपाध्यक्ष और पंडित पूर्णेंदु शेखर मिश्रा - सचिव ने एक बैठक में राष्ट्रीय संस्कृत संस्थान-नई दिल्ली से महाविद्यालय को संबद्धता लेने का निर्णय लिया। कार्यकारी समिति के सदस्य और पूर्व राज्य शिक्षा मंत्री (बिहार सरकार) प्रो. युगेश्वर झा द्वारा किए गए प्रयासों के परिणामस्वरूप छह पारंपरिक विषयों (साहित्य, व्याकरण, दर्शन, वेद, कर्मकांड और ज्योतिष) को निर्देशकीय कार्यकाल के दौरान अनुमोदित किया गया था। डॉ. प्रियदर्शी ठाकुर, तत्कालीन निदेशक राष्ट्रीय संस्कृत संस्थान-नई दिल्ली। निरंतर सफलता की ओर बढ़ते हुए, यह महाविद्यालय 29 अक्टूबर, 1998 को डॉ. कमलाकांत मिश्रा, राष्ट्रीय संस्कृत संस्थान - नई दिल्ली के निर्देशन में "आदर्श संस्कृत महाविद्यालय / शोध संस्थान के रूप में मान्यता प्राप्त संस्थानों को वित्तीय सहायता" योजना के तहत समाहित किया गया था। प्रो. कैलाश पति त्रिपाठी की अध्यक्षता में - साहित्य विभाग के पूर्व प्रमुख, संपूर्णानंद संस्कृत विश्वविद्यालय, वाराणसी। भारतीय संस्कृति और संस्कृत भाषा के प्रति निरंतर समर्पित यह महाविद्यालय अपनी नींव से लेकर वर्तमान स्वरूप तक प्रहरी के रूप में प्राचार्य डॉ. कमलेश झा के कुशल नेतृत्व में सफलता की ओर अग्रसर है।
        </p>
        <button
          onClick={handleNavigate}
          className="w-fit bg-teal-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-center lg:self-start"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default AboutCard;
