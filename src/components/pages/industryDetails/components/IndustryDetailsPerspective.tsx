import PrimaryButton from "@/components/common/button/PrimaryButton";
import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import CarouselComponent from "@/components/common/slider/slider";
import { Content, Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import routes from "@/config/routes";
import { useIsMobile } from "@/hooks/useMobile";
import { useRouter } from "next/navigation";
import React from "react";
import { Pagination } from "swiper/modules";

type Props = {
  data: IPageSectionData;
};

const IndustryDetailsPerspective = ({ data }: Props) => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const knowMoreHandler = (category: any, slug: any) => {
    let path = "";
    if (category?.slug == "views") {
      path = routes.blogDetail(slug);
    } else if (category?.slug == "news") {
      path = routes.newsDetails(slug);
    } else if (category?.slug == "events") {
      path = routes.eventsDetail(slug);
    }
    router.push(path);
  };

  return (
    <ContentContainer className="section-py dark:bg-[#0D0D0D] ">
      <Heading2 className="md:text-start text-center ">
        <SafeHtml content={"Our Perspective"} />
      </Heading2>
      <CarouselComponent
        slidesPerView={1.1}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 1.1,
          },
        }}
        controlClassName="md:-top-24 top-[calc(100%+20px)]  z-[10] lg:pr-0 md:flex hidden"
        pagination={
          isMobile
            ? {
              clickable: true,
              bulletClass: "swiper-pagination-bullet !mt-16",
            }
            : false
        }

      // modules={[Pagination]}
      >
        {data?.items?.map((item, index) => (
          <div
            className="flex flex-col-reverse gap-12 items-center md:flex-row w-full "
            key={index}
          >
            <div className="md:w-1/2 w-full ">
              <ImageComponent
                src={item.thumb}
                alt=""
                className="w-full aspect-[628/499]"
              />
            </div>

            <div className="md:w-1/2 w-full pr-0 md:pr-16 flex flex-col md:items-start items-center ">
              <Content className="md:mb-8 mb-2">
                <SafeHtml
                  className="font-semibold font-poppins capitalize"
                  content={
                    typeof item?.category === "object"
                      ? item?.category?.slug
                      : item.category
                  }
                />
              </Content>
              <Heading2 className="md:font-[700] font-[500] md:text-[30px] text-[20px] md:text-start text-center">
                <SafeHtml content={item.title} />
              </Heading2>
              <PrimaryButton
                onClick={() => knowMoreHandler(item?.category, item?.slug)}
              >
                Know More
              </PrimaryButton>
            </div>
          </div>
        ))}
      </CarouselComponent>
    </ContentContainer>
  );
};

export default IndustryDetailsPerspective;
