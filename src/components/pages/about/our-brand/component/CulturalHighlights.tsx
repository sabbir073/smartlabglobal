import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import TopLeftSplitedBanner from "@/components/sections/banner/SplitedBanner/topLeftSplitedBanner";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";
import ThemedIconCard from "@/components/common/cards/ThemedIconCard";
import CarouselComponent from "@/components/common/slider/slider";
import MobileSwiperTabs from "@/components/common/slider/mobileSwiper/MobileSwiperTabs";

type Props = {
  data: IPageSectionData;
};

const CulturalHighlights = ({ data }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="section-pb">
      <TopLeftSplitedBanner
        bgImage={data?.cover}
        containerClassName="!min-h-[35vw] dark:!bg-[#1C1C1F]"
      >
        <div className="bg-white/80 backdrop-blur-[19px] dark:bg-[#1C1C1F] lg:p-8">
          <Heading2 className="text-center md:text-start">
            <SafeHtml content={data?.headline} />
          </Heading2>
          <Content className="max-w-[790px] w-full md:mx-0 mx-auto md:mb-0 mb-[40px] text-center md:text-start">
            <SafeHtml content={data?.excerpt} />
          </Content>

          <div className="lg:flex flex-wrap max-w-[1260px] gap-x-[80px]   gap-y-[40px] mt-8 hidden">
            {data?.items?.map((item: any, index: number) => (
              <ThemedIconCard data={item} key={index} />
            ))}
          </div>

          <MobileSwiperTabs data={data} />

          {/* <div className="px-5 block lg:hidden">
            <CarouselComponent
              pagination={true}
              modules={[Pagination]}
              controlClassName="!hidden"
              slideClassName="flex justify-center items-center"
              slidesPerView={1}
            >
              {data.items.map((item: any, i: number) => (
                <ThemedIconCard data={item} key={i} />
              ))}
            </CarouselComponent>
          </div> */}
        </div>
      </TopLeftSplitedBanner>
    </div>
  );
};

export default CulturalHighlights;
