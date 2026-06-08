import React from "react";
import CustomerBg from "@/assets/images/dummy/about/customer-bg.png";
import ImageComponent from "@/components/common/image";
import { Content, Heading2 } from "@/components/common/typography";
import SafeHtml from "@/components/common/safeHtml";
import ContentContainer from "@/components/layout/container/contentContainer";
import { useDarkMode } from "@/hooks/useDarkMode";
import Marquee from "@/components/common/marquee/MarqueeComponent";

type Props = { data: any };

const Customer = ({ data }: Props) => {
  const half = Math.ceil(data.items?.length / 2);
  const firstRow = data.items.slice(0, half);
  const secondRow = data.items.slice(half);
  const { isDarkMode } = useDarkMode();

  const getLogoImage = (logo: any) => {
    return isDarkMode
      ? logo.darkLogo?.length
        ? logo.darkLogo
        : logo.lightLogo
      : logo.lightLogo;
  };

  return (
    <div className="relative w-full overflow-hidden md:py-[90px] py-[80px]">
      {/* Background Image */}
      <ImageComponent
        src={data.cover}
        alt="Customer Background"
        // className="object-cover hidden lg:block"
        className="absolute inset-0 w-full h-full object-cover hidden lg:block"
        priority
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-90 z-10"></div>

      {/* Content */}
      <div className="relative z-20 ">
        <ContentContainer className=" max-w-[1200px] ">
          <Heading2 className=" !text-white">
            <SafeHtml content={data.headline} />
          </Heading2>
          <Content className=" max-w-[534px] !text-white">
            <SafeHtml content={data.excerpt} />
          </Content>
        </ContentContainer>
        <div className="md:pt-[73px] pt-[42px]">
          <div className="max-w-[1600px] mx-auto space-y-10 md:space-y-10">
            {[firstRow, secondRow].map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="overflow-x-auto sm:overflow-visible no-scrollbar"
              >
                <Marquee
                  direction={rowIndex % 2 === 0 ? "left" : "right"}
                  speed={30}
                >
                  <div className="flex gap-[68px] lg:gap-[114px] sm:place-items-center">
                    {row.map((logo: any, idx: number) => (
                      <div
                        key={idx}
                        className="relative h-[40px] md:h-[60px] aspect-[213/69] md:aspect-[215/62] w-full flex items-center justify-center"
                      >
                        <ImageComponent
                          src={getLogoImage(logo)}
                          alt={logo.alt}
                          className="object-contain max-h-full max-w-full"
                        />
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
