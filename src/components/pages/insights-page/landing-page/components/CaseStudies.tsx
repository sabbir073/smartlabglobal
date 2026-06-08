import PrimaryButton from "@/components/common/button/PrimaryButton";
import CoverFlowSlider from "@/components/common/slider/CoverFlowSlider";
import ContentContainer from "@/components/layout/container/contentContainer";
import routes from "@/config/routes";
type Props = {
  data: IPageSectionData;
};
export default function CaseStudies({ data }: Props) {
  return (
    <div className="mx-auto">
      <ContentContainer className="md:text-left text-center px-0">
        <CoverFlowSlider headline={data.headline} items={data.items} />
        <div className="text-center">
          <PrimaryButton
            variant="outlined"
            href={routes.caseStudies}
            className="px-[30px] py-[14px] mt-10"
          >
            View All Case Studies
          </PrimaryButton>
        </div>
      </ContentContainer>
    </div>
  );
}
