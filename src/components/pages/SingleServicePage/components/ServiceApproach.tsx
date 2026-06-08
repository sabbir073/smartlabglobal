import ImageComponent from "@/components/common/image";
import { Heading2 } from "@/components/common/typography";
import ContentContainer from "@/components/layout/container/contentContainer";
import SafeHtml from "@/components/common/safeHtml";
import { useState } from "react";
import { cn } from "@/utils/helpers/cn";
type Props = {
  data: IPageSectionData;
  containerClassName?: string;
};
export default function ServiceApproach({ data, containerClassName }: Props) {
  const [selectedApproach, setSelectedApproach] = useState<
    IPageSectionData["items"][0]
  >(data?.items?.[0]);

  return (
    <ContentContainer className={cn("relative", containerClassName)}>
      <ImageComponent
        src={data?.cover}
        alt="background"
        className=" absolute top-0 left-0 object-cover w-full h-full z-[-1]"
      />
      <div className=" absolute top-0 left-0 w-full h-full bg-[#00000099] z-[-1]"></div>
      <div className=" flex lg:flex-row flex-col lg:gap-[5.52vw] gap-10 z-10 items-center justify-between ">
        <Heading2 className="text-[#F4F4F4]">
          <SafeHtml content={data.headline} />
        </Heading2>
        <div className="w-full max-w-[350px] flex justify-center">
          <ImageComponent
            src={selectedApproach?.cover}
            alt=""
            className="w-[150px] aspect-square rounded-full"
          />
        </div>
        <div className="lg:min-w-[22.917vw] md:max-w-[440px] w-full">
          <ul className="w-full md:text-left text-center">
            {data.items.map((approach, index) => (
              <li
                onClick={() => setSelectedApproach(approach)}
                key={index}
                className="text-[24px] text-[#F4F4F4] py-6 border-b border-[#FFFFFF66] leading-[1] last:border-none first:pt-0 last:pb-0 cursor-pointer"
              >
                {approach.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentContainer>
  );
}
