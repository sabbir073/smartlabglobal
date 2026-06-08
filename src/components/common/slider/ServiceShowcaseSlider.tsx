import ImageComponent from "@/components/common/image";
import React, { useEffect, useState } from "react";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import CarouselComponent from "@/components/common/slider/slider";
import SafeHtml from "../safeHtml";
import SvgInline from "../image/SvgInline";
import NavLink from "../link/NavLink";
import routes from "@/config/routes";

type Props = {
  headline?: IPageSectionData["headline"];
  description?: IPageSectionData["excerpt"];
  services: ISectionItem[];
};

const ServiceShowcaseSlider = ({ headline, description, services }: Props) => {
  const [selectedService, setSelectedService] = useState<ISectionItem | null>(
    null,
  );
  const [fade, setFade] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Initialize selectedService on mount or services change
  useEffect(() => {
    if (services?.length) {
      setSelectedService(services[0]);
    }
  }, [services]);

  useEffect(() => {
    if (!services?.length) return;

    const normalizedIndex = activeIndex % services.length;
    const newService = services[normalizedIndex];

    if (newService && newService.cover !== selectedService?.cover) {
      setFade(false);

      // After fade-out duration, swap images and fade-in
      const timeout = setTimeout(() => {
        // setPrevBanner(selectedService?.cover ?? null);
        setSelectedService(newService);
        setFade(true);
      }, 300); // 300ms fade out duration, adjust as you want

      return () => clearTimeout(timeout);
    }
  }, [activeIndex, services]);

  return (
    <div className="relative section-pt flex flex-col  bg-black text-white">
      <ImageComponent
        src={selectedService?.cover}
        alt="banner"
        height={500}
        width={500}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700   ${
          fade ? "opacity-30" : "opacity-0"
        }`}
      />
      <ContentContainer className="md:text-left z-10">
        <Heading2 className="!text-white font-semibold capitalize mb-3">
          Industries we serve
          {/* <SafeHtml content={headline} /> */}
        </Heading2>
        {/* {description && ( */}
        <Content className="max-w-[594px] !text-[#F4F4F4] w-full ">
          <SafeHtml
            content={`<p class="font-poppins font-normal text-[14px] leading-[24px] tracking-[0] text-[#F4F4F4]">We empower diverse industries with tailored digital solutions that enhance efficiency, accelerate growth, and drive meaningful business transformation.</p>`}
          />
          {/* <SafeHtml content={description} /> */}
        </Content>
        {/* )} */}
      </ContentContainer>
      <ContentContainer disablePR className="z-10  mt-[90px]">
        <CarouselComponent
          slideChangeSpeed={600}
          slideClassName="xl:!w-[193px] !w-[174px] !aspect-[193/254] pb-0"
          onSlideChange={(index: any) => setActiveIndex(index)}
          controlClassName="left-0 translate-x-0 translate-y-[-100%] md:!top-[-84px] -top-[170px]"
          arrowHasWhiteBorder
          containerClassName="md:mt-[100px] mt-[150px]"
        >
          {[...services, ...services].map((item, index: number) => (
            <NavLink
              href={routes.industryDetail(item.slug)}
              key={index}
              className={`w-full ${
                activeIndex === index ? "bg-[#FF4306]" : ""
              } transition-all duration-300 ease-in-out min-h-[230px] lg:min-h-[254px]`}
            >
              <div
                onMouseOver={() => setActiveIndex(index)}
                className={` text-white w-full h-full flex flex-col lg:p-4 px-4 lg:py-10 py-4 relative group overflow-hidden single-item `}
              >
                <div className="border-t-[3px]  border-t-[#F4F4F4] mb-6 w-[70%] "></div>
                <span className="w-[33.3px] h-[33.3px]">
                  {item?.icon && (
                    <ImageComponent
                      className="w-full h-full"
                      src={activeIndex === index ? item.icon : item.icon_dark}
                      alt="icon"
                    />
                  )}
                </span>
                <p className="mt-4 2xl:text-[20px] lg:text-[17px] transition-all font-[500] duration-300 ease-in-out z-10 relative text-[#F4F4F4] break-words select-none">
                  {item.title}
                </p>
              </div>
            </NavLink>
          ))}
        </CarouselComponent>
      </ContentContainer>
    </div>
  );
};

export default ServiceShowcaseSlider;
