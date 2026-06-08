import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Purpose from "@/assets/images/dummy/capabilities//purpose.png"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import 'swiper/css/scrollbar';
import "./styles.scss"
import { LeftArrowIcon, RightArrowIcon } from '@/assets/icons';
import { Content } from '../typography';
import ImageComponent from '../image';
export default function DeliverPurposeSlider({ data }: { data: any[] }) {
    return (
        <div className="relative w-full explore">
            <Swiper

                spaceBetween={16}
                className="mySwiper"
                modules={[Navigation]}
                navigation={{
                    prevEl: ".swiper_explore_button_top_prev",
                    nextEl: ".swiper_explore_button_top_next",
                    // @ts-ignore
                    clickable: true,
                }}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                }}
            >
                {data?.map((service: any, index: number) => (
                    <SwiperSlide className="transition-all duration-[1500ms] ease-in-out h-full bg-[#ffffff]" key={index}>
                        <div
                            className={`text-white w-full h-full  flex flex-col`}
                        >
                            <ImageComponent
                                src={service.banner}
                                alt={`service-${index}`}
                                className="object-cover w-full !aspect-[390/240] capability-bg  transform transition-all  duration-[1000ms] ease-in-out"
                            />
                            <div className=' dark:bg-[#414042] text-[#414042] dark:text-[#F4F4F4] md:p-6 px-3 py-6 flex-grow'>
                                <p
                                    className={`2xl:text-[18px] text-[14px] font-medium leading-[1.66] transition-all  duration-[1000ms] ease-in-out overflow-hidden z-10 `}
                                >
                                    {service?.title}
                                </p>
                                <Content>{service?.content}</Content>
                                <ul className='text-[#4D4D4F] dark:text-[#D9D9D9] text-sm leading-[1.7] list-disc list-inside mt-5 flex flex-col gap-2'>
                                    {service.lists?.map((listItem: string, index: number) =>
                                        <li className='' key={index}>
                                            {listItem}
                                        </li>
                                    )}
                                </ul>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='absolute lg:-top-24 -top-20 md:right-0 right-1/2 md:translate-x-0 translate-x-1/2 flex gap-4'>
                <button
                    type="button"
                    aria-label="slider left"
                    className="swiper_explore_button_top_prev disabled:opacity-70 disabled:border-[#414042]  lg:w-[50px] lg:h-[50px] w-10 h-10 rounded-full border border-[#FF4306] flex  justify-center items-center "
                >
                    <LeftArrowIcon />
                </button>
                <button
                    type="button"
                    aria-label="slider right"
                    className=" swiper_explore_button_top_next disabled:opacity-70 disabled:border-[#414042]  lg:w-[50px] lg:h-[50px] w-10 h-10 rounded-full border border-[#FF4306] flex  justify-center items-center "
                >
                    <RightArrowIcon />
                </button>
            </div>
        </div>
    )
}

let data = [
    {
        banner: Purpose,
        title: "Conversational AI",
        content: "Deploy NLP-powered bots to create organic, real-time chat, voice, and social interactions. Engage intelligent virtual assistants to increase engagement, decrease manual assistance, and create flawless customer experiences.",
        lists: [
            "AI Chatbot Development",
            "Voice Assistant Integration",
            "Voice Assistant Integration",
            "Real-time Transcription & Summarization (OpenAI Whisper)",
            "Multilingual & Multimodal NLP Solutions",
        ]
    },

]