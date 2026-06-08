import ImageComponent from "@/components/common/image";
import SafeHtml from "@/components/common/safeHtml";
import React from "react";
type Props = { award: any };

const AwardCard = ({ award }: Props) => {
  return (
    <div className="bg-[#E6E7E8] dark:bg-[#0D0D0D] p-6 relative w-full h-full  ">
      <div className="inline-block px-3 py-1 text-[14px] font-normal text-[#FF4306] rounded-full">
        {award.title}
      </div>

      {/* Image with fixed ratio */}
      <div className="flex justify-center items-center mx-auto my-3 xl:mt-8 xl:mb-6 w-[182px] h-[182px] rounded-full relative overflow-hidden">
        <ImageComponent
          src={award.thumb}
          alt={award.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" text-sm leading-relaxed">
        <SafeHtml content={award.excerpt} />
      </div>
    </div>
  );
};

export default AwardCard;
