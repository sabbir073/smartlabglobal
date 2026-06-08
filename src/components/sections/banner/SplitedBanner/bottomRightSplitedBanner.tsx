import { StaticImageData } from "next/image";
import './style.scss'
import ContentContainer from "@/components/layout/container/contentContainer";
import ImageComponent from "@/components/common/image";
import { cn } from "@/utils/helpers/cn";
import { useRef } from "react";
import { useScrollBarFill } from "@/hooks/gsap/useScrollBarFill";
import { useScrollSlideUp } from "@/hooks/gsap/useScrollSlideUp";
import AtGlanceBackdrop from "@/components/pages/SingleServicePage/components/common/AtGlanceBackdrop";
type Props = {
  bgImage: StaticImageData;
  children?: React.ReactNode
  containerClassName?: string,
  overlayClassName?: string,
  showBackDrop?: boolean;
  backDropClassName?: string;

}

export default function BottomRightSplitedBanner({ bgImage, children, containerClassName = "", showBackDrop = false, backDropClassName = "", }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<any>(null);

  useScrollBarFill(containerRef, barRef);
  useScrollSlideUp({ targetRef: imgRef, containerRef, scrub: 3.5, scale: 1.3 });

  return (
    <div ref={containerRef} className={cn('relative min-h-[42.656vw] flex flex-col  dark:bg-[#0D0D0D] bg-[#E6E7E8]  overflow-hidden', containerClassName)}>
      {showBackDrop && <AtGlanceBackdrop className={cn("z-[1]", backDropClassName)} />}
      <ImageComponent
        src={bgImage} width={1920} height={818}
        quality={100} alt='banner-image'
        className='absolute right-0 top-0 object-cover h-[calc(100%-1px)] w-full object-bottom z-0'
        ref={imgRef}
      />
      <div className='flex md:flex-row flex-col h-full flex-grow z-10'>
        <div className=' w-full relative'>

          <div
            className="absolute md:right-4 right-0  bottom-0 z-0 h-full w-full scale-105 md:scale-105 xl:scale-125 bottomRight-overlay-banner "
          >
            <div
              ref={barRef}
              className="w-full bg-banner_bar absolute bottom-0"
            />
          </div>

          <div
            className=' bottomRight-overlay-banner absolute -bottom-1 left-0 w-full h-full overflow-hidden bg-[#FFFFFF]  dark:bg-[#1C1C1F]'
          />


          <ContentContainer className='relative z-10 flex flex-col justify-end pb-16 pt-60 '>
            {children}
          </ContentContainer>
        </div>
      </div>
    </div>
  )
}