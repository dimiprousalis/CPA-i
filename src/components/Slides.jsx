import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Slides = () => {

    const swiperTxt1 = "Introducing our revolutionary Accounting AI Assistant! Get instant answers to all your accounting questions, 24/7. Say goodbye to accounting headaches and hello to effortless financial expertise at your fingertips!"
    const swiperTxt2 = "Transforming your financial life has never been easier! Our Accounting AI Assistant is designed to simplify your accounting tasks, saving you time and stress. "
    const swiperTxt3 = "Accounting has evolved from clay tablets and abacuses to the digital age, where our Accounting AI Assistant stands as a testament to progress. Witness the transformation of an ancient practice into a cutting-edge tool for modern times!"

    return (
        <Swiper className="
        bg-white bg-opacity-40  
        w-3/4
        md:w-[800px]  
        mx-auto 
        shadow-2xl 
        rounded-xl"
            modules={[Navigation]}
            slidesPerView={1}
            navigation={true}
        >
            <SwiperSlide>
                <div className="
                md:flex 
                md:items-center  
                md:w-[800px]
                ">
                    <div className="
                    p-5 
                    flex items-center 
                    text-center 
                    font-custom 
                    min-h-[220px]
                    sm:leading-7
                    md:text-lg">
                        {swiperTxt1} </div>
                    <img className="
                        w-full 
                        md:w-[500px] 
                        rounded-b-xl 
                        rounded-l-xl
                        md:rounded-r-xl 
                        md:rounded-l-none 
                        rounded-t-none 
                        mx-auto"
                        
                        src="/accountingpic1.jpg"
                        alt="accounting" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="
                md:flex 
                md:items-center  
                md:w-[800px] 
                ">
                    <div className="
                    p-5 
                    flex items-center 
                    text-center 
                    font-custom 
                    min-h-[220px]
                    sm:leading-7
                    md:text-lg">
                        {swiperTxt2} </div>
                    <img className="
                        w-full 
                        md:w-[500px] 
                        rounded-b-xl 
                        rounded-l-xl
                        md:rounded-r-xl 
                        md:rounded-l-none 
                        rounded-t-none 
                        mx-auto"
                        src="/accountingpic2.jpg"
                        alt="accounting" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="
                md:flex 
                md:items-center  
                md:w-[800px] 
                ">
                    <div className="
                    p-5 
                    flex items-center 
                    text-center 
                    font-custom 
                    min-h-[220px]
                    sm:leading-7
                    md:text-lg">
                        {swiperTxt3} </div>
                    <img className="
                        w-full 
                        md:w-[500px] 
                        rounded-b-xl 
                        rounded-l-xl
                        md:rounded-r-xl 
                        md:rounded-l-none 
                        rounded-t-none 
                        mx-auto"
                        src="/accountingpic3.jpg"
                        alt="accounting" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slides