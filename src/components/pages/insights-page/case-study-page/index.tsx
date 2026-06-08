import JoinTeam from "@/components/sections/JoinTeam";
import CaseTable from "./components/CaseTable";
import PageBanner from "@/components/common/banner/PageBanner";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
export default function CaseStudyPage({ data }: any) {
  return (
    <>
      <section>
        <PageBanner data={convertToPageSectionData(data)} />
      </section>
      <section className="section-py">
        <CaseTable data={data.case_studies} filterParam={data.filter_param} />
      </section>
      <JoinTeam />
    </>
  );
}
