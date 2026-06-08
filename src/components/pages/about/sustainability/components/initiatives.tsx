import ContentContainer from "@/components/layout/container/contentContainer";
import { Heading2 } from "@/components/common/typography";
import CarouselComponent from "@/components/common/slider/slider";
import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";

type Props = {
  data: IPageSectionData;
};

const SustainabilityInitiatives = ({ data }: Props) => {
  return (
    <ContentContainer className="section-py dark:bg-[#1C1C1F]">
      <Heading2 className="lg:mb-[20px] md:mb-[10px]  mb-0">
        <SafeHtml content={data.headline} />
      </Heading2>
      <CarouselComponent controlClassName="lg:top-[-15%] md:top-[-15%] sm:top-[100%] top-[98%] ">
        {data?.items?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:gap-[62px] gap-[40px] md:flex-row justify-between"
          >
            <div className="md:w-auto w-full max-w-[530px] flex flex-col items-center justify-center ">
              <SafeHtml content={item.excerpt} />
            </div>
            <div className="md:w-auto w-full md:aspect-[605/530] aspect-[350/276]">
              <ImageComponent
                src={item.cover}
                alt="Sustainability Commitment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </CarouselComponent>
    </ContentContainer>
  );
};

export default SustainabilityInitiatives;
