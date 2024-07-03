import React, { useEffect } from 'react';
import about from '../assets/aboutus.jpg';
import image1 from '../assets/gallery/p1.jpeg';
import image2 from '../assets/gallery/p2.jpeg';
import image3 from '../assets/gallery/p3.jpeg';
import image4 from '../assets/gallery/p4.jpeg';
import image5 from '../assets/gallery/p5.jpeg';
import image6 from '../assets/gallery/p6.jpeg';
import image7 from '../assets/gallery/p7.jpeg';
import image8 from '../assets/gallery/p8.jpeg';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className='text-black flex flex-col items-center justify-center gap-4 pb-20 pt-8 w-full bg-white'>
            <p className='text-[2.4rem] text-orange-700 md:text-[3rem] font-mono font-bold text-center'>
                रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय
            </p>

            <div className='flex flex-col items-center justify-center gap-10 md:flex-row md:gap-0 w-full'>
                <div className='w-full flex flex-col items-center'>
                    <h1 className='text-[1.4rem] w-fit font-semibold border-b-2 pb-[1px] mb-[3rem] text-orange-700'>
                        हमारे बारे में
                    </h1>
                    <img src={about} alt="College Photo 1" className='mb-4 w-80 h-60 object-cover lg:w-[600px] lg:h-[400px]' />
                    <div className='relative pl-6 ml-6 border-l md:border-none w-full'>
                        <div className='w-full md:absolute md:block hidden h-[0.1px] bg-black top-[-10px]'></div>
                        <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r from-orange-700 to-white rounded-full md:top-[-16px] md:left-3 absolute left-[-0.47rem] top-[0.5rem]'></div>
                        <h2 className='text-[1.25rem] font-bold text-orange-700'>
                            स्थापना और इतिहास
                        </h2>
                        <p className='text-[0.95rem] pt-2'>
                            रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय की स्थापना स्वर्गीय पंडित कृष्ण मोहन ठाकुर ने भारतीय संस्कृति और संस्कृत भाषा को बढ़ावा देने और संरक्षित करने के लिए 1981 में नेपाली खपरा, वाराणसी में की थी।
                        </p>
                    </div>
                    <img src={image5} alt="College Photo 2" className='mt-4 mb-4 w-80 h-60 object-cover lg:w-[600px] lg:h-[400px]' />
                    <div className='relative pl-6 ml-6 border-l md:mt-10 md:border-none w-full'>
                        <div className='w-full md:absolute md:block hidden h-[0.1px] bg-black top-[-10px]'></div>
                        <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r from-orange-700 to-white rounded-full md:top-[-16px] md:left-3 absolute left-[-0.47rem] top-[0.5rem]'></div>
                        <h2 className='text-[1.25rem] font-bold text-orange-700'>
                            स्थानांतरण
                        </h2>
                        <p className='text-[0.95rem] pt-2'>
                            पर्याप्त स्थान की कमी के कारण 1992-93 में महाविद्यालय को नेपाली खपरा, वाराणसी से इंद्रपुर, शिवपुर, वाराणसी में स्थानांतरित कर दिया गया था।
                        </p>
                    </div>
                    <img src={image3} alt="College Photo 3" className='mt-4 mb-4 w-80 h-60 object-cover lg:w-[600px] lg:h-[400px]' />
                    <div className='relative pt-10 pl-6 ml-6 border-l md:border-none w-full'>
                        <div className='w-full md:absolute md:block hidden h-[0.1px] bg-black top-7'></div>
                        <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r from-orange-700 to-white rounded-full md:top-[21.5px] md:left-3 absolute left-[-0.47rem] top-[3rem]'></div>
                        <h2 className='text-[1.25rem] font-bold text-orange-700'>
                            संबद्धता और मान्यता
                        </h2>
                        <p className='text-[0.95rem] pt-2'>
                            महाविद्यालय के न्यासी और प्रो. युगेश्वर झा द्वारा किए गए प्रयासों के परिणामस्वरूप छह पारंपरिक विषयों (साहित्य, व्याकरण, दर्शन, वेद, कर्मकांड और ज्योतिष) को निर्देशकीय कार्यकाल के दौरान अनुमोदित किया गया था।
                        </p>
                    </div>
                </div>

                <div className='w-full flex flex-col items-center'>
                    <h1 className='text-[1.4rem] w-fit font-semibold border-b-2 pb-[1px] mb-[1.5rem] text-orange-700'>
                        हमारी विशेषताएं
                    </h1>
                    <div className='relative pl-6 ml-6 border-l w-full'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r from-orange-700 to-white rounded-full absolute left-[-0.47rem] top-[0.5rem]'></div>
                        <h2 className='text-[1.25rem] font-bold text-orange-700'>
                            संस्कृत और संस्कृति का संरक्षण
                        </h2>
                        <p className='text-[0.95rem] pt-2'>
                            भारतीय संस्कृति और संस्कृत भाषा के प्रति निरंतर समर्पित यह महाविद्यालय अपनी नींव से लेकर वर्तमान स्वरूप तक प्रहरी के रूप में प्राचार्य डॉ. वेदानन्द झा के कुशल नेतृत्व में सफलता की ओर अग्रसर है।
                        </p>
                    </div>
                    <img src={image4} alt="College Photo 4" className='mt-4 mb-4 w-80 h-60 object-cover lg:w-[600px] lg:h-[400px]' />
                    <div className='relative pt-10 pl-6 ml-6 border-l w-full'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r from-orange-700 to-white rounded-full absolute left-[-0.47rem] top-[3.05rem]'></div>
                        <h2 className='text-[1.25rem] font-bold text-orange-700'>
                            पाठ्यक्रम और शिक्षा
                        </h2>
                        <p className='text-[0.95rem] pt-2'>
                            यह महाविद्यालय 29 अक्टूबर, 1998 को "आदर्श संस्कृत महाविद्यालय / शोध संस्थान के रूप में मान्यता प्राप्त संस्थानों को वित्तीय सहायता" योजना के तहत समाहित किया गया था।
                        </p>
                    </div>
                    <img src={image8} alt="College Photo 5" className='mt-4 mb-4 w-80 h-60 object-cover lg:w-[600px] lg:h-[400px]' />
                    <div className='relative pt-10 pl-6 ml-6 border-l w-full'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r from-orange-700 to-white rounded-full absolute left-[-0.47rem] top-[3.05rem]'></div>
                        <h2 className='text-[1.25rem] font-bold text-orange-700'>
                            संपर्क करें
                        </h2>
                        <p className='text-[0.95rem] pt-2'>
                            यदि आपके पास कोई अवसर या विचार है जिस पर आप चर्चा करना चाहते हैं, तो कृपया हमसे संपर्क करें। हम हमेशा समान विचारधारा वाले व्यक्तियों से जुड़ने और नई संभावनाओं का पता लगाने के लिए उत्साहित रहते हैं।
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
