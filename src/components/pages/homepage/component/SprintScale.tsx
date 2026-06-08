import { Content, Heading2 } from "@/components/common/typography";
import SprintBg from "@/assets/images/dummy/home/sprint-bg.png";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import TopLeftSplitedBanner from "@/components/sections/banner/SplitedBanner/topLeftSplitedBanner";
import SafeHtml from "@/components/common/safeHtml";
import { useRef } from "react";
import { useCascadeSlideIn } from "@/hooks/gsap/useCascadeSlideIn";
import NavLink from "@/components/common/link/NavLink";
import routes from "@/config/routes";

type Props = {
  data: IPageSectionData;
};
export default function SprintScale({ data }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  useCascadeSlideIn({ target: sectionRef, duration: 2 });
  return (
    <TopLeftSplitedBanner
      bgImage={SprintBg}
      containerClassName="bg-black dark:bg-[#0D0D0D]"
      imageComponentClassName=" max-h-[200px] md:max-h-full"
    >
      <div ref={sectionRef} className="sm:mb-[150px] mb-[120px]">
        <Heading2>
          <SafeHtml content={data.headline} />
        </Heading2>
        <Content>
          {/* <ul class="flex flex-col gap-2 list-disc list-outside mb-4 ml-4">
            <li>
              We have top-tier tech experts who work based on your mission and
              vision.
            </li>
            <li>
              We implement well-trained AI/ML and efficient cloud solutions,
              ensuring your success.
            </li>
            <li>
              We’re a trend conscious team, making us serve you with the exact
              solution.
            </li>
            <li>
              After the partnership, we constantly monitor your progress and
              make necessary changes.
            </li>
          </ul> */}
          <SafeHtml content={data.excerpt} />
        </Content>
        {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
        <NavLink href={routes.about}>
          <PrimaryButton className="mt-8">Meet Smart-Lab Global</PrimaryButton>
        </NavLink>
      </div>
    </TopLeftSplitedBanner>
  );
}
