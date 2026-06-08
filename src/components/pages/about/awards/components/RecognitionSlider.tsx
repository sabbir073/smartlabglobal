"use client";
import ImageComponent from "@/components/common/image";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";
import MediaContentSlider from "@/components/common/slider/MediaContentSlider";
import { Content, Heading2 } from "@/components/common/typography";
import SafeHtml from "@/components/common/safeHtml";
import { cn } from "@/utils/helpers/cn";

type Props = { data: any; imageHighlight?: "cover" | "thumb" };

const RecognitionSlider = ({ data, imageHighlight = "cover" }: Props) => {
  return (
    <div className="mx-auto section-py">
      <ContentContainer>
        <div className=" md:text-left text-center">
          <Heading2 className="capitalize">Recognition</Heading2>
        </div>
      </ContentContainer>
      <div className="bg-[#FFFFFF] dark:bg-[#1C1C1F] ">
        <ContentContainer disablePLOnLg className="px-0 ">
          <MediaContentSlider
            mediaContainerClassName={cn(
              imageHighlight === "thumb" ? "" : "md:bg-transparent",
            )}
            sideContent={
              data.items &&
              data.items.map((item: any, i: number) => (
                <div className="mb-4" key={i}>
                  <Content className="!lg:text-[16px] !text-[#FF4306] pb-4">
                    <SafeHtml content={item.tags} />
                  </Content>
                  <Heading2 className="max-h-[320px] overflow-y-auto pr-2 scrollbar-hide">
                    <SafeHtml content={item.title} />
                  </Heading2>
                </div>
              ))
            }
          >
            {data.items &&
              data.items.map((slide: any, i: number) => {
                const imageSrc =
                  imageHighlight === "thumb"
                    ? slide.thumb || slide.cover
                    : slide.cover || slide.thumb;

                return (
                  <div
                    key={i}
                    className={cn(
                      "relative flex  w-full h-full",
                      imageHighlight === "thumb"
                        ? "justify-center items-center"
                        : "justify-center md:justify-start items-center md:items-start",
                    )}
                  >
                    <div
                      className={cn(
                        "overflow-hidden flex items-center justify-center  ",
                        imageHighlight === "thumb"
                          ? "w-[58%] md:w-[22.5%] aspect-square  "
                          : "w-[58%] h-[63%] md:w-full md:h-full aspect-square ",
                      )}
                    >
                      <ImageComponent
                        src={imageSrc}
                        alt={`image-${i}`}
                        className={cn(
                          "object-cover w-full h-full",
                          imageHighlight === "thumb"
                            ? "rounded-full"
                            : " rounded-full md:rounded-none",
                        )}
                      />
                    </div>
                  </div>
                );
              })}
          </MediaContentSlider>
        </ContentContainer>
      </div>
    </div>
  );
};

export default RecognitionSlider;
