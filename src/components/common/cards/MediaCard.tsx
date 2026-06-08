import React from "react";
import ImageComponent from "../image";
import SafeHtml from "../safeHtml";
import { cn } from "@/utils/helpers/cn";
import { StaticImageData } from "next/image";
import { Content } from "../typography";

type Props = {
  data: {
    cover: StaticImageData;
    title: string;
    excerpt: string;
  };
  containerClassName?: string;
  imageContainerClassName?: string;
  imageClassName?: string;

  contentContainerClassName?: string;
};

const MediaCard = ({
  data,
  containerClassName,
  imageContainerClassName,
  imageClassName,
  contentContainerClassName,
}: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-16 items-center w-full ",
        containerClassName,
      )}
    >
      <div className={cn("md:w-1/2 w-full", imageContainerClassName)}>
        <ImageComponent
          src={data.cover}
          alt=""
          className={cn("w-full", imageClassName)}
        />
      </div>
      <div className={cn("md:w-1/2 w-full pl-0 ", contentContainerClassName)}>
        <div>
          <h3 className="heading-3 !font-semibold text-start ">
            <SafeHtml content={data.title} />
          </h3>
          <Content className="md:mt-8 mt-4 text-start">
            <SafeHtml content={data.excerpt} />
          </Content>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
